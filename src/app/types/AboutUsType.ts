interface PhilosophyList {
  PhilosophyTitle: string,
  PhilosophyContent: string
}

interface VisionList {
  VisionTitle: string,
  VisionContent: string
}

interface QualityPolicyInfo {
  QualityPolicyTitle: string,
  QualityPolicyContent: string,
}

interface TeamInfo {
  PersonName: string,
  PersonRole: string,
  PersonImage: string,
}

export interface AboutUsType {
  HeroInfo: string,
  AboutUsInfo: string,
  PhilosophyInfo: {
    Purpose: string,
    PhilosophyList: PhilosophyList[]
  },
  VisionAndMissionInfo: {
    Vision: {
      VisionInfo: string,
      VisionList: VisionList[]
    },
    MissionInfo: string
  },
  QualityPolicyInfo: QualityPolicyInfo[],
  TeamInfo: TeamInfo[]
}