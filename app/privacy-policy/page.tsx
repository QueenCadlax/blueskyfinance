import { Navbar } from '@/components/navbar'
import { SectionHeading } from '@/components/section-heading'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <section className="bg-secondary px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              eyebrow="Privacy Policy"
              title="How we protect your personal information"
              description="BlueSky Financial Services is committed to keeping your data secure, private and only used to support your loan application and customer experience."
            />
            <div className="mt-10 space-y-8 text-sm leading-relaxed text-foreground/80 sm:text-base">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">What information we collect</h2>
                <p className="mt-4">
                  We collect only the personal and financial details required to process your loan application, verify your identity and assess affordability. This includes your name, contact details, ID number, payslips, bank statements and employment information.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">How we use your details</h2>
                <p className="mt-4">
                  Your information is used to evaluate your loan eligibility, communicate with you about your application, support responsible lending decisions and comply with regulatory requirements under the National Credit Act.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Data security</h2>
                <p className="mt-4">
                  We protect your personal information using industry-standard security practices and limit access to authorised BlueSky staff only. We do not sell your data to third parties.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <h2 className="font-heading text-lg font-semibold text-foreground">Your rights</h2>
                <p className="mt-4">
                  You may request access to your personal information, ask us to correct errors, or withdraw consent where applicable. Contact us via WhatsApp or email for any privacy-related request.
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
