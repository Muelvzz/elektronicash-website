import { Link } from "react-router-dom"
import { useScreenWidth } from "../utils/useScreenWidth"

export default function Footer() {
  const aStyle = "text-xs hover:underline"

  const screenWidth = useScreenWidth()

  return (
    <footer className="flex flex-col">
      <div className="grid md:grid-cols-3 md:grid-rows-1 grid-cols-2 grid-rows-2">
        <div className="flex flex-col gap-3 md:col-span-1 col-span-2">
          <div>
            <img src="/logo+caption.png" alt="" 
              className="w-48"/>
          </div>
          <div className="ml-3 mr-3">
            <p>We have a wide array of electronic gadgets accepted in our shop such as cellphones, laptops, and cameras</p>
            <p><i>Copyright @2026 all rights reserved.</i></p>
          </div>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3><b>Social Links</b></h3>
          <a href="" className={ aStyle }>
            <div className="flex gap-x-2 items-center">
              <img src="/facebook-logo.png" alt="Facebook Logo" 
                className="w-6"
              />
              <p>Facebook</p>
            </div>
          </a>
        </div>

        <div className="flex flex-col gap-y-2">
          <h3><b>Sites</b></h3>
          <Link to="/" className={ aStyle }>Home</Link>
          <Link to="/locations" className={ aStyle }>Locations</Link>
          <Link to="/faq" className={ aStyle }>FAQ</Link>
          <Link to="/about-us" className={ aStyle }>About Us</Link>
          <Link to="/contact-us" className={ aStyle }>Contact Us</Link>
        </div>
      </div>

      {screenWidth <= 576 && <hr />}

      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <img src="/email.png" alt="Facebook Logo" 
            className="w-6"
          />
          <p>elektronicash@gmail.com</p>
        </div>
        <div className="flex gap-x-2 items-center">
          <img src="/phone.png" alt="Facebook Logo" 
            className="w-6"
          />
          <p>(+63) 987 765 4321</p>
        </div>
      </div>
    </footer>
  )
}