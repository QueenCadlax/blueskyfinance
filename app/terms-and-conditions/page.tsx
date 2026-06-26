import { Navbar } from '@/components/navbar'
import { SectionHeading } from '@/components/section-heading'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp'

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <section className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Terms & Conditions"
              title="Simple, transparent lending terms"
              description="These terms explain how loan applications are processed, how fees are charged, and what you can expect when borrowing from BlueSky Financial Services."
            />
            <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80 sm:text-base">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Loan applications</h2>
                <p className="mt-4">
                  Loan applications are reviewed based on the information you provide and our affordability assessment. Approval is not guaranteed and depends on your income, employment status and credit record.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Fees and interest</h2>
                <p className="mt-4">
                  Interest and fees are clearly disclosed before you apply. A service fee of R60 per month plus VAT and an initiation fee of R165 on the first R1,000 apply, with additional interest rates explained in the Fees section.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Repayment</h2>
                <p className="mt-4">
                  Repayments must be made on time to avoid additional costs. We support responsible lending and work with customers to manage repayment schedules where possible.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Contact</h2>
                <p className="mt-4">
                  If you have questions about these terms or your loan, contact us on WhatsApp or email. We are committed to clear communication and responsible service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <MobileActionBar />
      <FloatingWhatsAppButton />
    </>
  )
}
