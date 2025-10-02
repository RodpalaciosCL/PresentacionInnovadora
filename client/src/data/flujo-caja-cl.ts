export type FlujoCajaMes = {
  month: number;
  label: string;
  totalMt2: number;
  occupancy: number;
  rentIncome: number;
  capitalInjection: number | null;
  totalIncome: number;
  totalCosts: number;
  netFlow: number;
  cumulativeFlow: number;
};

export type FlujoCajaSummary = {
  capitalTrabajo: number;
  totalIngresos: number;
  totalCostos: number;
  flujoFinal: number;
  peakOcupacion: {
    value: number;
    month: number;
  };
  mt2Final: number;
  mt2Promedio: number;
  occupancyPromedio: number;
};

export const flujoCajaCLTimeline: FlujoCajaMes[] = [
  {
    month: 1,
    label: "Mes 1",
    totalMt2: 0,
    occupancy: 0,
    rentIncome: 0,
    capitalInjection: 600_000_000,
    totalIncome: 600_000_000,
    totalCosts: -41_008_403.36134454,
    netFlow: 558_991_596.6386554,
    cumulativeFlow: 558_991_596.6386554
  },
  {
    month: 2,
    label: "Mes 2",
    totalMt2: 0,
    occupancy: 0,
    rentIncome: 0,
    capitalInjection: null,
    totalIncome: 0,
    totalCosts: -41_008_403.36134454,
    netFlow: -41_008_403.36134454,
    cumulativeFlow: 517_983_193.2773109
  },
  {
    month: 3,
    label: "Mes 3",
    totalMt2: 0,
    occupancy: 0,
    rentIncome: 0,
    capitalInjection: null,
    totalIncome: 0,
    totalCosts: -41_008_403.36134454,
    netFlow: -41_008_403.36134454,
    cumulativeFlow: 476_974_789.9159664
  },
  {
    month: 4,
    label: "Mes 4",
    totalMt2: 16_000,
    occupancy: 0.08,
    rentIncome: 44_782_080,
    capitalInjection: null,
    totalIncome: 44_782_080,
    totalCosts: -48_158_483.36134454,
    netFlow: -3_376_403.3613445386,
    cumulativeFlow: 473_598_386.5546219
  },
  {
    month: 5,
    label: "Mes 5",
    totalMt2: 36_000,
    occupancy: 0.18,
    rentIncome: 100_759_680,
    capitalInjection: null,
    totalIncome: 100_759_680,
    totalCosts: -57_096_083.36134454,
    netFlow: 43_663_596.63865546,
    cumulativeFlow: 517_261_983.19327736
  },
  {
    month: 6,
    label: "Mes 6",
    totalMt2: 46_000,
    occupancy: 0.23,
    rentIncome: 128_748_480,
    capitalInjection: null,
    totalIncome: 128_748_480,
    totalCosts: -61_564_883.36134454,
    netFlow: 67_183_596.63865545,
    cumulativeFlow: 584_445_579.8319328
  },
  {
    month: 7,
    label: "Mes 7",
    totalMt2: 46_000,
    occupancy: 0.23,
    rentIncome: 128_748_480,
    capitalInjection: null,
    totalIncome: 128_748_480,
    totalCosts: -61_564_883.36134454,
    netFlow: 67_183_596.63865545,
    cumulativeFlow: 651_629_176.4705882
  },
  {
    month: 8,
    label: "Mes 8",
    totalMt2: 56_000,
    occupancy: 0.28,
    rentIncome: 156_737_280,
    capitalInjection: null,
    totalIncome: 156_737_280,
    totalCosts: -66_033_683.36134454,
    netFlow: 90_703_596.63865545,
    cumulativeFlow: 742_332_773.1092436
  },
  {
    month: 9,
    label: "Mes 9",
    totalMt2: 75_000,
    occupancy: 0.375,
    rentIncome: 209_916_000,
    capitalInjection: null,
    totalIncome: 209_916_000,
    totalCosts: -74_524_403.36134455,
    netFlow: 135_391_596.63865545,
    cumulativeFlow: 877_724_369.747899
  },
  {
    month: 10,
    label: "Mes 10",
    totalMt2: 75_000,
    occupancy: 0.375,
    rentIncome: 209_916_000,
    capitalInjection: null,
    totalIncome: 209_916_000,
    totalCosts: -74_524_403.36134455,
    netFlow: 135_391_596.63865545,
    cumulativeFlow: 1_013_115_966.3865545
  },
  {
    month: 11,
    label: "Mes 11",
    totalMt2: 72_000,
    occupancy: 0.36,
    rentIncome: 201_519_360,
    capitalInjection: null,
    totalIncome: 201_519_360,
    totalCosts: -73_183_763.36134455,
    netFlow: 128_335_596.63865545,
    cumulativeFlow: 1_141_451_563.02521
  },
  {
    month: 12,
    label: "Mes 12",
    totalMt2: 72_000,
    occupancy: 0.36,
    rentIncome: 201_519_360,
    capitalInjection: null,
    totalIncome: 201_519_360,
    totalCosts: -73_183_763.36134455,
    netFlow: 128_335_596.63865545,
    cumulativeFlow: 1_269_787_159.6638653
  },
  {
    month: 13,
    label: "Mes 13",
    totalMt2: 84_000,
    occupancy: 0.42,
    rentIncome: 235_105_920,
    capitalInjection: null,
    totalIncome: 235_105_920,
    totalCosts: -78_546_323.36134455,
    netFlow: 156_559_596.63865545,
    cumulativeFlow: 1_426_346_756.3025208
  },
  {
    month: 14,
    label: "Mes 14",
    totalMt2: 94_000,
    occupancy: 0.47,
    rentIncome: 263_094_720,
    capitalInjection: null,
    totalIncome: 263_094_720,
    totalCosts: -83_015_123.36134455,
    netFlow: 180_079_596.63865545,
    cumulativeFlow: 1_606_426_352.9411762
  },
  {
    month: 15,
    label: "Mes 15",
    totalMt2: 108_000,
    occupancy: 0.54,
    rentIncome: 302_279_040,
    capitalInjection: null,
    totalIncome: 302_279_040,
    totalCosts: -89_271_443.36134455,
    netFlow: 213_007_596.63865545,
    cumulativeFlow: 1_819_433_949.5798316
  },
  {
    month: 16,
    label: "Mes 16",
    totalMt2: 108_000,
    occupancy: 0.54,
    rentIncome: 302_279_040,
    capitalInjection: null,
    totalIncome: 302_279_040,
    totalCosts: -89_271_443.36134455,
    netFlow: 213_007_596.63865545,
    cumulativeFlow: 2_032_441_546.218487
  },
  {
    month: 17,
    label: "Mes 17",
    totalMt2: 108_000,
    occupancy: 0.54,
    rentIncome: 302_279_040,
    capitalInjection: null,
    totalIncome: 302_279_040,
    totalCosts: -89_271_443.36134455,
    netFlow: 213_007_596.63865545,
    cumulativeFlow: 2_245_449_142.8571424
  },
  {
    month: 18,
    label: "Mes 18",
    totalMt2: 108_000,
    occupancy: 0.54,
    rentIncome: 302_279_040,
    capitalInjection: null,
    totalIncome: 302_279_040,
    totalCosts: -89_271_443.36134455,
    netFlow: 213_007_596.63865545,
    cumulativeFlow: 2_458_456_739.495798
  }
];

