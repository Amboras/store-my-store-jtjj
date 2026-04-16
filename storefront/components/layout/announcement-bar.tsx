'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

const MESSAGES = [
  'Free shipping on orders over $50',
  'Lifetime warranty on all lighters',
  'Built to last — precision engineered',
  'Free shipping on orders over $50',
  'Lifetime warranty on all lighters',
  'Built to last — precision engineered',
]

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative bg-foreground text-primary-foreground overflow-hidden">
      <div className="flex items-center py-2.5">
        <div className="flex animate-ticker">
          {MESSAGES.map((msg, i) => (
            <span key={i} className="inline-flex items-center gap-8 px-8 text-xs font-medium uppercase tracking-[0.18em]">
              <span className="w-1 h-1 rounded-full bg-accent flex-shrink-0" style={{ backgroundColor: 'hsl(32 90% 52%)' }} />
              {msg}
            </span>
          ))}
        </div>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:opacity-70 transition-opacity"
        aria-label="Dismiss announcement"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
