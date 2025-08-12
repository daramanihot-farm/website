
'use client'

import {
  BookOpen,
  CheckCircle,
  Droplets,
  Flame,
  Leaf,
  Lightbulb,
  Recycle,
  Sun,
} from 'lucide-react'
import {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  PageTransition,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const services = [
  {
    icon: Recycle,
    title: 'Circular Economy & Waste-to-Value Solutions',
    description:
      'We help agro-enterprises transform agricultural residues and by-products into valuable resources.',
    details: [
      'Design of circular business models for cassava, rice, and other crop value chains',
      'Biochar production systems for soil enhancement and carbon sequestration',
      'Organic fertilizer development from agricultural waste',
      'Zero-waste processing facility design and implementation',
    ],
  },
  {
    icon: Flame,
    title: 'Biomass Gasification & Energy Systems',
    description:
      'Advanced biomass gasification technologies that convert agricultural waste into clean energy.',
    details: [
      'Small-scale biomass gasifiers for rural communities and farms',
      'Syngas production for heating, power generation, and industrial processes',
      'Integration with existing agricultural operations',
      'Training on operation, maintenance, and safety protocols',
    ],
  },
  {
    icon: Sun,
    title: 'Solar PV & Renewable Energy Solutions',
    description:
      'Comprehensive renewable energy systems tailored for agricultural and industrial applications.',
    details: [
      'Solar PV system design, installation, and commissioning',
      'Hybrid renewable energy systems (solar + biomass + storage)',
      'Grid-tied and off-grid solutions for rural areas',
      'Energy audits and efficiency optimization',
    ],
  },
  {
    icon: Droplets,
    title: 'Green Hydrogen Production & Applications',
    description:
      'Cutting-edge green hydrogen solutions for agriculture and industry decarbonization.',
    details: [
      'Electrolysis systems powered by renewable energy',
      'Green ammonia production for fertilizer manufacturing',
      'Hydrogen storage and distribution systems',
      'Integration with agricultural processing facilities',
    ],
  },
  {
    icon: BookOpen,
    title: 'Capacity Building & Training Programs',
    description:
      'Comprehensive training and education programs to build local expertise in sustainable technologies.',
    details: [
      'Technical training on renewable energy systems',
      'Sustainable agriculture practices and climate-smart farming',
      'Entrepreneurship development for green businesses',
      'Gender-inclusive training programs for women and youth',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Research & Development Services',
    description:
      'Innovation-driven R&D services to develop context-specific solutions for local challenges.',
    details: [
      'Feasibility studies for new technologies and business models',
      'Pilot project development and testing',
      'Technology adaptation and localization',
      'Partnership with universities and research institutions',
    ],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Assessment & Planning',
    description:
      'We conduct thorough assessments of your current operations, energy needs, and waste streams to develop tailored solutions.',
  },
  {
    step: '02',
    title: 'Design & Engineering',
    description:
      'Our team designs comprehensive systems that integrate seamlessly with your existing operations.',
  },
  {
    step: '03',
    title: 'Implementation & Installation',
    description:
      'We handle all aspects of system installation, commissioning, and initial operation.',
  },
  {
    step: '04',
    title: 'Training & Handover',
    description:
      'Comprehensive training ensures your team can operate and maintain systems effectively.',
  },
  {
    step: '05',
    title: 'Ongoing Support',
    description:
      'We provide continuous technical support, maintenance services, and system optimization.',
  },
]

const projectSupport = [
  {
    title: 'Feasibility Assessments',
    description: 'Technical, financial, and regulatory analysis',
  },
  {
    title: 'Permitting Assistance',
    description: 'Liaising with authorities to secure necessary approvals',
  },
  {
    title: 'Stakeholder Engagement',
    description:
      'Facilitating alignment with communities, partners, and government agencies',
  },
  {
    title: 'Monitoring & Evaluation',
    description: 'Tracking performance, social impact, and carbon savings',
  },
  {
    title: 'Financial Structuring',
    description: 'Support in accessing financing and developing viable business models',
  },
  {
    title: 'Policy & Regulatory Support',
    description: 'Guidance on compliance and engagement with regulatory frameworks',
  },
]

export default function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🚀 Comprehensive Solutions for Sustainable Agriculture
              </Badge>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-green-600">Services</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From renewable energy systems to circular economy solutions, we
                provide end-to-end services that transform agricultural operations
                and industrial processes for sustainability and profitability.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                What We Offer
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our comprehensive suite of services covers every aspect of
                sustainable agricultural and industrial transformation
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg flex-shrink-0">
                        <service.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl mb-2">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {service.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Process
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project
                delivery and sustainable outcomes
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <StaggerContainer className="space-y-8">
              {processSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                        {step.step}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Project Support Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Project Support Services
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Beyond technical implementation, we provide comprehensive
                  project support to ensure successful outcomes and long-term
                  sustainability.
                </p>
                <Button size="lg" className="bg-green-600 hover:bg-green-700">
                  Get Started Today
                </Button>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projectSupport.map((support, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <h3 className="font-semibold text-foreground mb-2">
                      {support.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {support.description}
                    </p>
                  </Card>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <Leaf className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Operations?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let us help you build a more sustainable, profitable, and
                resilient business with our proven solutions and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  Schedule Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600"
                >
                  Request Proposal
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
