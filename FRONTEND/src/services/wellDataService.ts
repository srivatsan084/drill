import type { WellFullDetails } from '../types/wellData';

// Hardcoded initial data matching the reference image from Oil India Limited
export const defaultWellDetailsData: WellFullDetails = {
  header: {
    wellId: 'OIL-159-F-7',
    status: 'Drilling',
    measuredDepth: '1,245.50 m',
    trueVerticalDepth: '1,118.30 m',
    lastUpdated: '28 May 2025, 10:30 AM',
    location: 'Assam Shelf, India',
    rig: 'NWIS Rig #7',
    operator: 'NWIS',
    spudDate: '15 May 2025',
    objective: 'Reservoir Evaluation',
    isFavorite: true,
  },
  formationRisk: {
    hydrocarbon: {
      depthFound: '1,082.00 m',
      hydrocarbonType: 'Oil',
      payZoneThickness: '12.50 m',
    },
    formation: {
      name: 'Upper Boka Sandstone',
      lithology: 'Sandstone with Shale Interbeds',
      age: 'Miocene',
    },
    riskAssessment: {
      similarityScorePercentage: 72,
      chanceCategory: 'Moderate Chance',
      riskPoints: [
        'Similar reservoir quality observed in offset wells',
        'Moderate mud loss risk',
        'Low to moderate kick risk',
        'Stuck pipe risk in shale intervals',
      ],
    },
  },
  wellStructureImage: '/well_structure_3d.png',
  offsetEvents: [
    {
      id: 'EVT-001',
      wellId: 'OIL-159-F-1',
      distanceKm: 1.2,
      events: 'Mud Loss',
      formation: 'Boka Sandstone',
      measuredDepth: 1105,
      trueVerticalDepth: 1008,
      eventType: 'Mud Loss',
      severity: 'Moderate',
      date: '12 Apr 2025',
    },
    {
      id: 'EVT-002',
      wellId: 'OIL-159-F-5',
      distanceKm: 1.5,
      events: 'Kick',
      formation: 'Upper Boka',
      measuredDepth: 1208,
      trueVerticalDepth: 1098,
      eventType: 'Kick',
      severity: 'High',
      date: '18 Apr 2025',
    },
    {
      id: 'EVT-003',
      wellId: 'OIL-159-F-3',
      distanceKm: 2.0,
      events: 'Stuck Pipe',
      formation: 'Boka Shale',
      measuredDepth: 980,
      trueVerticalDepth: 980,
      eventType: 'Stuck Pipe',
      severity: 'Moderate',
      date: '22 Apr 2025',
    },
    {
      id: 'EVT-004',
      wellId: 'OIL-159-F-8',
      distanceKm: 1.7,
      events: 'Cementing',
      formation: 'Boka Sandstone',
      measuredDepth: 1158,
      trueVerticalDepth: 1045,
      eventType: 'Cementing',
      severity: 'Low',
      date: '25 Apr 2025',
    },
  ],
  analytics: {
    mdVsTvd: [
      { md: 0, 'OIL-159-F-7': 0, 'OIL-159-F-4': 0, 'OIL-159-F-5': 0, 'OIL-159-F-6': 0 },
      { md: 500, 'OIL-159-F-7': 500, 'OIL-159-F-4': 490, 'OIL-159-F-5': 495, 'OIL-159-F-6': 485 },
      { md: 1000, 'OIL-159-F-7': 980, 'OIL-159-F-4': 950, 'OIL-159-F-5': 960, 'OIL-159-F-6': 940 },
      { md: 1500, 'OIL-159-F-7': 1420, 'OIL-159-F-4': 1380, 'OIL-159-F-5': 1400, 'OIL-159-F-6': 1350 },
      { md: 2000, 'OIL-159-F-7': 1850, 'OIL-159-F-4': 1790, 'OIL-159-F-5': 1820, 'OIL-159-F-6': 1760 },
      { md: 2500, 'OIL-159-F-7': 2240, 'OIL-159-F-4': 2180, 'OIL-159-F-5': 2210, 'OIL-159-F-6': 2130 },
      { md: 3000, 'OIL-159-F-7': 2600, 'OIL-159-F-4': 2520, 'OIL-159-F-5': 2580, 'OIL-159-F-6': 2490 },
    ],
    rateOfTurn: [
      { tvd: 0, 'OIL-159-F-4': 0, 'OIL-159-F-5': 0, 'OIL-159-F-6': 0 },
      { tvd: 500, 'OIL-159-F-4': 0.02, 'OIL-159-F-5': -0.01, 'OIL-159-F-6': 0.01 },
      { tvd: 1000, 'OIL-159-F-4': -0.04, 'OIL-159-F-5': 0.08, 'OIL-159-F-6': -0.05 },
      { tvd: 1500, 'OIL-159-F-4': 0.05, 'OIL-159-F-5': -0.06, 'OIL-159-F-6': 0.07 },
      { tvd: 2000, 'OIL-159-F-4': 0.01, 'OIL-159-F-5': 0.02, 'OIL-159-F-6': -0.02 },
      { tvd: 2500, 'OIL-159-F-4': -0.02, 'OIL-159-F-5': 0.01, 'OIL-159-F-6': 0.03 },
      { tvd: 3000, 'OIL-159-F-4': 0.00, 'OIL-159-F-5': 0.00, 'OIL-159-F-6': 0.00 },
    ],
    inclinationAzimuth: [
      { inclination: 0, 'OIL-159-F-4': 10, 'OIL-159-F-5': 12, 'OIL-159-F-6': 15 },
      { inclination: 20, 'OIL-159-F-4': 45, 'OIL-159-F-5': 30, 'OIL-159-F-6': 25 },
      { inclination: 40, 'OIL-159-F-4': 35, 'OIL-159-F-5': 65, 'OIL-159-F-6': 40 },
      { inclination: 60, 'OIL-159-F-4': 50, 'OIL-159-F-5': 40, 'OIL-159-F-6': 75 },
      { inclination: 80, 'OIL-159-F-4': 48, 'OIL-159-F-5': 55, 'OIL-159-F-6': 60 },
      { inclination: 100, 'OIL-159-F-4': 52, 'OIL-159-F-5': 50, 'OIL-159-F-6': 58 },
    ],
    rateOfBuild: [
      { tvd: 0, 'OIL-159-F-4': 0.001, 'OIL-159-F-5': 0.0005, 'OIL-159-F-6': 0.0008 },
      { tvd: 800, 'OIL-159-F-4': 0.004, 'OIL-159-F-5': 0.002, 'OIL-159-F-6': 0.003 },
      { tvd: 1200, 'OIL-159-F-4': 0.007, 'OIL-159-F-5': 0.005, 'OIL-159-F-6': 0.009 },
      { tvd: 1600, 'OIL-159-F-4': 0.002, 'OIL-159-F-5': 0.003, 'OIL-159-F-6': 0.004 },
      { tvd: 2200, 'OIL-159-F-4': 0.001, 'OIL-159-F-5': 0.001, 'OIL-159-F-6': 0.002 },
      { tvd: 3000, 'OIL-159-F-4': 0.000, 'OIL-159-F-5': 0.000, 'OIL-159-F-6': 0.000 },
    ],
  },
  otherInformation: {
    mudProgram: {
      weight: '10.5 ppg',
      type: 'Oil Based Mud',
    },
    casingProgram: {
      surfaceCasing: '13 3/8" @ 350 m',
      intermediateCasing: '9 5/8" @ 1,050 m',
    },
    cementingPractice: {
      primaryLead: '600 m³',
      primaryTail: '300 m³',
      topOfCement: 'Surface',
    },
    formationTops: [
      { name: 'Tipam Sandstone', depth: '450 m' },
      { name: 'Boka Shale', depth: '600 m' },
      { name: 'Upper Boka Sandstone', depth: '1,050 m' },
      { name: 'Pay Zone', depth: '1,082 m', isPayZone: true },
    ],
  },
};

/**
 * Service function to fetch full details for a given well ID.
 * Connects to future backend API endpoint or returns default mock state.
 */
export async function getWellDetails(wellId: string): Promise<WellFullDetails> {
  // Simulating API network call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        ...defaultWellDetailsData,
        header: {
          ...defaultWellDetailsData.header,
          wellId: wellId || 'OIL-159-F-7',
        },
      });
    }, 150);
  });
}
