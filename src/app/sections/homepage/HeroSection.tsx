import { Button } from "@/app/components/ui/button"
import { useHomePageContext } from "@/app/context/homePageContext"

export default function HeroSection() {
  const { HeroInfo } = useHomePageContext()

  return (
    <article className="bg-(--secondary-color) w-full h-screen flex flex-col justify-center items-center text-white">
      <div>
        <h1 className="font-heading">{ HeroInfo }</h1>
      </div>
      <Button>Learn more</Button>
    </article>
  )
}