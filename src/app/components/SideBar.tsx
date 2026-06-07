import {
  Sheet,
  SheetContent,
  SheetHeader,
} from "@/app/components/ui/sheet"
import { Button } from "./ui/button"

import { useNavigate } from "react-router-dom"

interface SideBarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export default function SideBar({ isOpen, setIsOpen }: SideBarProps) {
  const navigate = useNavigate()

  function handleHomePageLink() { navigate("/"); setIsOpen(false) }
  function handleLocationsLink() { navigate("/locations"); setIsOpen(false) }
  function handleFaqLink() { navigate("/faq"); setIsOpen(false) }
  function handleAboutUsLink() { navigate("/about-us"); setIsOpen(false) }
  function handleContactUsLink() { navigate("/contact-us"); setIsOpen(false) }

  return (
    <Sheet open={ isOpen } onOpenChange={ setIsOpen }>
      <SheetContent>
        <SheetHeader>
          <Button variant="link" onClick={ handleHomePageLink }>Homepage</Button>
          <Button variant="link" onClick={ handleLocationsLink }>Locations</Button>
          <Button variant="link" onClick={ handleFaqLink }>FAQ</Button>
          <Button variant="link" onClick={ handleAboutUsLink }>About Us</Button>
          <Button variant="link" onClick={ handleContactUsLink }>Contact Us</Button>
        </SheetHeader>

      </SheetContent>
    </Sheet>
  )
}
