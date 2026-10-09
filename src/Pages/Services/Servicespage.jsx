import React from 'react'
import ServicesHero from '../../Components/Services/ServicesHero'
import ServicesIntro from '../../Components/Services/ServicesIntro'
import ServiceCards from '../../Components/Services/ServiceCards'
import FeaturedExperience from '../../Components/Services/FeaturedExperience'
import ServicesProcess from '../../Components/Services/ServicesProcess'
import ServicesBenefits from '../../Components/Services/ServicesBenefits'
import ServicesCTA from '../../Components/Services/ServicesCTA'

import "./Servicespage.css"

function Servicespage() {
  return (
    <>
    <ServicesHero/>
    <ServicesIntro/>
    <ServiceCards/>
    <FeaturedExperience/>
    <ServicesProcess/>
    <ServicesBenefits/>
    <ServicesCTA/>
    </>
  )
}

export default Servicespage