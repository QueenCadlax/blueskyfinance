import { Mail, MessageCircle } from 'lucide-react'
import { Logo } from '@/components/logo'
import { COMPANY, NAV_LINKS, waLink, DEFAULT_WA_MESSAGE } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-foreground px-4 py-12 text-background sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-background/60">
              {COMPANY.legalName} is a registered credit provider offering
              quick, responsible loans to help you when you need it most. A
              helping hand you can count on.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={waLink(DEFAULT_WA_MESSAGE)}
                target="_blank"
                rel="noopener"
                aria-label="Chat with us on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                aria-label="Email BlueSky Financial Services"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-background">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-background">
              Legal &amp; Compliance
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-background/60">
              <li>NCR: {COMPANY.ncr}</li>
              <li>SACRRA: {COMPANY.sacrra}</li>
              <li>Reg: {COMPANY.reg}</li>
              <li>
                <a href="/privacy-policy" className="transition-colors hover:text-background">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="transition-colors hover:text-background">
                  Terms &amp; Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-background/15 pt-6">
          <p className="text-xs leading-relaxed text-background/50">
            Loans are granted based on affordability assessments and credit
            profile. {COMPANY.name} promotes responsible lending. Fees and
            interest are governed by the National Credit Act No. 34 of 2005.
            {' '}
            {COMPANY.legalName} is an authorised financial services provider and
            registered credit provider {COMPANY.ncr}.
          </p>
          <p className="mt-4 text-xs text-background/50">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights
            reserved.
          </p>
          <p className="mt-4 text-xs leading-relaxed text-background/50">
            Website designed, developed and maintained by{' '}
            <a
              href="https://www.lowveldhub.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80"
            >
              LowveldHub
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  )
}
