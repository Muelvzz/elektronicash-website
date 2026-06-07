import homepageData from "../infos/homepage.json"
import aboutuspageData from "../infos/about-us.json"
import { HomePageType } from "../types/HomePageType"
import { AboutUsType } from "../types/AboutUsType"
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