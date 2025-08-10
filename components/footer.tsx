import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo1.svg" 
                alt="Dara-Manihot Logo" 
                width={40} 
                height={40}
                className="h-10 w-10"
              />
              <span className="font-bold text-xl">Dara-Manihot</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transforming Agriculture and Industry through Clean Technologies, 
              Circular Economy, and Renewable Energy Solutions.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-green-600 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Circular Economy Programs</li>
              <li className="text-muted-foreground">Biomass Gasification</li>
              <li className="text-muted-foreground">Renewable Energy Systems</li>
              <li className="text-muted-foreground">Green Hydrogen Integration</li>
              <li className="text-muted-foreground">Capacity Building</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">info@dara-manihot.ng</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">+234-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-600" />
                <span className="text-muted-foreground">Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 Dara-Manihot Industries & Farms. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-green-600 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
