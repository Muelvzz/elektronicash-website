import homepageData from "../infos/homepage.json"
import { HomePageType } from "../types/HomePageType"
import { useCallback } from "react"

export function useHomePageJsonParser() {

  const getParsedData = useCallback((): HomePageType => {
    return homepageData as HomePageType
  }, [])
  
  return { getParsedData }
}