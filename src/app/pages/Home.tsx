import HeroSection from "../sections/homepage/HeroSection"
import AboutUs from "../sections/homepage/AboutUs"
import Products from "../sections/homepage/Products"
import Testimony from "../sections/homepage/Testimony"
import { HomePageProvider } from "../context/homePageContext"

export default function Home() {
  return (
    <HomePageProvider>
      <main>
        <HeroSection />
        <AboutUs />
        <Products />
        <Testimony />
      </main>
    </HomePageProvider>
  )
}