import { MessageCircle } from 'lucide-react'
import { whatsappPageLink } from '@/lib/site'

export function FloatingWhatsAppButton() {
  return (
    <a
      href={whatsappPageLink()}
      target="_blank"
      rel="noopener"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_-20px_rgba(37,211,102,0.9)] transition hover:-translate-y-0.5 hover:bg-[#1ebe57] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900 lg:bottom-8 lg:right-8"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      Chat on WhatsApp
    </a>
  )
}