export const flujoCajaCLSummary: FlujoCajaSummary = {
  capitalTrabajo: 600_000_000,
  totalIngresos: 3_689_963_520,
  totalCostos: -1_231_506_780.504202,
  flujoFinal: 2_458_456_739.495798,
  peakOcupacion: {
    value: 0.54,
    month: 15
  },
  mt2Final: 108_000,
  mt2Promedio: 61_333.333333333336,
  occupancyPromedio: 0.30666666666666664
};

export const flujoCajaCLMilestones = [
  {
    month: 1,
    title: "Impulso de capital de trabajo",
    description: "Inyección inicial de CLP 600 MM para preparar el terreno, licencias y habilitación de la primera fase."
  },
  {
    month: 4,
    title: "Primer cliente ancla",
    description: "Ingreso de 16 mil m² arrendados que marca el inicio del flujo operativo del activo."
  },
  {
    month: 9,
    title: "Efecto rampa comercial",
    description: "Superamos los 75 mil m² arrendados y la ocupación llega a 37,5 %, lo que eleva el flujo mensual sobre CLP 135 MM."
  },
  {
    month: 15,
    title: "Plataforma instalada",
    description: "Con 108 mil m² operativos (54 % de ocupación), el flujo neto recurrente supera los CLP 213 MM mensuales."
  }
];

export const flujoCajaNarrativa = {
  contexto: "La modelación considera un parque logístico escalable en Baquedano, donde la ocupación crece por oleadas a medida que se firman contratos con clientes mineros y de supply chain.",
  propuestaValor: "El activo genera retornos sólidos gracias a tickets de arriendo pactados en UF y una rampa comercial agresiva que aprovecha la escasez de suelo logístico en la macrozona norte.",
  lecturaEstrategica: "La curva de flujo de caja demuestra que el proyecto se capitaliza rápido: después del desembolso inicial, el neto mensual se vuelve positivo y acumula un colchón de casi CLP 2,5 mil millones al mes 18." 
};
