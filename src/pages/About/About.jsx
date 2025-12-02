import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import AboutHero from '../../components/AboutHero/AboutHero'
import FoundersTeam from '../../components/FoundersTeam/FoundersTeam'
import VisionMission from '../../components/VisionMission/VisionMission'
import QuickGrid from '../../components/QuickGrid/QuickGrid'

export default function About() {
  return (
    <div>
        <Header />
        <AboutHero />
        <FoundersTeam />
        <VisionMission />
        <QuickGrid />
        <Footer />
    </div>
  )
}
