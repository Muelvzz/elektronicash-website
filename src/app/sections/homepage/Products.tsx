import { useHomePageContext } from "@/app/context/homePageContext";

export default function Products() {
  const { ProductsInfo } = useHomePageContext()

  return (
    <article className="bg-(--secondary-color) text-white w-full min-h-screen flex flex-col items-center gap-y-5">
      <div>
        <h1 className="font-heading">Our Selling Products</h1>
        <p className="text-center">{ ProductsInfo.Caption }</p>
      </div>
      <div className="flex flex-col gap-y-10">
        {ProductsInfo.ProductsList.map((product) => (
          <div className="bg-(--primary-color) text-black rounded-md flex flex-col lg:flex-row lg:mx-30">
            <div className="flex lg:flex-1 h-fit">
              <img src={ product.Img } alt={`Image of ${ product.ProductTitle }`} className="rounded-md"/>
            </div>
            <div className="p-4 flex flex-col lg:flex-1">
              <h2 className="font-heading">{ product.ProductTitle }</h2>
              <p className="text-justify">{ product.ProductInfo }</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  )
}