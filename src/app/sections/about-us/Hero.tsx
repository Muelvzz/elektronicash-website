import { useAboutUsContext } from "@/app/context/aboutUsContext"

export default function HeroSection() {
  const { HeroInfo } = useAboutUsContext()

  return (
    <article className="bg-(--secondary-color) w-full h-screen flex flex-col justify-center items-center text-white">
      <div className="lg:w-1/2">
        <h2 className="font-heading text-center">{ HeroInfo }</h2>
      </div>
    </article>
  )
}