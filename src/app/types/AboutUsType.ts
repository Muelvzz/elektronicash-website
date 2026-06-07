interface PhilosophyList {
  PhilosophyTitle: string,
  PhilosophyContent: string
}

interface VissionList {
  VissionTitle: string,
  VissionContent: string
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
  VissionAndMissionInfo: {
    Vission: {
      VissionInfo: string,
      VissionList: VissionList[]
    },
    MissionInfo: string
  },
  QualityPolicyInfo: QualityPolicyInfo[],
  TeamInfo: TeamInfo[]
}