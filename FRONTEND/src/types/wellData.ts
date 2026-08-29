export interface WellHeaderData {
  wellId: string;
  status: 'Drilling' | 'Completed' | 'Suspended' | 'Planning';
  measuredDepth: string; // MD
  trueVerticalDepth: string; // TVD
  lastUpdated: string;
  location: string;
  rig: string;
  operator: string;
  spudDate: string;
  objective: string;
  isFavorite?: boolean;
}

export interface HydrocarbonSummary {
  depthFound: string; // e.g. "1,082.00 m"
  hydrocarbonType: string; // e.g. "Oil"
  payZoneThickness: string; // e.g. "12.50 m"
}

export interface FormationDetails {
  name: string; // e.g. "Upper Boka Sandstone"
  lithology: string; // e.g. "Sandstone with Shale Interbeds"
  age: string; // e.g. "Miocene"
}

export interface RiskAssessment {
  similarityScorePercentage: number; // e.g. 72
  chanceCategory: string; // e.g. "Moderate Chance"
  riskPoints: string[];
}

export interface FormationRiskSummary {
  hydrocarbon: HydrocarbonSummary;
  formation: FormationDetails;
  riskAssessment: RiskAssessment;
}

export interface OffsetEvent {
  id: string;
  wellId: string;
  distanceKm: number;
  events: string;
  formation: string;
  measuredDepth: number;
  trueVerticalDepth: number;
  eventType: 'Mud Loss' | 'Kick' | 'Stuck Pipe' | 'Cementing' | 'Casing Programs' | 'Formation Risks';
  severity: 'Low' | 'Moderate' | 'High';
  date: string;
}

export interface MdVsTvdPoint {
  md: number;
  'OIL-159-F-7': number;
  'OIL-159-F-4': number;
  'OIL-159-F-5': number;
  'OIL-159-F-6': number;
}

export interface RateOfTurnPoint {
  tvd: number;
  'OIL-159-F-4': number;
  'OIL-159-F-5': number;
  'OIL-159-F-6': number;
}

export interface InclinationAzimuthPoint {
  inclination: number;
  'OIL-159-F-4': number;
  'OIL-159-F-5': number;
  'OIL-159-F-6': number;
}

export interface RateOfBuildPoint {
  tvd: number;
  'OIL-159-F-4': number;
  'OIL-159-F-5': number;
  'OIL-159-F-6': number;
}

export interface DrillingAnalyticsData {
  mdVsTvd: MdVsTvdPoint[];
  rateOfTurn: RateOfTurnPoint[];
  inclinationAzimuth: InclinationAzimuthPoint[];
  rateOfBuild: RateOfBuildPoint[];
}

export interface MudProgram {
  weight: string;
  type: string;
}

export interface CasingProgram {
  surfaceCasing: string;
  intermediateCasing: string;
  productionCasing?: string;
}

export interface CementingPractice {
  primaryLead: string;
  primaryTail: string;
  topOfCement: string;
}

export interface FormationTopItem {
  name: string;
  depth: string;
  isPayZone?: boolean;
}

export interface OtherInformationData {
  mudProgram: MudProgram;
  casingProgram: CasingProgram;
  cementingPractice: CementingPractice;
  formationTops: FormationTopItem[];
}

export interface WellFullDetails {
  header: WellHeaderData;
  formationRisk: FormationRiskSummary;
  wellStructureImage: string;
  offsetEvents: OffsetEvent[];
  analytics: DrillingAnalyticsData;
  otherInformation: OtherInformationData;
}
