import { useAboutUsContext } from "@/app/context/aboutUsContext"
import { useScreenWidth } from "@/app/utils/useScreenWidth"

export default function Philosophy() {
  const { PhilosophyInfo } = useAboutUsContext()
  const screenWidth = useScreenWidth()

  const PhilosophyList1 = PhilosophyInfo.PhilosophyList[0]
  const PhilosophyList2 = PhilosophyInfo.PhilosophyList[1]
  const PhilosophyList3 = PhilosophyInfo.PhilosophyList[2]
  const PhilosophyList4 = PhilosophyInfo.PhilosophyList[3]
  const PhilosophyList5 = PhilosophyInfo.PhilosophyList[4]
  const PhilosophyList6 = PhilosophyInfo.PhilosophyList[5]

  return(
    <article className="bg-(--secondary-color) w-full min-h-screen flex flex-col text-white justify-center items-center gap-y-15">
      <div className="text-center">
        <h2 className="font-heading">Corporate Philosophy</h2>
        <div className="text-center flex flex-col justify-center items-center">
          <h3 className="font-heading">Core Purpose</h3>
          <p className="lg:w-2/3">{ PhilosophyInfo.Purpose }</p>
        </div>
      </div>
      <div>
        <h3 className="font-heading text-center mb-5">Guiding Principles and Values</h3>
        {screenWidth > 786 ? (
          <div className="grid grid-cols-4 grid-rows-3 gap-5 bg-[#007acc] p-6 text-black">
            <div className="col-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList1.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList1.PhilosophyContent }</p>
            </div>
            <div className="col-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList2.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList2.PhilosophyContent }</p>
            </div>
            <div className="col-span-1 row-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList3.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList3.PhilosophyContent }</p>
            </div>
            <div className="col-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList4.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList4.PhilosophyContent }</p>
            </div>
            <div className="col-span-1 row-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList6.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList6.PhilosophyContent }</p>
            </div>
            <div className="col-span-2 bg-(--primary-color) rounded-xl p-6 flex flex-col gap-3">
              <h3 className="font-heading">{ PhilosophyList5.PhilosophyTitle }</h3>
              <p className="text-justify">{ PhilosophyList5.PhilosophyContent }</p>
            </div>
          </div>
        ): (
          <div className="flex flex-col gap-5">
            {PhilosophyInfo.PhilosophyList.map((philosophy) => (
              <div className="bg-(--primary-color) p-5 text-black rounded-sm" key={ philosophy.PhilosophyTitle }>
                <h3 className="font-heading">{ philosophy.PhilosophyTitle }</h3>
                <p className="text-justify">{ philosophy.PhilosophyContent }</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}