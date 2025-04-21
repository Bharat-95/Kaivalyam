import About from '../components/About'
import Follow from '../components/Follow'
import Hero from '../components/Hero'
import Personal from '../components/Personal'
import Work from '../components/Work'
import React from 'react'
import Gallery from '../components/Gallery'

const page = () => {
  return (
    <div className='lg:space-y-10 md:space-y-10 space-y-10'>
      <Hero />
      <Work />
      <About />
      <Gallery />
      <Personal />
      <Follow />
     
    </div>
  )
}

export default page