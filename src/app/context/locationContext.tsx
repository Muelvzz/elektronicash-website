import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocationJsonParser } from "../utils/useJsonParser";
import { LocationType } from "../types/LocationType";

const LocationPageContext = createContext<LocationType | undefined>(undefined)

interface LocationPageProviderProps {
  children: ReactNode
}

export const LocationPageProvider = ({ children }: LocationPageProviderProps) => {
  const [locationPage, setLocationPage] = useState<LocationType | null>(null)
  const { getParsedData } = useLocationJsonParser()
  
  useEffect(() => {
    const data = getParsedData()
    setLocationPage(data)
  }, [getParsedData])

  if (!locationPage) { return null }

  return (
    <LocationPageContext.Provider value={ locationPage }>
      { children }  
    </LocationPageContext.Provider>
  )
}

export const useAboutUsContext = () => {
  const context = useContext(LocationPageContext)
  if (!context) { throw new Error(`useLocationPageContext must be used within a LocationPageProvider`) }
  return context
}