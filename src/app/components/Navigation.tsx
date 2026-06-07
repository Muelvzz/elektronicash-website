import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"

import SideBar from "./SideBar"
import { useScreenWidth } from "../utils/useScreenWidth"

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const screenWidth = useScreenWidth()
  const navigate = useNavigate()

  function handleContactUsLink() { navigate("/contact-us") }

  const aStyle = "text-xs hover:underline"

  return(
    <>    
      <nav className="flex justify-between items-center sticky top-0">
        <div>
          <img src="\logo.png" alt="Logo" 
            className="w-6"/>
        </div>
        {screenWidth <= 576 ? (
          <div>
            <Button
              variant="ghost"
              size="icon"
              onClick={ () => setIsMenuOpen(true) }
              aria-label="Toggle Menu"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        ): (
          <>
            <div className="flex gap-x-3">
              <Link to="/" className={ aStyle }>Home</Link>
              <Link to="/locations" className={ aStyle }>Locations</Link>
              <Link to="/faq" className={ aStyle }>FAQ</Link>
              <Link to="/about-us" className={ aStyle }>About Us</Link>
            </div>
            <div>
              <Button onClick={ handleContactUsLink }>Contact Us</Button>
            </div>
          </>
        )}
      </nav>

      <SideBar 
        isOpen={ isMenuOpen }
        setIsOpen={ setIsMenuOpen }
      />
    </>
  )
}