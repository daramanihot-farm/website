
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '@/components/ui/separator'
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook } from 'lucide-react'
import { COMPANY_INFO, NAVIGATION_LINKS, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo1.svg" 
                alt={`${COMPANY_INFO.name} Logo`} 
                width={200} 
                height={200}
                className="h-40 w-40 md:h-32 md:w-32 sm:h-20 sm:w-20" // 160px desktop, 128px tablet, 80px mobile
                priority
              />
              <span className="font-bold text-xl">{COMPANY_INFO.shortName}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {COMPANY_INFO.description}
            </p>
            <div className="flex space-x-4">
              <Link href={SOCIAL_LINKS.linkedin} className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.twitter} className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href={SOCIAL_LINKS.facebook} className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Renewable Energy Systems</li>
              <li>Circular Economy Solutions</li>
              <li>Green Hydrogen Production</li>
              <li>Capacity Building</li>
              <li>Biomass Gasification</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">{COMPANY_INFO.email}</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
