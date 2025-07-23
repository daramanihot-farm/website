"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription,  CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  StaggerContainer, 
  StaggerItem,
  PageTransition 
} from "@/components/animations"
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
  MapPin
} from "lucide-react"

const keyProjects = [
  {
    icon: Zap,
    title: "Covenant University Green Energy Hub",
    subtitle: "Advancing Clean Power for Agriculture",
    description: "As a core partner in the CU green energy hub, we are driving the adoption of advanced renewable energy systems that replace fossil-fuel dependence in agricultural operations.",
    details: "Our role includes designing circular business models for green ammonia production, developing training programs, and supporting regulatory compliance to make sustainable energy a reality for farmers and agro-processors.",
    status: "Active",
    impact: "500+ farmers trained"
  },
  {
    icon: Recycle,
    title: "Circular Fertilizer Initiatives",
    subtitle: "Reducing Costs & Emissions in Farming",
    description: "We are developing innovative approaches to produce organic and green ammonia-based fertilizers locally, using agricultural residues and renewable hydrogen.",
    details: "These projects aim to reduce reliance on imported fertilizers, improve soil health, and make farming more profitable and sustainable for smallholders.",
    status: "Development",
    impact: "30% cost reduction target"
  }
]

const partnerships = [
  {
    icon: GraduationCap,
    title: "Academic & Research Institutions",
    description: "Providing technical expertise, research support, and training capacity"
  },
  {
    icon: Building2,
    title: "Technical & Development Organizations",
    description: "Contributing specialized knowledge in renewable energy, water systems, and circular economy practices"
  },
  {
    icon: Users,
    title: "Industrial Partners",
    description: "Ensuring pathways for market adoption, scale-up, and commercialization"
  },
  {
    icon: Globe,
    title: "Government & Community Stakeholders",
    description: "Enabling regulatory alignment, local engagement, and shared ownership of outcomes"
  }
]

const impactGoals = [
  {
    icon: Target,
    title: "2030 Vision",
    description: "Establish a network of sustainable agro-industrial hubs across Nigeria and West Africa"
  },
  {
    icon: Users,
    title: "Community Impact",
    description: "Create green jobs and empower women and youth in sustainable practices"
  },
  {
    icon: TrendingUp,
    title: "Scale Achievement",
    description: "Enable thousands of farmers and agro-enterprises to adopt climate-smart practices"
  },
  {
    icon: Award,
    title: "Global Alignment",
    description: "Projects designed to align with global and national sustainability goals (SDGs 1, 7, 9, and 13)"
  }
]

const teamMembers = [
  {
    name: "Dr. Agricultural Expert",
    role: "Lead Agricultural Specialist",
    description: "20+ years in sustainable agriculture and crop management",
    expertise: "Circular Economy, Crop Science"
  },
  {
    name: "Eng. Energy Systems",
    role: "Renewable Energy Director",
    description: "Expert in solar PV systems and green hydrogen technologies",
    expertise: "Solar Energy, Green Hydrogen"
  },
  {
    name: "Prof. Research Lead",
    role: "Research & Development Head",
    description: "Leading researcher in biomass gasification and biochar production",
    expertise: "Biomass Technology, R&D"
  },
  {
    name: "Ms. Community Engagement",
    role: "Capacity Building Manager",
    description: "Specialist in community training and gender inclusion programs",
    expertise: "Training, Gender Inclusion"
  }
]

