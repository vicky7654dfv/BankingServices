import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Banner1 from '../../components/Banner1/Banner1'
import BankingServices from '../../components/BankingServices/BankingServices'
import BankingPartners from '../../components/BankingPartners/BankingPartners'
import PersonalBanking from '../../components/PersonalBanking/PersonalBanking'

export default function HomePage1() {
  return (
    <div>
        <Header />
        <Banner1 />
        <BankingServices />
        <BankingPartners />
        <PersonalBanking />
        <Footer />
    </div>
  )
}
