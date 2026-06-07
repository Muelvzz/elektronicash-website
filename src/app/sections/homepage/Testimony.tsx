import { useHomePageContext } from "@/app/context/homePageContext"
import { useScreenWidth } from "@/app/utils/useScreenWidth"
import { useState } from "react"
import { Button } from "@/app/components/ui/button"
import { Testimonials } from "@/app/types/HomePageType"

export default function Testimony() {
  const { TestimonialsInfo } = useHomePageContext()
  const screenWidth = useScreenWidth()
  const itemsToShow = 3

  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex + 1 > TestimonialsInfo.TestimonialsList.length - itemsToShow ) { return 0 }
      return prevIndex + 1
    })
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex - 1 < 0) { return Math.max(0, TestimonialsInfo.TestimonialsList.length - itemsToShow) }
      return prevIndex - 1
    })
  }

  const currentTestimonial = TestimonialsInfo.TestimonialsList[currentIndex]
  const visibleTestimonials = TestimonialsInfo.TestimonialsList.slice(currentIndex, currentIndex + itemsToShow)

  return (
    <article className="bg-(--primary-color) w-full flex flex-col items-center justify-center">
      <div className="mb-10">
        <h1 className="font-heading text-center">Testimonials</h1>
        <p className="text-center">{ TestimonialsInfo.Caption }</p>
      </div>
      {screenWidth <= 576 ? (
        <>
          <div className="relative">
            <div className="bg-(--secondary-color) text-white rounded-lg px-5 py-10">
              <div className="flex flex-col gap-y-10">
                  <div>
                    <h2 className="font-heading">"{ currentTestimonial.TestimonialTitle }"</h2>
                    <p className="text-justify">{ currentTestimonial.TestimonialContent }</p>
                  </div>
                  <p><i>{ currentTestimonial.TestimonialUser }</i></p>
              </div>
            </div>

            <div className="absolute top-[95%] right-3 flex justify-end gap-x-3">
              <Button className="rounded-full" onClick={ handlePrev }>
                <img src="\components\arrow-left.png" 
                alt="Arrow Left Image"
                className="w-5" />
              </Button>
              <Button className="rounded-full" onClick={ handleNext }>
                <img src="\components\arrow-right.png" 
                alt="Arrow Right Image" 
                className="w-5" />
              </Button>
            </div>
          </div>
        </>
      ) : (
      <>
        <div className="flex justify-between">
          {visibleTestimonials.map((testimony: Testimonials, idx: number) => (
            <>
              {idx === currentIndex && (
                <div className="relative">
                  <div className="bg-(--secondary-color) text-white rounded-lg px-5 py-10">
                    <div className="flex flex-col gap-y-10">
                        <div>
                          <h2 className="font-heading">"{ testimony.TestimonialTitle }"</h2>
                          <p className="text-justify">{ testimony.TestimonialContent }</p>
                        </div>
                        <p><i>{ testimony.TestimonialUser }</i></p>
                    </div>
                  </div>

                  <div className="absolute top-[95%] right-3 flex justify-end gap-x-3">
                    <Button className="rounded-full" onClick={ handlePrev }>
                      <img src="\components\arrow-left.png" 
                      alt="Arrow Left Image"
                      className="w-5" />
                    </Button>
                    <Button className="rounded-full" onClick={ handleNext }>
                      <img src="\components\arrow-right.png" 
                      alt="Arrow Right Image" 
                      className="w-5" />
                    </Button>
                  </div>
                </div>
                )}
              {idx !== currentIndex && (
              <div className="bg-(--primary-color) rounded-lg px-5 py-10">
                <div className="flex flex-col gap-y-10">
                    <div>
                      <h2 className="font-heading">"{ testimony.TestimonialTitle }"</h2>
                      <p className="text-justify">{ testimony.TestimonialContent }</p>
                    </div>
                    <p><i>{ testimony.TestimonialUser }</i></p>
                </div>
              </div>
              )}
            </>
          ))}
        </div>
      </>
      )}
    </article>
  )
}