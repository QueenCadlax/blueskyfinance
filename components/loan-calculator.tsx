'use client'

import { useMemo, useState } from 'react'
import { Calculator } from 'lucide-react'
import { calculateLoan } from '@/lib/loan'
import { COMPANY, formatRand, waLink } from '@/lib/site'
import { LinkButton } from '@/components/link-button'
import { cn } from '@/lib/utils'

const AMOUNT_PRESETS = [500, 1000, 2000, 4000, 6000, 8000]
const TERMS = [1, 2, 3, 4, 5, 6]

export function LoanCalculator({ className }: { className?: string }) {
  const [amount, setAmount] = useState(2000)
  const [months, setMonths] = useState(3)

  const result = useMemo(() => calculateLoan(amount, months), [amount, months])

  const pct =
    ((amount - COMPANY.loanMin) / (COMPANY.loanMax - COMPANY.loanMin)) * 100

  const waMessage = `Hi BlueSky, I'd like to apply for a loan of ${formatRand(
    amount,
  )} over ${months} month${months > 1 ? 's' : ''}. My estimated monthly repayment is ${formatRand(
    result.monthly,
  )}.`

  return (
    <div
      className={cn(
        'w-full rounded-3xl border border-border bg-card/70 sm:bg-card/95 p-5 shadow-soft-lg backdrop-blur sm:p-6',
        className,
      )}
    >
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calculator className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <h2 className="font-heading text-lg font-bold text-foreground">
            Calculate Your Loan
          </h2>
          <p className="text-xs text-muted-foreground">
            Get an instant estimate in seconds
          </p>
        </div>
      </div>

      {/* Amount */}
      <div className="mb-5">
        <div className="mb-2 flex items-center justify-between">
          <label htmlFor="loan-amount" className="text-sm font-semibold text-foreground">
            1. Loan Amount
          </label>
          <span className="rounded-lg bg-secondary px-3 py-1 font-heading text-base font-bold text-primary">
            {formatRand(amount)}
          </span>
        </div>
        <input
          id="loan-amount"
          type="range"
          className="bs-range w-full"
          min={COMPANY.loanMin}
          max={COMPANY.loanMax}
          step={50}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          style={{
            background: `linear-gradient(to right, var(--primary) ${pct}%, var(--secondary) ${pct}%)`,
          }}
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>{formatRand(COMPANY.loanMin)}</span>
          <span>{formatRand(COMPANY.loanMax)}</span>
        </div>
        <div className="mt-3 grid grid-cols-6 gap-1.5">
          {AMOUNT_PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setAmount(preset)}
              className={cn(
                'rounded-lg border py-1.5 text-xs font-semibold transition-colors',
                amount === preset
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:border-primary/40',
              )}
            >
              {preset >= 1000 ? `R${preset / 1000}k` : `R${preset}`}
            </button>
          ))}
        </div>
      </div>

      {/* Term */}
      <div className="mb-5">
        <label className="mb-2 block text-sm font-semibold text-foreground">
          2. Repayment Period
        </label>
        <div className="grid grid-cols-6 gap-1.5">
          {TERMS.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setMonths(t)}
              className={cn(
                'rounded-lg border py-2 text-xs font-semibold transition-colors',
                months === t
                  ? 'border-primary bg-primary text-primary-foreground'
                  : 'border-border bg-background text-foreground/70 hover:border-primary/40',
              )}
            >
              {t} mo
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
        <div className="mb-4 rounded-2xl bg-primary p-4 text-center text-primary-foreground">
        <p className="text-xs font-medium uppercase tracking-wide text-primary-foreground/80">
          Estimated Monthly Repayment
        </p>
        <p className="font-heading text-4xl font-extrabold tabular-nums">
          {formatRand(result.monthly)}
        </p>
        <p className="text-xs text-primary-foreground/80">
          {months} month{months > 1 ? 's' : ''} · 5% per month simple interest · Representative APR (simple annualisation) 60%
        </p>
      </div>

      <dl className="mb-4 space-y-2 text-sm">
        <Row label="Loan Principal" value={formatRand(result.principal)} />
        <Row label="Interest (5% p.m.)" value={formatRand(result.interest)} />
        <Row
          label="Initiation Fee (once-off)"
          value={formatRand(result.initiationFee)}
        />
          <Row label="VAT (15%)" value={formatRand(result.vat)} />
          <Row label="Credit Life" value={formatRand(result.creditLife)} />
        <Row label="Service Fee" value={formatRand(result.serviceFee)} />
        <div className="mt-2 flex items-center justify-between border-t border-border pt-3">
          <dt className="font-heading font-bold text-foreground">
            Estimated Total Repayment
          </dt>
          <dd className="font-heading text-lg font-extrabold text-primary">
            {formatRand(result.total)}
          </dd>
        </div>
      </dl>

      <LinkButton
        external
        href={waLink(waMessage)}
        size="lg"
        className="h-11 w-full rounded-full bg-accent text-base font-semibold text-accent-foreground hover:bg-accent/90"
      >
        Apply for This Loan
      </LinkButton>
      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
        Estimate includes interest, monthly service fee and a once-off
        initiation fee. NCR compliant. Final amount subject to affordability
        assessment.
      </p>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="font-semibold text-foreground tabular-nums">{value}</dd>
    </div>
  )
}
