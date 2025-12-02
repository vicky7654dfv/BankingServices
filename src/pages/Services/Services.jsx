import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ServiceCategories from "../../components/ServiceCategories/ServiceCategories";
import AccountTypes from "../../components/AccountTypes/AccountTypes";
import InsuranceSchemes from "../../components/InsuranceSchemes/InsuranceSchemes";
import ServicesHero from "../../components/ServicesHero/ServicesHero";

export default function Services() {
  return (
    <div>
      <Header />
      <ServicesHero />
      <ServiceCategories />
      <AccountTypes />
      <InsuranceSchemes />
      <Footer />
    </div>
  );
}