export default function Projects() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-green-50 to-yellow-50 dark:from-blue-950 dark:via-green-950 dark:to-yellow-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp delay={0.2}>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🌟 Our Key Projects & Partnerships
              </Badge>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Projects & <span className="text-green-600">Team</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover our flagship projects that are transforming agriculture and industry 
                through sustainable technologies, and meet the dedicated team making it all possible.
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
                Our Key Projects
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Leading initiatives that demonstrate our commitment to sustainable agriculture and clean energy
              </p>
            </div>
          </FadeInUp>
          
          <div className="space-y-12">
            {keyProjects.map((project, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  {index % 2 === 0 ? (
                    <FadeInLeft>
                      <Card className="p-8 border-l-4 border-l-green-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-4 bg-green-100 dark:bg-green-900 rounded-lg">
                            <project.icon className="h-8 w-8 text-green-600" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">{project.status}</Badge>
                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-green-600">
                              {project.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <CardContent className="p-0 space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.details}
                          </p>
                          <div className="flex items-center space-x-2 pt-4">
                            <TrendingUp className="h-5 w-5 text-green-600" />
                            <span className="font-medium text-green-600">{project.impact}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeInLeft>
                  ) : (
                    <FadeInRight>
                      <Card className="p-8 border-l-4 border-l-blue-600 hover:shadow-lg transition-shadow duration-300">
                        <div className="flex items-center space-x-4 mb-6">
                          <div className="p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
                            <project.icon className="h-8 w-8 text-blue-600" />
                          </div>
                          <div>
                            <Badge variant="outline" className="mb-2">{project.status}</Badge>
                            <CardTitle className="text-2xl">{project.title}</CardTitle>
                            <CardDescription className="text-lg font-medium text-blue-600">
                              {project.subtitle}
                            </CardDescription>
                          </div>
                        </div>
                        <CardContent className="p-0 space-y-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {project.details}
                          </p>
                          <div className="flex items-center space-x-2 pt-4">
                            <TrendingUp className="h-5 w-5 text-blue-600" />
                            <span className="font-medium text-blue-600">{project.impact}</span>
                          </div>
                        </CardContent>
                      </Card>
                    </FadeInRight>
                  )}
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {index % 2 === 0 ? (
                    <FadeInRight>
                      <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Project Impact</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Advanced renewable energy adoption</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Circular business model development</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Comprehensive training programs</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Regulatory compliance support</span>
                          </div>
                        </div>
                      </div>
                    </FadeInRight>
                  ) : (
                    <FadeInLeft>
                      <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                        <h3 className="text-2xl font-bold mb-4">Innovation Focus</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Local fertilizer production</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Agricultural residue utilization</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Renewable hydrogen integration</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                            <span>Smallholder farmer support</span>
                          </div>
                        </div>
                      </div>
                    </FadeInLeft>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Building Strong Partnerships */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Building Strong Partnerships
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dara-Manihot believes transformative projects require collaborative effort. We proudly work alongside diverse partners to deliver measurable environmental and social impact.
              </p>
            </div>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnerships.map((partnership, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-green-600">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg flex-shrink-0">
                      <partnership.icon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-3">{partnership.title}</CardTitle>
                      <CardDescription className="leading-relaxed">
                        {partnership.description}
                      </CardDescription>
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
          
          <FadeInUp delay={0.4}>
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Our approach to partnerships emphasizes mutual respect, transparency, and a shared commitment to delivering measurable environmental and social impact.
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Handshake className="mr-2 h-4 w-4" />
                Partner With Us
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Commitment to Scaling Impact */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Commitment to Scaling Impact
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Dara-Manihot is committed to replicating our integrated clean energy and circular 
                  economy solutions across Nigeria and West Africa.
                </p>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {impactGoals.map((goal, index) => (
                  <StaggerItem key={index}>
                    <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full w-fit mx-auto mb-4">
                        <goal.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-sm font-semibold mb-2">{goal.title}</CardTitle>
                      <CardDescription className="text-xs leading-relaxed">
                        {goal.description}
                      </CardDescription>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Team
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dara-Manihot Industries & Farms is powered by a dedicated team of agricultural experts, 
                renewable energy specialists, circular economy strategists, and experienced project managers.
              </p>
            </div>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <StaggerItem key={index}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-lg mb-2">{member.name}</CardTitle>
                  <Badge variant="secondary" className="mb-3 text-xs">{member.role}</Badge>
                  <CardDescription className="text-sm mb-3 leading-relaxed">
                    {member.description}
                  </CardDescription>
                  <div className="text-xs text-green-600 font-medium">
                    {member.expertise}
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Let&apos;s Build a Sustainable Future Together
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Are you a farmer, cooperative, investor, business, government agency, or development 
                  organization interested in collaborating for sustainable growth? We&apos;d love to hear from you.
                </p>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Contact Our Team Today
                </Button>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20">
                <CardTitle className="text-2xl mb-6 text-white">Get In Touch</CardTitle>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5" />
                    <span>info@dara-manihot.ng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5" />
                    <span>+234-XXX-XXXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5" />
                    <span>Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5" />
                    <span>www.dara-manihot.ng (coming soon)</span>
                  </div>
                </div>
              </Card>
            </FadeInRight>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
