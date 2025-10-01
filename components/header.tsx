"use client"

import { Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg luxury-shadow">
      <div className="bg-black text-white border-b-2 border-[#d4af37]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm">
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a href="tel:+8801915228805" className="flex items-center gap-2 hover:text-[#d4af37] transition-colors">
                <Phone className="h-4 w-4" />
                <span>+88 01915228805</span>
              </a>
              <a
                href="mailto:info@goldsfinebd.com"
                className="flex items-center gap-2 hover:text-[#d4af37] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@goldsfinebd.com</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#d4af37]" />
                <span>10:00 AM to 5:00 PM</span>
              </div>
            </div>
            <Button size="sm" className="bg-[#d4af37] hover:bg-[#b8941f] text-black font-semibold">
              Enquire Now
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="golden-gradient p-2.5 rounded-lg shadow-md">
              <svg className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold golden-text tracking-wide">GOLDSFINE</div>
              <div className="text-xs text-neutral-600 tracking-widest">INTERNATIONAL LTD.</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/documents"
              className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group"
            >
              Documents
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/products"
              className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group"
            >
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/sister-concern"
              className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group"
            >
              Sister Concern
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="text-black hover:text-[#d4af37] font-semibold transition-colors relative group"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
