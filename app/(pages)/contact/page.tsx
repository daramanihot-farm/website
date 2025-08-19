
'use client'

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  FadeInUp,
  FadeInLeft,
  FadeInRight,
  StaggerContainer,
  StaggerItem,
  PageTransition,
} from '@/components/animations'

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Address',
    details: 'Info@daramanihot.com.ng',
    description: 'Send us an email anytime',
  },
  {
    icon: Phone,
    title: 'Phone Numbers',
    details: ['+234 802 340 0557', '+234 706 141 2439'],
    description: 'Call us during business hours',
  },
  {
    icon: MapPin,
    title: 'Office Location',
    details: 'Ketu, Lagos, Nigeria',
    description: 'Visit us at our headquarters',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    details: 'Mon - Fri: 8:00 AM - 6:00 PM',
    description: 'We are here to help you',
  },
]

const whyContactUs = [
  'Expert consultation on sustainable agriculture solutions',
  'Custom renewable energy system design and implementation',
  'Partnership opportunities in green technology projects',
  'Training programs for farmers and agro-processors',
  'Technical support for circular economy initiatives',
]

export default function ContactPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                💬 Get in Touch with Our Experts
              </Badge>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Contact{' '}
                <span className="text-green-600">Dara-Manihot</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your agricultural operations with sustainable solutions? 
                Let&apos;s discuss how we can work together to create lasting impact.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                How to Reach Us
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We&apos;re here to answer your questions and discuss how our sustainable 
                agriculture and renewable energy solutions can benefit your operations.
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <StaggerItem key={index}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex justify-center mb-4">
                      <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full">
                        <info.icon className="h-8 w-8 text-green-600" />
                      </div>
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {Array.isArray(info.details) ? (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="font-semibold text-foreground">
                            {detail}
                          </p>
                        ))
                      ) : (
                        <p className="font-semibold text-foreground">
                          {info.details}
                        </p>
                      )}
                    </div>
                    <CardDescription className="mt-3">
                      {info.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Get in Touch?
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you&apos;re a farmer looking to adopt sustainable practices, 
                  an agro-processor seeking renewable energy solutions, or an 
                  organization interested in partnership opportunities, we&apos;re 
                  here to help.
                </p>
                <div className="space-y-4">
                  {whyContactUs.map((reason, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">
                        {reason}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <Card className="p-8 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800">
                <div className="text-center">
                  <Mail className="h-16 w-16 text-green-600 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Start?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Send us a message and let&apos;s discuss how we can help 
                    transform your agricultural operations with our sustainable 
                    solutions.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.location.href = 'mailto:Info@daramanihot.com.ng'}
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Email
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.location.href = 'tel:+2348023400557'}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <CheckCircle className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let&apos;s Build a Sustainable Future Together
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in transforming Nigeria&apos;s agriculture and industry 
                through innovative clean technologies and sustainable practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                  onClick={() => window.location.href = 'mailto:Info@daramanihot.com.ng'}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600"
                  onClick={() => window.location.href = 'tel:+2348023400557'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
