
'use client'

import { 
  FadeInUp, 
  FadeInLeft, 
  FadeInRight, 
  PageTransition, 
  StaggerContainer, 
  StaggerItem 
} from '@/components/animations'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Users, 
  Award, 
  Target, 
  Lightbulb,
  Heart,
  Globe,
  Leaf
} from 'lucide-react'
import { CORE_VALUES } from '@/lib/constants'

const companyMilestones = [
  {
    year: '2014',
    title: 'Foundation',
    description: 'Established with a vision to transform African agriculture through innovation'
  },
  {
    year: '2018',
    title: 'First Major Project',
    description: 'Launched our first renewable energy integration in agricultural processing'
  },
  {
    year: '2021',
    title: 'Expansion',
    description: 'Extended operations across multiple Nigerian states'
  },
  {
    year: '2024',
    title: 'Innovation Hub',
    description: 'Became a leading voice in sustainable agro-industrial transformation'
  }
]

const companyStats = [
  {
    icon: Users,
    number: '500+',
    label: 'Farmers Empowered',
    description: 'Directly impacted through our programs and technologies'
  },
  {
    icon: Award,
    number: '50+',
    label: 'Projects Completed',
    description: 'Successful implementations across Nigeria'
  },
  {
    icon: Target,
    number: '5',
    label: 'States Reached',
    description: 'Expanding our impact across Nigeria'
  },
  {
    icon: Leaf,
    number: '10+',
    label: 'Years Experience',
    description: 'Decade of expertise in sustainable agriculture'
  }
]

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <FadeInUp delay={0.2}>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🌿 About Dara-Manihot Industries & Farms
              </Badge>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Pioneering <span className="text-green-600">Sustainable</span> Agriculture in <span className="text-blue-600">Nigeria</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                For over a decade, we&apos;ve been at the forefront of transforming Africa&apos;s agricultural landscape through innovative clean technologies and sustainable practices.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Founder/CEO Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <FadeInLeft>
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Meet Our Founder & CEO
                </h2>
                <div className="w-24 h-1 bg-green-600 mx-auto lg:mx-0 mb-8"></div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-green-600">Mr. Olusile Adekunle</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A visionary leader with over 15 years of experience in agricultural innovation and sustainable development. Mr. Adekunle founded Dara-Manihot with the mission to revolutionize Africa&apos;s agricultural sector through clean technologies and circular economy principles.
                  </p>
                  {/* <p className="text-lg text-muted-foreground leading-relaxed">
                    [This section will be updated with detailed biography and achievements of Mr. Olusile Adekunle]
                  </p> */}

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <Badge variant="outline" className="text-green-600 border-green-600">Agricultural Innovation</Badge>
                    <Badge variant="outline" className="text-blue-600 border-blue-600">Clean Technology</Badge>
                    <Badge variant="outline" className="text-yellow-600 border-yellow-600">Leadership</Badge>
                  </div>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <div className="flex justify-center">
                <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950 border-green-200 dark:border-green-800">
                  <div className="text-center">
                    {/* Placeholder for founder's image */}
                    <div className="w-64 h-64 mx-auto mb-6 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full flex items-center justify-center border-4 border-green-200 dark:border-green-700">
                      <Users className="h-24 w-24 text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">Mr. Olusile Adekunle</h4>
                    <p className="text-muted-foreground">Founder & CEO</p>
                    <p className="text-sm text-muted-foreground mt-2">Dara-Manihot Industries & Farms</p>
                  </div>
                </Card>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Company Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission & Vision
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FadeInLeft>
              <Card className="h-full p-8 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-700">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-green-700 dark:text-green-300">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-center text-foreground">
                    To transform Africa&apos;s agricultural and industrial sectors through innovative clean technologies, 
                    creating sustainable value chains that empower communities, enhance productivity, and protect 
                    our environment for future generations.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInLeft>

            <FadeInRight>
              <Card className="h-full p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 border-blue-200 dark:border-blue-700">
                <CardHeader className="text-center pb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-blue-700 dark:text-blue-300">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-center text-foreground">
                    To be Africa&apos;s leading catalyst for sustainable agro-industrial transformation, where farms 
                    and factories thrive with clean energy, waste becomes valuable resources, and communities 
                    lead the transition to a climate-smart economy.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These values guide our every decision and shape our approach to sustainable transformation
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {CORE_VALUES.map((value, index) => (
              <StaggerItem key={index}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-600">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-foreground">{value}</h3>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Company Journey */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Journey
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                A decade of innovation, growth, and impact in sustainable agriculture
              </p>
            </div>
          </FadeInUp>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {companyMilestones.map((milestone, index) => (
                <FadeInLeft key={index} delay={index * 0.1}>
                  <div className="flex items-center space-x-6 p-6 bg-background rounded-lg border-l-4 border-l-green-600 shadow-sm">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                </FadeInLeft>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Impact by Numbers
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <stat.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-foreground mb-2">{stat.number}</h3>
                    <h4 className="text-lg font-semibold text-foreground mb-2">{stat.label}</h4>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Future Team Section - Commented out for future implementation */}
      {/* 
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Meet Our Team
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                The passionate professionals driving sustainable transformation across Africa
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team member cards will be added here 
            <StaggerItem>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 dark:from-green-900 dark:to-blue-900 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-200 dark:border-green-700">
                    <Users className="h-16 w-16 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Team Member Name</h3>
                  <p className="text-muted-foreground mb-2">Position Title</p>
                  <p className="text-sm text-muted-foreground">Brief description of their role and expertise</p>
                </CardContent>
              </Card>
            </StaggerItem>
            {/* Add more team members as needed 
          </StaggerContainer>
        </div>
      </section>
      */}

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <Lightbulb className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Join Us in Transforming Agriculture
              </h2>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                Together, we can build a sustainable future where clean technologies power Africa&apos;s agricultural transformation. Let&apos;s create lasting impact for communities, businesses, and our planet.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
