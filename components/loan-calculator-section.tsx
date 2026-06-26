import { LoanCalculator } from '@/components/loan-calculator'

export function LoanCalculatorSection() {
  return (
    <section id="calculator" className="bg-background/0 py-12">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center font-heading text-2xl font-extrabold">
          Calculate Your Loan
        </h2>
        <LoanCalculator />
      </div>
    </section>
  )
}
