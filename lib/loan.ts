/**
 * BlueSky loan cost calculation.
 * Governed by the National Credit Act No. 34 of 2005.
 *
 *  - Interest:      5% per month (simple interest)
 *  - Service Fee:   R60 per month
 *  - Initiation:    R165 on the first R1,000 + 10% on the amount above R1,000
 */
export type LoanBreakdown = {
  principal: number
  months: number
  interest: number
  serviceFee: number
  initiationFee: number
  vat: number
  creditLife: number
  total: number
  monthly: number
  apr: number
}

/**
 * Calculate loan cost including VAT and optional credit-life.
 * - Interest: 5% per month (simple interest)
 * - Service fee: R60 per month
 * - Initiation: R165 on the first R1,000 + 10% on the amount above R1,000
 * - VAT: 15% applied to service fee + initiation fee
 * - Credit life: R5.50 per R1,000 borrowed (not VATable)
 *
 * Returns a breakdown with rounded values and an annualised APR based on
 * the monthly interest rate (5% p.m. -> 60% APR representative).
 */
export function calculateLoan(
  principal: number,
  months: number,
  options?: { includeVat?: boolean; includeCreditLife?: boolean },
): LoanBreakdown {
  const includeVat = options?.includeVat ?? true
  const includeCreditLife = options?.includeCreditLife ?? true

  const monthlyInterestRate = 0.05
  const VAT_RATE = 0.15

  const interest = principal * monthlyInterestRate * months
  const serviceFee = 60 * months
  const initiationFee = principal <= 1000 ? 165 : 165 + (principal - 1000) * 0.1

  // Split VAT on initiation (upfront) and VAT on service fee (monthly component)
  const vatOnInitiation = includeVat ? initiationFee * VAT_RATE : 0
  const vatOnService = includeVat ? serviceFee * VAT_RATE : 0
  const vat = vatOnInitiation + vatOnService

  // Credit life: R5.50 per R1,000 borrowed (charged once upfront)
  const creditLife = includeCreditLife ? (principal / 1000) * 5.5 : 0

  const total =
    principal + interest + serviceFee + initiationFee + vat + creditLife

  const monthly = total / months

  // Build cashflows for IRR: disbursement at t=0 is principal minus upfront fees
  // Amortise upfront fees into the monthly repayments: disbursement is full principal
  const upfrontFees = initiationFee + vatOnInitiation + (includeCreditLife ? creditLife : 0)
  const disbursement = principal

  const cashflows: number[] = []
  cashflows.push(disbursement)
  for (let i = 1; i <= months; i++) {
    cashflows.push(-monthly)
  }

  // IRR solver (bisection) for monthly rate
  function irr(cf: number[], maxIter = 100, tol = 1e-8) {
    const npv = (r: number) => {
      let sum = 0
      for (let i = 0; i < cf.length; i++) {
        sum += cf[i] / Math.pow(1 + r, i)
      }
      return sum
    }

    let low = -0.999999
    let high = 10
    let fLow = npv(low)
    let fHigh = npv(high)
    if (fLow === 0) return low
    if (fHigh === 0) return high
    if (fLow * fHigh > 0) {
      // fallback: no sign change, return NaN
      return NaN
    }

    let mid = 0
    for (let iter = 0; iter < maxIter; iter++) {
      mid = (low + high) / 2
      const fMid = npv(mid)
      if (Math.abs(fMid) < tol) return mid
      if (fLow * fMid < 0) {
        high = mid
        fHigh = fMid
      } else {
        low = mid
        fLow = fMid
      }
    }
    return mid
  }

  const monthlyRate = irr(cashflows)

  // APR as annual percentage rate derived from monthly IRR
  let apr = 0
  if (!isNaN(monthlyRate)) {
    apr = (Math.pow(1 + monthlyRate, 12) - 1) * 100
  } else {
    // fallback to fees-inclusive annualisation if IRR fails
    apr = principal > 0 ? ((total - principal) / principal) / (months / 12) * 100 : 0
  }

  return {
    principal,
    months,
    interest: Math.round(interest * 100) / 100,
    serviceFee: Math.round(serviceFee * 100) / 100,
    initiationFee: Math.round(initiationFee * 100) / 100,
    vat: Math.round(vat * 100) / 100,
    creditLife: Math.round(creditLife * 100) / 100,
    total: Math.round(total * 100) / 100,
    monthly: Math.round(monthly * 100) / 100,
    apr: Math.round(apr * 100) / 100,
  }
}
