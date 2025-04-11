import About from '@/components/About'
import Hero from '@/components/Hero'
import Work from '@/components/Work'
import React from 'react'

const page = () => {
  return (
    <div className='lg:space-y-20 md:space-y-10 space-y-10'>
      <Hero />
      <Work />
      <About />
    </div>
  )
}

export default page