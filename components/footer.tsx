import { Facebook, Twitter, Youtube, MapPin, Phone, Mail, Globe } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-red-600 p-2 rounded">
                <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                </svg>
              </div>
              <div>
                <div className="text-lg font-bold text-red-600">GOLDSFINE</div>
                <div className="text-xs text-neutral-400">INTERNATIONAL LTD.</div>
              </div>
            </div>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Suit Tofazzel Tower (7th Floor), 37 Purana Paltan,
                  <br />
                  Dhaka-1000, Bangladesh
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-red-600 shrink-0" />
                <a href="tel:+8801915228805" className="text-sm hover:text-red-600 transition-colors">
                  +88 01915228805
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-red-600 shrink-0" />
                <a href="mailto:info@goldsfinebd.com" className="text-sm hover:text-red-600 transition-colors">
                  info@goldsfinebd.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-red-600 shrink-0" />
                <a href="https://www.goldsfinebd.com" className="text-sm hover:text-red-600 transition-colors">
                  www.goldsfinebd.com
                </a>
              </div>
            </div>
          </div>

          {/* Company Info Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-600">Company Info</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-600">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/sister-concern" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Sister Concern
                </Link>
              </li>
              <li>
                <Link href="/documents" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Documents
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-neutral-300 hover:text-red-600 transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-red-600">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-neutral-800 hover:bg-red-600 p-3 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-red-600 p-3 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-red-600 p-3 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-neutral-400">
            © {new Date().getFullYear()} Goldsfine International Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
