'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardDescription,
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
import {
  Zap,
  Recycle,
  Users,
  Building2,
  GraduationCap,
  Globe,
  Target,
  TrendingUp,
  Award,
  Handshake,
  Mail,
  Phone,
} from 'lucide-react'

const keyProjects = [
  {
    icon: Zap,
    title: 'Covenant University Green Energy Hub',
    subtitle: 'Advancing Clean Power for Agriculture',
    description:
      'As a core partner in the CU green energy hub, we are driving the adoption of advanced renewable energy systems that replace fossil-fuel dependence in agricultural operations.',
    details:
      'Our role includes designing circular business models for green ammonia production, developing training programs, and supporting regulatory compliance to make sustainable energy a reality for farmers and agro-processors.',
    status: 'Active',
    impact: '500+ farmers trained',
  },
  {
    icon: Recycle,
    title: 'Circular Fertilizer Initiatives',
    subtitle: 'Reducing Costs & Emissions in Farming',
    description:
      'We are developing innovative approaches to produce organic and green ammonia-based fertilizers locally, using agricultural residues and renewable hydrogen.',
    details:
      'These projects aim to reduce reliance on imported fertilizers, improve soil health, and make farming more profitable and sustainable for smallholders.',
    status: 'Development',
    impact: '30% cost reduction target',
  },
]

const partnerships = [
  {
    icon: GraduationCap,
    title: 'Academic & Research Institutions',
    description:
      'Providing technical expertise, research support, and training capacity',
  },
  {
    icon: Building2,
    title: 'Technical & Development Organizations',
    description:
      'Contributing specialized knowledge in renewable energy, water systems, and circular economy practices',
  },
  {
    icon: Users,
    title: 'Industrial Partners',
    description:
      'Ensuring pathways for market adoption, scale-up, and commercialization',
  },
  {
    icon: Globe,
    title: 'Government & Community Stakeholders',
    description:
      'Enabling regulatory alignment, local engagement, and shared ownership of outcomes',
  },
]

const impactGoals = [
  {
    icon: Target,
    title: '2030 Vision',
    description:
      'Establish a network of sustainable agro-industrial hubs across Nigeria and West Africa',
  },
  {
    icon: Users,
    title: 'Community Impact',
    description:
      'Create green jobs and empower women and youth in sustainable practices',
  },
  {
    icon: TrendingUp,
    title: 'Scale Achievement',
    description:
      'Enable thousands of farmers and agro-enterprises to adopt climate-smart practices',
  },
  {
    icon: Award,
    title: 'Global Alignment',
    description:
      'Projects designed to align with global and national sustainability goals (SDGs 1, 7, 9, and 13)',
  },
]

const teamMembers = [
  {
    name: 'Dr. Agricultural Expert',
    role: 'Lead Agricultural Specialist',
    description: '20+ years in sustainable agriculture and crop management',
    expertise: 'Circular Economy, Crop Science',
  },
  {
    name: 'Eng. Energy Systems',
    role: 'Renewable Energy Director',
    description: 'Expert in solar PV systems and green hydrogen technologies',
    expertise: 'Solar Energy, Green Hydrogen',
  },
  {
    name: 'Prof. Research Lead',
    role: 'Research & Development Head',
    description:
      'Leading researcher in biomass gasification and biochar production',
    expertise: 'Biomass Technology, R&D',
  },
  {
    name: 'Ms. Community Engagement',
    role: 'Capacity Building Manager',
    description:
      'Specialist in community training and gender inclusion programs',
    expertise: 'Training, Gender Inclusion',
  },
]

export default function ProjectsPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🚀 Building Tomorrow's Sustainable Agriculture Today
              </Badge>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Our <span className="text-green-600">Projects</span> &{' '}
                <span className="text-blue-600">Impact</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discover how we're transforming agriculture across Nigeria
                through innovative projects, strategic partnerships, and
                community-focused initiatives that create lasting change.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Key Projects */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Key Projects
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our flagship projects demonstrate the practical application of
                sustainable technologies in real-world agricultural settings
              </p>
            </div>
          </FadeInUp>

          <div className="space-y-12">
            {keyProjects.map((project, index) => (
              <FadeInUp key={index} delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                          <project.icon className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            {project.title}
                          </CardTitle>
                          <p className="text-green-600 font-medium">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                      <CardDescription className="text-base leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {project.details}
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Badge
                          variant={
                            project.status === 'Active' ? 'default' : 'secondary'
                          }
                          className="mb-2"
                        >
                          {project.status}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          <strong>Impact:</strong> {project.impact}
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Partnerships
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading organizations to amplify our impact
                and ensure sustainable solutions reach every corner of Nigeria
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <StaggerItem key={index}>
                <Card className="h-full text-center p-6 hover:shadow-md transition-shadow duration-300 border-l-4 border-l-blue-600">
                  <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit mx-auto mb-4">
                    <partnership.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg mb-3">
                    {partnership.title}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {partnership.description}
                  </CardDescription>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Impact Goals */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Impact Goals
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We&apos;re committed to creating measurable, sustainable impact
                  that transforms communities and drives Nigeria&apos;s green
                  transition forward.
                </p>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {impactGoals.map((goal, index) => (
                  <Card
                    key={index}
                    className="p-6 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="p-3 bg-yellow-100 dark:bg-yellow-900 rounded-lg w-fit mb-4">
                      <goal.icon className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{goal.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {goal.description}
                    </CardDescription>
                  </Card>
                ))}
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse team brings together decades of experience in
                agriculture, renewable energy, and sustainable development
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <Card className="h-full p-6 text-center hover:shadow-md transition-shadow duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <div className="text-green-600 font-medium text-sm mb-2">
                    {member.role}
                  </div>
                  <CardDescription className="text-xs mb-3">
                    {member.description}
                  </CardDescription>
                  <Badge variant="secondary" className="text-xs">
                    {member.expertise}
                  </Badge>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <Handshake className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partner With Us
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Join us in building a sustainable future for Nigeria's
                agriculture. Let's discuss how we can work together to
                create lasting impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-green-600"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Schedule Call
                </Button>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}