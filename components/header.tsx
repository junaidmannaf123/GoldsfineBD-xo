"use client"

import { Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-neutral-900 text-white">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+8801915228805" className="flex items-center gap-2 hover:text-red-500 transition-colors">
                <Phone className="h-4 w-4" />
                <span>+88 01915228805</span>
              </a>
              <a
                href="mailto:info@goldsfinebd.com"
                className="flex items-center gap-2 hover:text-red-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@goldsfinebd.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>10:00 AM to 5:00 PM</span>
              </div>
            </div>
            <Button size="sm" className="bg-red-600 hover:bg-red-700">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-2 rounded">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-bold text-red-600">GOLDSFINE</div>
              <div className="text-xs text-neutral-600">INTERNATIONAL LTD.</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              About Us
            </Link>
            <Link href="/documents" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              Documents
            </Link>
            <Link href="/products" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              Products
            </Link>
            <Link href="/sister-concern" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              Sister Concern
            </Link>
            <Link href="/contact" className="text-neutral-700 hover:text-red-600 font-medium transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
