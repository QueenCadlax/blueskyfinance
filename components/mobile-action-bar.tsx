import { MessageCircle, Phone, Send } from 'lucide-react'
import { COMPANY, DEFAULT_WA_MESSAGE, telLink, waLink } from '@/lib/site'

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-md lg:hidden">
      <div className="grid grid-cols-3 gap-px">
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-1 py-2.5 text-[#25D366]"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <a
          href={telLink(COMPANY.officePhone)}
          className="flex flex-col items-center gap-1 border-x border-border py-2.5 text-primary"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold">Call</span>
        </a>
        <a
          href={waLink(DEFAULT_WA_MESSAGE)}
          target="_blank"
          rel="noopener"
          className="flex flex-col items-center gap-1 bg-accent py-2.5 text-accent-foreground"
        >
          <Send className="h-5 w-5" aria-hidden="true" />
          <span className="text-xs font-semibold">Apply Now</span>
        </a>
      </div>
    </div>
  )
}
