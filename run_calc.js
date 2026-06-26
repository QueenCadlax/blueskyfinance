function calculateLoan(principal, months, options){
  const includeVat = options?.includeVat ?? true
  const includeCreditLife = options?.includeCreditLife ?? true
  const monthlyInterestRate = 0.05
  const VAT_RATE = 0.15
  const interest = principal * monthlyInterestRate * months
  const serviceFee = 60 * months
  const initiationFee = principal <= 1000 ? 165 : 165 + (principal - 1000) * 0.1
  const vatOnInitiation = includeVat ? initiationFee * VAT_RATE : 0
  const vatOnService = includeVat ? serviceFee * VAT_RATE : 0
  const vat = vatOnInitiation + vatOnService
  const creditLife = includeCreditLife ? (principal / 1000) * 5.5 : 0
  const total = principal + interest + serviceFee + initiationFee + vat + creditLife
  const monthly = total / months
  const upfrontFees = initiationFee + vatOnInitiation + (includeCreditLife ? creditLife : 0)
  // Amortise upfront fees: borrower receives full principal at t=0
  const disbursement = principal
  const cashflows = [disbursement]
  for(let i=1;i<=months;i++) cashflows.push(-monthly)
  function npv(r){let s=0; for(let i=0;i<cashflows.length;i++) s+=cashflows[i]/Math.pow(1+r,i); return s}
  function irr(cf, maxIter=200, tol=1e-12){
    let low=-0.999999, high=10
    let fLow=npv(low), fHigh=npv(high)
    if(fLow*fHigh>0) return NaN
    let mid=0
    for(let iter=0; iter<maxIter; iter++){
      mid=(low+high)/2
      const fMid=npv(mid)
      if(Math.abs(fMid)<tol) return mid
      if(fLow*fMid<0){ high=mid; fHigh=fMid } else { low=mid; fLow=fMid }
    }
    return mid
  }
  const monthlyRate = irr(cashflows)
  let apr = 0
  if(!isNaN(monthlyRate)) apr = (Math.pow(1+monthlyRate,12)-1)*100
  else apr = principal>0? ((total-principal)/principal)/(months/12)*100:0
  return {
    principal,
    months,
    interest: Math.round(interest*100)/100,
    serviceFee: Math.round(serviceFee*100)/100,
    initiationFee: Math.round(initiationFee*100)/100,
    vatOnInitiation: Math.round(vatOnInitiation*100)/100,
    vatOnService: Math.round(vatOnService*100)/100,
    vat: Math.round(vat*100)/100,
    creditLife: Math.round(creditLife*100)/100,
    total: Math.round(total*100)/100,
    monthly: Math.round(monthly*100)/100,
    monthlyRate: Math.round((monthlyRate||0)*1000000)/1000000,
    apr: Math.round(apr*100)/100
  }
}

console.log(JSON.stringify(calculateLoan(2500,3),null,2))
