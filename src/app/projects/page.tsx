import { Suspense } from 'react'
import { Section } from '@/components/ui/section'
import { Loader } from '@/components/ui/loader'
import { Projects } from '@/components/projects'

export default function ProjectsPage() {
  return (
   <Section id='projects' className='pb-24'>
      <Suspense fallback={<Loader />}>
         <Projects />
      </Suspense>
   </Section>
  )
}
