import { AboutUsProvider } from "../context/aboutUsContext"
import Hero from "../sections/about-us/Hero"
import About from "../sections/about-us/About"
import Philosophy from "../sections/about-us/Philosophy"
import VisionMission from "../sections/about-us/VisionMission"
import QualityPolicy from "../sections/about-us/QualityPolicy"
import Team from "../sections/about-us/Team"

export default function AboutUs() {
  return (
    <AboutUsProvider>
      <main>
        <Hero></Hero>
        <About></About>
        <Philosophy></Philosophy>
        <VisionMission></VisionMission>
        <QualityPolicy></QualityPolicy>
        <Team></Team>
      </main>
    </AboutUsProvider>
  )
}