import { useAboutUsContext } from "@/app/context/aboutUsContext"

export default function About() {
  const { AboutUsInfo } = useAboutUsContext()

  return (
    <article className="h-screen flex flex-col lg:flex-row items-center lg:mx-30">
      <div className="flex items-center flex-col lg:flex-row-reverse gap-y-5">
        <div className="flex justify-center lg:flex-1">
          <img src="/logo.png" alt="About Us Image" />
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5 lg:flex-1">
          <div>
            <h1 className="font-heading text-center">About Us</h1>
            <p className="text-justify indent-10">{ AboutUsInfo }</p>
          </div>
        </div>
      </div>
    </article>
  )
}