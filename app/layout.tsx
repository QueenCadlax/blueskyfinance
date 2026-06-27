import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-heading',
  subsets: ['latin'],
  display: 'swap',
})
const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  display: 'swap',
})

const SITE_URL = 'https://blueskyfinancialservices.co.za'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Bluesky Finance | Fast Loans in South Africa',
    template: '%s | BlueSky Financial Services',
  },
  description:
    'NCR Registered Credit Provider offering fast, reliable financial services and short-term loans in South Africa.',
  keywords: [
    'Lydenburg loans',
    'cash loans Lydenburg',
    'personal loans Lydenburg',
    'short-term loans Lydenburg',
    'NCR registered credit provider',
    'WhatsApp loan application',
    'emergency cash loan South Africa',
    'local loan branch Lydenburg',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  authors: [{ name: 'BlueSky Financial Services (Pty) Ltd' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    title: 'BlueSky Financial Services | Fast Cash & Personal Loans in Lydenburg',
    description:
      'Licensed fast cash loans in Lydenburg from R350 to R8,000 with transparent fees, quick WhatsApp support, and trusted local service.',
    siteName: 'BlueSky Financial Services',
    images: [
      {
        url: `${SITE_URL}/hero-employee.png`,
        alt: 'BlueSky Financial Services consultant in Lydenburg',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BlueSky Financial Services | Fast Cash & Personal Loans in Lydenburg',
    description:
      'Licensed fast cash loans in Lydenburg from R350 to R8,000 with transparent fees, quick WhatsApp support, and trusted local service.',
    images: [`${SITE_URL}/hero-employee.png`],
  },
  icons: {
    icon: '/favicon_io/favicon.ico',
    shortcut: '/favicon_io/favicon-32x32.png',
    apple: '/favicon_io/apple-touch-icon.png',
  },
  manifest: '/favicon_io/site.webmanifest',
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#D4AF37',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en-ZA"
      className={`${jakarta.variable} ${inter.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
