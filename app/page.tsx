import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { TrustStrip } from '@/components/trust-strip'
import { LoanProducts } from '@/components/loan-products'
import { LoanCalculatorSection } from '@/components/loan-calculator-section'
import { Requirements } from '@/components/requirements'
const SITE_URL = 'https://blueskyfinancialservices.co.za'
import { HowItWorks } from '@/components/how-it-works'
import { Referral } from '@/components/referral'
import { WhyChoose } from '@/components/why-choose'
import { Testimonials } from '@/components/testimonials'
import { Founder } from '@/components/founder'
import { ContactBranches } from '@/components/contact-branches'
import { SiteFooter } from '@/components/site-footer'
import { MobileActionBar } from '@/components/mobile-action-bar'
import { FloatingWhatsAppButton } from '@/components/floating-whatsapp'
import { BRANCHES, COMPANY } from '@/lib/site'
import { structuredData } from './structured-data'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FinancialService',
  '@id': `${SITE_URL}/#financialservice`,
  name: COMPANY.legalName,
  description:
    'Licensed fast cash loans in Lydenburg from R350 to R8,000 with transparent fees, quick WhatsApp support, and trusted local service.',
  email: COMPANY.email,
  telephone: '+27' + COMPANY.officePhone.replace(/\D/g, '').replace(/^0/, ''),
  areaServed: 'Lydenburg, Mpumalanga, South Africa',
  address: {
    '@type': 'PostalAddress',
    streetAddress: BRANCHES[0].address.slice(0, -1).join(', '),
    addressLocality: 'Lydenburg',
    postalCode: '1120',
    addressCountry: 'ZA',
  },
  sameAs: [SITE_URL],
  priceRange: 'R350 - R8,000',
  currenciesAccepted: 'ZAR',
  location: BRANCHES.map((b) => ({
    '@type': 'LocalBusiness',
    name: b.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.address.slice(0, -1).join(', '),
      addressLocality: 'Lydenburg',
      postalCode: '1120',
      addressCountry: 'ZA',
    },
    telephone: b.phones[0],
  })),
  openingHours: ['Mo-Fr 08:00-16:30', 'Sa 08:00-13:00'],
}

const faqLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much can I borrow from BlueSky Financial Services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can borrow from R350 up to R8,000 depending on your affordability assessment and credit profile.',
      },
    },
    {
      '@type': 'Question',
      name: 'What interest rate do you charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Interest is 5% per month (simple interest), reduced to 3% per month on additional loans within the same calendar year.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are SASSA grants accepted as income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. SASSA grants are not accepted as a source of income for loan applications. Applicants must be permanently employed.',
      },
    },
  ],
}

const breadcrumbLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_URL,
    },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <main className="pb-16 lg:pb-0">
        <Hero />
        <TrustStrip />
        <LoanCalculatorSection />
        <LoanProducts />
        <Requirements />
        <HowItWorks />
        <Referral />
        <WhyChoose />
        <Testimonials />
        <Founder />
        <ContactBranches />
      </main>
      <SiteFooter />
      <MobileActionBar />
      <FloatingWhatsAppButton />
    </>
  )
}
