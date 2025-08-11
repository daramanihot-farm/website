
'use client'

import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { FadeInUp } from '@/components/animations'
import { cn } from '@/lib/utils'

interface HeroProps {
  badge: string
  title: string
  subtitle: string
  description: string
  primaryCTA: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
}

export function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50 dark:from-green-950 dark:via-blue-950 dark:to-yellow-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwNTk2NjkiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <FadeInUp delay={0.2}>
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              {badge}
            </Badge>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {title}{' '}
              <span className="text-green-600">{subtitle}</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryCTA.href}
                className={cn(
                  buttonVariants({ variant: 'default', size: 'lg' }),
                  'bg-green-600 hover:bg-green-700 text-lg px-8 py-6',
                )}
              >
                {primaryCTA.text}
              </Link>
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    'text-lg px-8 py-6 border-green-600 text-green-600 hover:bg-green-50',
                  )}
                >
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
