import { useAboutUsContext } from "@/app/context/aboutUsContext"
import { useScreenWidth } from "@/app/utils/useScreenWidth"

export default function QualityPolicy() {
  const { QualityPolicyInfo } = useAboutUsContext()
  const screenWidth = useScreenWidth()

  return(
    <article className="bg-(--secondary-color) w-full min-h-screen text-white items-center flex flex-col justify-center">
      <div className="flex flex-col gap-y-10">
        <h2 className="font-heading text-center">quality policy</h2>
        <div className="flex flex-col gap-y-5">
          {QualityPolicyInfo.map((policy) => (
            <div key={ policy.QualityPolicyTitle }
              className={`bg-(--primary-color) text-black py-10 px-5 ${ screenWidth > 756 ? "rounded-full" : "rounded-md" } flex gap-x-5 items-center`}
            >
              {screenWidth > 756 && (
                <div className="bg-(--secondary-color) text-white py-5 px-10 justify-center items-center rounded-full">
                  <h2 className="font-heading">1</h2>
                </div>
              )}
              <div>
                <h3 className="font-heading">{ policy.QualityPolicyTitle }</h3>
                <p>{ policy.QualityPolicyContent }</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}