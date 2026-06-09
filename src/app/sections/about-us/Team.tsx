import { useScreenWidth } from "@/app/utils/useScreenWidth"
import { useAboutUsContext } from "@/app/context/aboutUsContext"
import { Card, CardContent } from "@/app/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel"

export default function Team() {
  const { TeamInfo } = useAboutUsContext()
  const screenWidth = useScreenWidth()

  return(
    <article className="w-full">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-heading text-center">Our Team</h2>
        {screenWidth > 756 ? (
          <>          
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-3/4"
            >
              <CarouselContent>
                {TeamInfo.map((team, index) => (
                  <CarouselItem key={index} className="basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-black gap-y-5">
                          <div className="w-full">
                            <img src={ team.PersonImage } alt="Image" className="w-full rounded-md" />
                          </div>
                          <div className="w-full">
                            <h3 className="font-heading text-center">{ team.PersonName }</h3>
                            <p className="text-center"><i>{ team.PersonRole }</i></p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </>
        ) : (
          <Carousel className="w-3/4">
            <CarouselContent>
              {TeamInfo.map((team, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex flex-col aspect-square items-center justify-center p-6 text-black gap-y-5">
                        <div className="w-full">
                          <img src={ team.PersonImage } alt="Image" className="w-full rounded-md" />
                        </div>
                        <div className="w-full">
                          <h3 className="font-heading text-center">{ team.PersonName }</h3>
                          <p className="text-center"><i>{ team.PersonRole }</i></p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </article>
  )
}