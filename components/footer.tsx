import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Azure Stay Hotel & PG</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Your trusted partner for comfortable, safe, and affordable accommodations in the heart of the city.
            </p>
            <p className="text-primary-foreground/80 text-sm">Comfortable Stays | Affordable Luxury | Prime Location</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Rooms & Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/amenities"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Amenities
                </Link>
              </li>
              <li>
                <Link
                  href="/book"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Book a Room
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Plot No. 45, Sector 12, Near Metro Station
                  <br />
                  Mumbai, Maharashtra 400001
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span className="text-primary-foreground/80">booking@azurestay.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">
            © {new Date().getFullYear()} Azure Stay Hotel & PG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
