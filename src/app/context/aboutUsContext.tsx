import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAboutUsJsonParser } from "../utils/useJsonParser";
import { AboutUsType } from "../types/AboutUsType";

const AboutUsContext = createContext<AboutUsType | undefined>(undefined)

interface AboutUsProviderProps {
  children: ReactNode
}

export const AboutUsProvider = ({ children }: AboutUsProviderProps) => {
  const [aboutUs, setAboutUs] = useState<AboutUsType | null>(null)
  const { getParsedData } = useAboutUsJsonParser()

  useEffect(() => {
    const data = getParsedData()
    setAboutUs(data)
  }, [getParsedData])

  if (!aboutUs) { return null }

  return (
    <AboutUsContext.Provider value={ aboutUs }>
      { children }
    </AboutUsContext.Provider >
  )
}

export const useAboutUsContext = () => {
  const context = useContext(AboutUsContext)
  if (!context) { throw new Error("useAboutUsContext must be used within a AboutUsProvider") }
  return context
}