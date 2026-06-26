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
      'BlueSky Financial Services | Personal & Cash Loans in Lydenburg',
    template: '%s | BlueSky Financial Services',
  },
  description:
    'Quick, responsible loans from R350 to R8,000 in Lydenburg. Fast approvals, transparent fees and friendly local service. Apply via WhatsApp or visit one of our two branches. NCR Registered Credit Provider NCRCP19207.',
  keywords: [
    'Loans Lydenburg',
    'Personal Loans Lydenburg',
    'Cash Loans Lydenburg',
    'Payday Loans Lydenburg',
    'Emergency Loans Lydenburg',
    'Registered Credit Provider Lydenburg',
    'WhatsApp Loans South Africa',
  ],
  authors: [{ name: 'BlueSky Financial Services (Pty) Ltd' }],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: SITE_URL,
    title: 'BlueSky Financial Services | A Helping Hand You Can Count On',
    description:
      'Quick, responsible loans from R350 to R8,000 in Lydenburg with fast approvals and transparent fees.',
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
    title: 'BlueSky Financial Services | A Helping Hand You Can Count On',
    description:
      'Quick, responsible loans from R350 to R8,000 in Lydenburg with fast approvals and transparent fees.',
    images: [`${SITE_URL}/hero-employee.png`],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
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
