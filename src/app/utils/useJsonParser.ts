import homepageData from "../infos/homepage.json"
import aboutuspageData from "../infos/about-us.json"
import locationpageData from "../infos/locations.json"
import { HomePageType } from "../types/HomePageType"
import { AboutUsType } from "../types/AboutUsType"
import { LocationType } from "../types/LocationType"
import { useCallback } from "react"

export function useHomePageJsonParser() {

  const getParsedData = useCallback((): HomePageType => {
    return homepageData as HomePageType
  }, [])
  
  return { getParsedData }
}

export function useAboutUsJsonParser() {

  const getParsedData = useCallback((): AboutUsType => {
    return aboutuspageData as AboutUsType
  }, [])

  return { getParsedData }
}

export function useLocationJsonParser() {
  const getParsedData = useCallback((): LocationType => {
    return locationpageData as LocationType
  }, [])

  return { getParsedData }
}