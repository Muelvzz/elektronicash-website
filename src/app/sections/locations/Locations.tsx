import { useLocationPageContext } from "@/app/context/locationContext"

export default function Locations() {
  const { Caption, LocationsList } = useLocationPageContext()

  return (
    <article className="bg-(--secondary-color) w-full min-h-screen text-white flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="mb-10">
          <h2 className="font-heading text-center">available branches</h2>
          <p>{ Caption }</p>
        </div>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 md:w-2/3">
          {LocationsList.map((location, idx) => (
            <div
              style={{ backgroundImage: `url(${ location.LocationImage })` }} 
              className="bg-cover bg-center w-full h-100 rounded-lg flex items-end" 
              key={ idx }
            >
              <div className="bg-[#000000a6] p-3 rounded-lg">
                <h3 className="font-heading">{ location.Location }</h3>
                <p><i>{ location.LocationAddress }</i></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}