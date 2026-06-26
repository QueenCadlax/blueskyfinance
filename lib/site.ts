export const COMPANY = {
  name: 'BlueSky Financial Services',
  legalName: 'BlueSky Financial Services (Pty) Ltd',
  motto: 'A Helping Hand You Can Count On',
  ncr: 'NCRCP19207',
  reg: '2023/928618/07',
  sacrra: 'XY4088',
  email: 'blueskyfinancialservices1@gmail.com',
  officePhone: '062 339 2150',
  loanMin: 350,
  loanMax: 8000,
}

export type Branch = {
  id: string
  name: string
  address: string[]
  phones: string[]
  whatsapp: string
  maps: string
}

export const BRANCHES: Branch[] = [
  {
    id: 'branch-1',
    name: 'Branch 1 — Voortrekker St',
    address: [
      'Shop 03 Cashbuild Complex',
      'Voortrekker Street',
      'Lydenburg, 1120',
    ],
    phones: ['062 339 2150', '062 339 9488'],
    whatsapp: '062 339 9488',
    maps: 'https://www.google.com/maps/search/?api=1&query=Cashbuild+Complex+Voortrekker+Street+Lydenburg',
  },
  {
    id: 'branch-2',
    name: 'Branch 2 — Viljoen St',
    address: [
      '46 Viljoen Street',
      'Steelburger Building',
      'Lydenburg, 1120',
    ],
    phones: ['062 599 1470'],
    whatsapp: '062 599 1470',
    maps: 'https://www.google.com/maps/search/?api=1&query=46+Viljoen+Street+Lydenburg',
  },
]

export const TRADING_HOURS = [
  { day: 'Monday – Friday', hours: '08:00 – 16:30' },
  { day: 'Saturday', hours: '08:00 – 13:00' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Public Holidays', hours: '08:00 – 13:00' },
]

/** Return whether the business is open now in South Africa (Africa/Johannesburg). */
export function isOpenNow() {
  try {
    const now = new Date()
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: 'Africa/Johannesburg',
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }).formatToParts(now)

    const weekday = parts.find((p) => p.type === 'weekday')?.value ?? ''
    const hour = parseInt(parts.find((p) => p.type === 'hour')?.value ?? '0', 10)
    const minute = parseInt(parts.find((p) => p.type === 'minute')?.value ?? '0', 10)
    const minutes = hour * 60 + minute

    // Simple schedule: Mon-Fri 08:00-16:30, Sat 08:00-13:00, Sun closed
    if (['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].includes(weekday)) {
      return minutes >= 8 * 60 && minutes <= 16 * 60 + 30
    }
    if (weekday === 'Sat') {
      return minutes >= 8 * 60 && minutes <= 13 * 60
    }
    return false
  } catch (e) {
    return false
  }
}

/** Build a WhatsApp click-to-chat link. Number defaults to Branch 1 WhatsApp. */
export function waLink(message: string, number = '062 339 9488') {
  const intl = '27' + number.replace(/\D/g, '').replace(/^0/, '')
  return `https://wa.me/${intl}?text=${encodeURIComponent(message)}`
}

export function whatsappPageLink(number = '062 339 9488') {
  const intl = '27' + number.replace(/\D/g, '').replace(/^0/, '')
  return `https://wa.me/${intl}`
}

export function telLink(number: string) {
  const intl = '+27' + number.replace(/\D/g, '').replace(/^0/, '')
  return `tel:${intl}`
}

export const DEFAULT_WA_MESSAGE =
  "Hi BlueSky Financial Services, I'd like to apply for a loan. Please assist me."

/** Format a number as South African Rand. */
export function formatRand(value: number, decimals = 0) {
  return (
    'R' +
    value.toLocaleString('en-ZA', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  )
}

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Loans', href: '#loans' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Branches', href: '#contact' },
  { label: 'Contact', href: '#contact' },
]
