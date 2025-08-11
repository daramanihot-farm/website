
'use client'

import { PageTransition } from '@/components/animations'

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">About Dara-Manihot</h1>
        <p className="text-lg text-muted-foreground">
          Learn more about our mission, vision, and the team behind our sustainable agriculture initiatives.
        </p>
      </div>
    </PageTransition>
  )
}
