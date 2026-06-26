import React from 'react'
import ServicesWork from '../components/ServicesWork'
import HeroSlider from '../components/HeroSlider'
import StrategyDivider from '../components/StrategyDivider'
import ClientsSection from '../components/ClientSection'
import Footer from '../components/Footer'
import CircularGallery from '../components/CircularGallery'
import ClientPeople from '../components/ClientPeople'
import TeamSection from '../components/TeamSection'
const Home = () => {
  return (
    <div>
      <HeroSlider />
      <ServicesWork />
      <StrategyDivider />
      <div >
        <h3 className=" font-bold text-2xl pt-10 px-10">Clients I have Worked with</h3>
        <ClientPeople />
      </div>
      <ClientsSection />
      <TeamSection />
      {/* <div >
        <h3 className=" font-bold text-2xl py-10 px-10">Our Team</h3>
        <CircularGallery
          bend={0}
          textColor="#B000000"
          borderRadius={0.5}
          scrollEase={0.05}
          fontUrl="https://fonts.googleapis.com/css2?family=Google+Sans:ital,opsz,wght@0,17..18,400..700;1,17..18,400..700&display=swap"
          font="bold 30px "
          scrollSpeed={2}
        />
      </div> */}
      <Footer />
    </div>
  )
}

export default Home