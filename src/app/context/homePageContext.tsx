import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useHomePageJsonParser } from "../utils/useJsonParser";
import { HomePageType } from "../types/HomePageType";

const HomePageContext = createContext<HomePageType | undefined>(undefined)

interface HomePageProviderProps {
  children: ReactNode
}

export const HomePageProvider = ({ children }: HomePageProviderProps) => {
  const [homePage, setHomePage] = useState<HomePageType | null>(null)
  const { getParsedData } = useHomePageJsonParser()

  useEffect(() => {
    const data = getParsedData()
    setHomePage(data)
  }, [getParsedData])

  if (!homePage) { return null }

  return (
    <HomePageContext.Provider value={ homePage }>
      { children }
    </HomePageContext.Provider>
  )
}

export const useHomePageContext = () => {
  const context = useContext(HomePageContext)
  if (!context) { throw new Error("useHomePageContext must be used within a HomePageProvider") }
  return context
}