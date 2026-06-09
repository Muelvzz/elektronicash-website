import { useAboutUsContext } from "@/app/context/aboutUsContext"
import { Button } from "@/app/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog"

export default function VisionMission() {
  const { VisionAndMissionInfo } = useAboutUsContext()

  return(
    <article className="w-full min-h-screen bg-(--primary-color) text-black md:w-3/4 flex flex-col items-center justify-center">
      <h2 className="font-heading text-center mb-5">Our vision and mission</h2>
      <div className="flex flex-col lg:flex-row md:gap-x-5 gap-y-10">
        <div className="flex flex-col bg-(--secondary-color) text-white p-5 gap-y-5 rounded-md md:flex-1">
          <div className="flex gap-x-3 items-center)">
            <img src="\vision-mission\mission.png" alt="Mission Icon" 
              className="w-9 h-9 bg-(--primary-color) rounded-full p-1"/>
            <h3 className="font-heading">Mission</h3>
          </div>
          <div>
            <p className="text-justify">{ VisionAndMissionInfo.MissionInfo }</p>
          </div>
        </div>

        <div className="flex flex-col bg-(--secondary-color) text-white p-5 gap-y-5 rounded-md md:flex-1">
          <div className="flex justify-between">
            <div className="flex gap-x-3 items-center">
              <img src="\vision-mission\vision.png" alt="Mission Icon" 
                className="w-9 h-9 bg-(--primary-color) rounded-full p-1"/>
              <h3 className="font-heading">Vision</h3>
            </div>
            <div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>Read more</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Visions</DialogTitle>
                    <DialogDescription>
                      We achieve this vision through three core pillars
                    </DialogDescription>
                  </DialogHeader>
                  <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
                    {VisionAndMissionInfo.Vision.VisionList.map((vision, index) => (
                      <div key={index} className="mb-5">
                        <p><b>{ vision.VisionTitle }</b></p>
                        <p>{ vision.VisionContent }</p>
                      </div>                
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div>
            <p className="text-justify">{ VisionAndMissionInfo.Vision.VisionInfo }</p>
          </div>
        </div>
      </div>
    </article>
  )
}