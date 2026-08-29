import type { WellFullDetails } from '../types/wellData';

// Hardcoded initial data matching the reference image from Oil India Limited / NWIS
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
      wellId: 'NO 15/9-F-4',
      distanceKm: 1.2,
      events: 'Mud Loss',
      formation: 'Boka Sandstone',
      measuredDepth: 3105,
      trueVerticalDepth: 3008,
      eventType: 'Mud Loss',
      severity: 'Moderate',
      date: '12 Apr 2025',
    },
    {
      id: 'EVT-002',
      wellId: 'NO 15/9-F-7',
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
      wellId: 'NO 15/9-F-9',
      distanceKm: 2.0,
      events: 'Stuck Pipe',
      formation: 'Boka Shale',
      measuredDepth: 1180,
      trueVerticalDepth: 980,
      eventType: 'Stuck Pipe',
      severity: 'Moderate',
      date: '22 Apr 2025',
    },
    {
      id: 'EVT-004',
      wellId: 'NO 15/9-F-4',
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
    // 1. MD vs TVD
    mdVsTvd: [
      { md: 0, 'NO 15/9-F-4': 0, 'NO 15/9-F-7': 0, 'NO 15/9-F-9': 0 },
      { md: 300, 'NO 15/9-F-4': 270, 'NO 15/9-F-7': 280, 'NO 15/9-F-9': 275 },
      { md: 600, 'NO 15/9-F-4': 540, 'NO 15/9-F-7': 560, 'NO 15/9-F-9': 550 },
      { md: 900, 'NO 15/9-F-4': 810, 'NO 15/9-F-7': 850, 'NO 15/9-F-9': 815 },
      { md: 1100, 'NO 15/9-F-4': 990, 'NO 15/9-F-7': 1080, 'NO 15/9-F-9': 975 },
      { md: 1200, 'NO 15/9-F-4': 1080, 'NO 15/9-F-9': 1000 },
      { md: 1500, 'NO 15/9-F-4': 1350 },
      { md: 2000, 'NO 15/9-F-4': 1800 },
      { md: 2500, 'NO 15/9-F-4': 2250 },
      { md: 3000, 'NO 15/9-F-4': 2700 },
      { md: 3500, 'NO 15/9-F-4': 3100 },
    ],

    // 2. TVD vs Rate of Turn for three wells (Facet)
    rateOfTurn: {
      title: 'TVD vs Rate of Turn for three wells',
      yLabel: 'rateTurn',
      xLabel: 'tvd',
      yMin: -0.3,
      yMax: 0.1,
      xMin: 0,
      xMax: 3000,
      yTicks: [-0.3, -0.2, -0.1, 0.0, 0.1],
      xTicks: [0, 1000, 2000, 3000],
      series: [
        {
          wellId: 'NO 15/9-F-4',
          color: '#FF4D4D',
          points: [
            { x: 0, y: 0.00 }, { x: 200, y: -0.01 }, { x: 400, y: 0.01 }, { x: 600, y: -0.01 },
            { x: 800, y: 0.00 }, { x: 1000, y: -0.005 }, { x: 1200, y: 0.005 }, { x: 1400, y: -0.003 },
            { x: 1600, y: 0.002 }, { x: 1800, y: -0.004 }, { x: 2000, y: 0.003 }, { x: 2200, y: -0.002 },
            { x: 2400, y: 0.004 }, { x: 2600, y: -0.001 }, { x: 2800, y: 0.002 }, { x: 3000, y: 0.00 },
          ],
        },
        {
          wellId: 'NO 15/9-F-7',
          color: '#00C853',
          points: [
            { x: 0, y: 0.00 }, { x: 150, y: 0.01 }, { x: 250, y: -0.04 }, { x: 300, y: 0.13 },
            { x: 330, y: -0.32 }, { x: 360, y: 0.08 }, { x: 400, y: -0.12 }, { x: 450, y: 0.05 },
            { x: 500, y: -0.03 }, { x: 600, y: 0.01 }, { x: 700, y: 0.00 }, { x: 900, y: 0.00 }, { x: 1100, y: 0.00 },
          ],
        },
        {
          wellId: 'NO 15/9-F-9',
          color: '#2563EB',
          points: [
            { x: 0, y: 0.00 }, { x: 150, y: -0.03 }, { x: 250, y: 0.07 }, { x: 300, y: -0.07 },
            { x: 350, y: 0.04 }, { x: 400, y: -0.04 }, { x: 450, y: 0.02 }, { x: 500, y: -0.01 },
            { x: 600, y: 0.00 }, { x: 800, y: 0.00 }, { x: 1000, y: 0.00 },
          ],
        },
      ],
    },

    // 3. Inclination vs Azimuth for three wells (Facet)
    inclinationAzimuth: {
      title: 'Inclination vs Azimuth for three wells',
      yLabel: 'azi',
      xLabel: 'incl',
      yMin: 0,
      yMax: 6,
      xMin: 0.0,
      xMax: 1.0,
      yTicks: [0, 2, 4, 6],
      xTicks: [0.00, 0.25, 0.50, 0.75, 1.00],
      series: [
        {
          wellId: 'NO 15/9-F-4',
          color: '#FF4D4D',
          points: [
            { x: 0.00, y: 0.0 }, { x: 0.08, y: 4.1 }, { x: 0.15, y: 4.2 }, { x: 0.25, y: 2.8 },
            { x: 0.35, y: 2.5 }, { x: 0.40, y: 2.0 }, { x: 0.48, y: 1.8 }, { x: 0.55, y: 2.7 },
            { x: 0.70, y: 3.1 }, { x: 0.85, y: 3.3 }, { x: 1.00, y: 3.5 },
          ],
        },
        {
          wellId: 'NO 15/9-F-7',
          color: '#00C853',
          points: [
            { x: 0.00, y: 0.0 }, { x: 0.02, y: 5.8 }, { x: 0.04, y: 4.7 }, { x: 0.06, y: 4.9 },
            { x: 0.09, y: 4.8 }, { x: 0.12, y: 4.5 }, { x: 0.16, y: 4.6 },
          ],
        },
        {
          wellId: 'NO 15/9-F-9',
          color: '#2563EB',
          points: [
            { x: 0.00, y: 0.0 }, { x: 0.02, y: 6.2 }, { x: 0.05, y: 1.8 }, { x: 0.08, y: 3.2 },
            { x: 0.12, y: 3.4 }, { x: 0.20, y: 3.3 }, { x: 0.40, y: 3.1 }, { x: 0.60, y: 3.2 },
            { x: 0.80, y: 3.3 }, { x: 1.00, y: 3.3 },
          ],
        },
      ],
    },

    // 4. TVD vs Rate of Build for three wells (Facet)
    rateOfBuild: {
      title: 'TVD vs Rate of Build for three wells',
      yLabel: 'rateBuild',
      xLabel: 'tvd',
      yMin: -0.001,
      yMax: 0.002,
      xMin: 0,
      xMax: 3000,
      yTicks: [-0.001, 0.000, 0.001, 0.002],
      xTicks: [0, 1000, 2000, 3000],
      series: [
        {
          wellId: 'NO 15/9-F-4',
          color: '#FF4D4D',
          points: [
            { x: 0, y: 0.0000 }, { x: 200, y: 0.0000 }, { x: 350, y: 0.0011 }, { x: 500, y: 0.0001 },
            { x: 700, y: 0.0012 }, { x: 900, y: -0.0005 }, { x: 1100, y: -0.0010 }, { x: 1250, y: 0.0004 },
            { x: 1400, y: -0.0008 }, { x: 1550, y: 0.0016 }, { x: 1750, y: -0.0001 }, { x: 1950, y: 0.0002 },
            { x: 2150, y: 0.0000 }, { x: 2350, y: 0.0003 }, { x: 2550, y: 0.0001 }, { x: 2750, y: 0.0015 },
            { x: 2950, y: 0.0000 }, { x: 3000, y: 0.0002 },
          ],
        },
        {
          wellId: 'NO 15/9-F-7',
          color: '#00C853',
          points: [
            { x: 0, y: 0.0000 }, { x: 200, y: 0.0000 }, { x: 350, y: 0.0004 }, { x: 450, y: -0.0004 },
            { x: 550, y: 0.0012 }, { x: 650, y: 0.0001 }, { x: 750, y: 0.0009 }, { x: 850, y: -0.0002 },
            { x: 950, y: 0.0001 }, { x: 1100, y: 0.0000 },
          ],
        },
        {
          wellId: 'NO 15/9-F-9',
          color: '#2563EB',
          points: [
            { x: 0, y: 0.0000 }, { x: 200, y: 0.0000 }, { x: 400, y: 0.0001 }, { x: 500, y: 0.0022 },
            { x: 650, y: 0.0008 }, { x: 750, y: 0.0023 }, { x: 850, y: 0.0012 }, { x: 950, y: -0.0001 },
            { x: 1000, y: 0.0000 },
          ],
        },
      ],
    },
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
