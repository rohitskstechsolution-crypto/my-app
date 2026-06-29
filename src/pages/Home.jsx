import React from 'react'
import { Helmet } from 'react-helmet-async'
import HeroBanner from '../components/HeroBanner'
import HeroAbout from '../components/HeroAbout'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Rohit Nigam</title>
        <meta name="description" content="Welcome to my app" />
      </Helmet>
      <HeroBanner />
      <HeroAbout />
    </div>
  )
}