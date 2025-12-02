import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import HomeHero from '../../components/HomeHero/HomeHero'
import AccountVariations from '../../components/AccountVariations/AccountVariations'
import BusinessBanking from '../../components/BusinessBanking/BusinessBanking'
import DigitalServices from '../../components/DigitalServices/DigitalServices'

export default function HomePage2() {
  return (
    <div>
        <Header />
        <HomeHero />
        <AccountVariations />
        <BusinessBanking />
        <DigitalServices />
        <Footer />
    </div>
  )
}
