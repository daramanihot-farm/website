'use client'

import {
  Award,
  BookOpen,
  CheckCircle,
  Droplets,
  Flame,
  Globe,
  Leaf,
  Recycle,
  Sun,
  Target,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import {
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  PageTransition,
  ScaleIn,
  StaggerContainer,
  StaggerItem,
} from '@/components/animations'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

const coreImpactAreas = [
  {
    icon: Recycle,
    title: 'Circular Economy Solutions',
    description:
      'Closing the loop in agro-industrial value chains by turning waste into valuable resources—reducing costs, boosting productivity, and minimizing environmental impact.',
  },
  {
    icon: Flame,
    title: 'Biomass Gasification & Biochar',
    description:
      'Converting agricultural residues into clean syngas for power and biochar for soil restoration, enhancing yields while cutting fossil fuel dependence.',
  },
  {
    icon: Sun,
    title: 'Renewable Energy Systems',
    description:
      'Designing and deploying solar PV and hybrid solutions that deliver reliable, affordable, and low-carbon power for farms, agro-processors, and rural industries.',
  },
  {
    icon: Droplets,
    title: 'Green Hydrogen for Agriculture & Industry',
    description:
      'Integrating hydrogen production from renewable energy to power processes, enable green fertilizer production, and decarbonize logistics.',
  },
  {
    icon: BookOpen,
    title: 'Capacity Building & Training',
    description:
      'Equipping communities, cooperatives, and enterprises with the knowledge and skills to adopt and scale sustainable practices, with a strong focus on gender inclusion.',
  },
]

const whyChooseUs = [
  'Proven track record in agricultural transformation and project delivery.',
  "Deep understanding of Nigeria's agro-industrial challenges—and solutions that work.",
  'Hands-on experience with renewable energy and hydrogen systems.',
  'Commitment to empowering women and youth in green value chains.',
  'Partnerships with leading universities, technical partners, and government agencies.',
]

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <FadeInUp delay={0.2}>
              <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
                🌿 Transforming Agriculture and Industry through Clean
                Technologies
              </Badge>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Empowering Africa&#39;s{' '}
                <span className="text-green-600">Agro-Industry</span> with{' '}
                <span className="text-blue-600">Clean Solutions</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.6}>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                At Dara-Manihot Industries & Farms, we deliver innovative,
                scalable, and sustainable solutions that reshape how agriculture
                and industry operate—creating resilient communities, competitive
                businesses, and a greener future for Nigeria and beyond.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'bg-green-600 hover:bg-green-700 text-lg px-8 py-6',
                  )}
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/projects"
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50',
                  )}
                >
                  View Our Projects
                </Link>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <FadeInUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Who We Are
                </h2>
                <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed text-center">
                Dara-Manihot Industries & Farms is a leading Nigerian enterprise
                redefining sustainable agriculture and industry through advanced
                clean technologies. We combine decades of agricultural expertise
                with cutting-edge renewable energy, green hydrogen systems, and
                circular economy practices to unlock new opportunities for
                farmers, processors, and industries.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Core Impact Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Core Impact Areas
              </h2>
              <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We focus on five key areas that drive sustainable transformation
                across agriculture and industry
              </p>
            </div>
          </FadeInUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreImpactAreas.map((area, index) => (
              <StaggerItem key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-600">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                        <area.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <CardTitle className="text-xl">{area.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInLeft>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Why Choose Dara-Manihot?
                </h2>
                <div className="w-24 h-1 bg-green-600 mb-8"></div>
                <div className="space-y-4">
                  {whyChooseUs.map((reason, index) => (
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
              <div className="grid grid-cols-2 gap-6">
                <ScaleIn delay={0.2}>
                  <Card className="text-center p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                    <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      500+
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Farmers Empowered
                    </p>
                  </Card>
                </ScaleIn>

                <ScaleIn delay={0.4}>
                  <Card className="text-center p-6 bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800">
                    <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      50+
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Projects Delivered
                    </p>
                  </Card>
                </ScaleIn>

                <ScaleIn delay={0.6}>
                  <Card className="text-center p-6 bg-yellow-50 dark:bg-yellow-950 border-yellow-200 dark:border-yellow-800">
                    <Award className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      10+
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </Card>
                </ScaleIn>

                <ScaleIn delay={0.8}>
                  <Card className="text-center p-6 bg-purple-50 dark:bg-purple-950 border-purple-200 dark:border-purple-800">
                    <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      5
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      States Reached
                    </p>
                  </Card>
                </ScaleIn>
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInUp>
              <Leaf className="h-16 w-16 mx-auto mb-8 opacity-80" />
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Our Vision for the Future
              </h2>
              <p className="text-xl leading-relaxed mb-8 opacity-90">
                We envision an Africa where farms and factories thrive with
                clean, affordable energy; agricultural waste becomes a resource,
                not a burden; and farmers and entrepreneurs gain the tools to
                lead in a climate-smart economy. At Dara-Manihot, we are proud
                to stand at the forefront of this transformation.
              </p>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <FadeInUp>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ready to Learn More?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join us in transforming agriculture and industry through
                sustainable, innovative solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: 'default', size: 'lg' }),
                    'bg-green-600 hover:bg-green-700 text-lg px-8 py-6',
                  )}
                >
                  Explore Our Services
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50"
                >
                  Contact Us Today
                </Button>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>
    </PageTransition>
  )
}
