"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
  Recycle, 
  Flame, 
  Sun, 
  Droplets, 
  BookOpen, 
  Settings,
  CheckCircle,
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Shield
} from "lucide-react"

const services = [
  {
    icon: Recycle,
    title: "Circular Economy Programs",
    description: "We design circular value chains that transform agricultural byproducts into profitable resources—reducing waste, cutting costs, and improving soil health.",
    details: "Our circular solutions integrate composting, anaerobic digestion, and innovative reuse strategies for agro-industrial byproducts.",
    color: "green"
  },
  {
    icon: Flame,
    title: "Biomass Gasification & Biochar",
    description: "We develop small- and medium-scale gasifiers convert agricultural residues into syngas for decentralized clean energy.",
    details: "Replacing costly diesel and kerosene in rural operations. The process also produces biochar, enriching soils and sequestering carbon.",
    color: "orange"
  },
  {
    icon: Sun,
    title: "Renewable Energy Systems",
    description: "We deliver tailored solar PV and hybrid renewable energy solutions for agro-processing facilities, irrigation systems, and community enterprises.",
    details: "Our services include design, installation, integration with existing grids, and training for sustainable operation.",
    color: "yellow"
  },
  {
    icon: Droplets,
    title: "Green Hydrogen Integration",
    description: "We support clients in adopting hydrogen technologies for agriculture and industry—designing systems that produce green hydrogen from excess solar power.",
    details: "Decarbonize processes, fuel agricultural machinery, or enable local green ammonia production.",
    color: "blue"
  },
  {
    icon: BookOpen,
    title: "Capacity Building & Knowledge Sharing",
    description: "We organize training programs, workshops, and on-site demonstrations for farmers, cooperatives, SMEs, and women-led agribusinesses.",
    details: "Our programs are designed to build local skills, promote technology adoption, and ensure communities benefit from sustainable practices.",
    color: "purple"
  },
  {
    icon: Settings,
    title: "Project Development Support",
    description: "We provide comprehensive support across the project lifecycle from feasibility assessments to monitoring & evaluation.",
    details: "Technical, financial, and regulatory analysis. Permitting assistance, stakeholder engagement, and performance tracking.",
    color: "indigo"
  }
]

const projectSupport = [
  {
    title: "Feasibility Assessments",
    description: "Technical, financial, and regulatory analysis"
  },
  {
    title: "Permitting Assistance",
    description: "Liaising with authorities to secure necessary approvals"
  },
  {
    title: "Stakeholder Engagement",
    description: "Facilitating alignment with communities, partners, and government agencies"
  },
  {
    title: "Monitoring & Evaluation",
    description: "Tracking performance, social impact, and carbon savings"
  }
]

const uniqueEdge = [
  {
    icon: Target,
    title: "Integrated Approach",
    description: "Combining agriculture, energy, and circular economy"
  },
  {
    icon: Users,
    title: "Deep Local Knowledge",
    description: "Nigerian agro-industrial contexts expertise"
  },
  {
    icon: Shield,
    title: "Proven Partnerships",
    description: "Leading technical experts collaboration"
  },
  {
    icon: Lightbulb,
    title: "Community Focus",
    description: "Gender equality, youth empowerment, and community engagement"
  }
]

export default function Services() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-green-950 dark:via-blue-950 dark:to-purple-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp delay={0.2}>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🌾 Sustainable Solutions for Agro-Industry and Clean Energy
              </Badge>
            </FadeInUp>
            
            <FadeInUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Our <span className="text-green-600">Services</span>
              </h1>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                At Dara-Manihot Industries & Farms, we offer end-to-end services that empower agricultural 
                and industrial clients to achieve greater efficiency, resilience, and sustainability. Our 
                expertise spans the entire project cycle—from concept to implementation—ensuring innovative 
                solutions are practical, bankable, and tailored to local realities.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group border-l-4 border-l-green-600 hover:border-l-blue-600">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-3 bg-${service.color}-100 dark:bg-${service.color}-900 rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className={`h-6 w-6 text-${service.color}-600`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                        {service.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground">
                      {service.details}
                    </p>
                    <Button variant="ghost" className="w-full group-hover:bg-green-50 group-hover:text-green-600 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Project Development Support */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Project Development Support
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We provide comprehensive support across the project lifecycle, ensuring your 
                  sustainable agriculture and clean energy initiatives are successful from start to finish.
                </p>
                <div className="space-y-6">
                  {projectSupport.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInLeft>
            
            <FadeInRight>
              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Start Your Project?</h3>
                <p className="text-lg mb-6 opacity-90">
                  Let us help you navigate the complexities of sustainable agriculture and clean energy projects.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Expert consultation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Tailored solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>End-to-end support</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 w-full">
                  Get Started Today
                </Button>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Our Unique Edge */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Unique Edge
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                What sets us apart in delivering sustainable solutions for agriculture and industry
              </p>
            </div>
          </FadeInUp>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueEdge.map((edge, index) => (
              <StaggerItem key={index}>
                <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-green-600">
                  <div className="p-4 bg-green-100 dark:bg-green-900 rounded-full w-fit mx-auto mb-4">
                    <edge.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-lg mb-3">{edge.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {edge.description}
                  </CardDescription>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <FadeInUp>
              <Users className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Want to Discuss Your Needs?
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Our team of experts is ready to help you implement sustainable solutions 
                that drive real impact in your agricultural or industrial operations.
              </p>
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8 py-6">
                Contact Our Team Today
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
