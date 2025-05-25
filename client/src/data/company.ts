/**
 * company.ts - Company data for Invenor 2.0
 * Centralized business information and metrics
 */

export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  achievements: string[];
  linkedin?: string;
}

export interface BusinessMetric {
  value: string;
  label: string;
  description?: string;
}

export interface ProjectData {
  id: string;
  name: string;
  category: string;
  status: 'active' | 'development' | 'completed';
  investment: number;
  roi: number;
  description: string;
}

// Company founders information
export const founders: Founder[] = [
  {
    id: 'founder-1',
    name: 'Socio Fundador 1',
    role: 'CEO & Co-Fundador',
    bio: 'Más de 15 años de experiencia en desarrollo de infraestructura y gestión de activos estratégicos.',
    achievements: [
      'Gestión de más de US$50M en activos inmobiliarios',
      'Desarrollo de 25+ proyectos de infraestructura',
      'Ex-ejecutivo en empresas Fortune 500'
    ]
  },
  {
    id: 'founder-2', 
    name: 'Socio Fundador 2',
    role: 'COO & Co-Fundador',
    bio: 'Especialista en finanzas corporativas e inversiones con track record en el sector minero y energético.',
    achievements: [
      'Estructuración de US$200M+ en financiamientos',
      'Asesoría a 15+ empresas mineras del norte',
      'MBA en Finanzas Corporativas'
    ]
  }
];

// Key business metrics
export const businessMetrics: BusinessMetric[] = [
  {
    value: '500+',
    label: 'Estaciones Gestionadas',
    description: 'Puntos estratégicos en operación'
  },
  {
    value: '2,500+',
    label: 'Hectáreas Desarrolladas', 
    description: 'Superficie total en gestión'
  },
  {
    value: '1,200',
    label: 'Kilómetros de Fibra',
    description: 'Red de telecomunicaciones'
  },
  {
    value: 'US$85M',
    label: 'En Activos Gestionados',
    description: 'Valor total del portafolio'
  }
];

// Investment opportunities
export const investmentOpportunities: ProjectData[] = [
  {
    id: 'estaciones',
    name: '500+ Estaciones',
    category: 'Infraestructura Logística',
    status: 'active',
    investment: 500000,
    roi: 22,
    description: 'Red de estaciones estratégicas en el norte de Chile'
  },
  {
    id: 'puchuncavi',
    name: 'Terreno Puchuncaví', 
    category: 'Desarrollo Industrial',
    status: 'development',
    investment: 2000000,
    roi: 67,
    description: '250 hectáreas para desarrollo industrial'
  },
  {
    id: 'hub-norte',
    name: 'Hub Norte',
    category: 'Tecnología e Innovación',
    status: 'development', 
    investment: 1500000,
    roi: 28,
    description: 'Centro tecnológico para empresas mineras'
  },
  {
    id: 'fibra-oscura',
    name: 'Fibra Oscura',
    category: 'Telecomunicaciones',
    status: 'active',
    investment: 750000,
    roi: 38,
    description: 'Red de fibra óptica de 1,200 km'
  }
];

// Company timeline
export const companyTimeline = [
  {
    year: '2020',
    title: 'Fundación de Invenor',
    description: 'Inicio de operaciones con foco en activos estratégicos del norte'
  },
  {
    year: '2021', 
    title: 'Primera Adquisición',
    description: 'Adquisición de 150 estaciones ferroviarias estratégicas'
  },
  {
    year: '2022',
    title: 'Expansión del Portafolio',
    description: 'Incorporación de terrenos industriales y red de fibra óptica'
  },
  {
    year: '2023',
    title: 'Hub de Innovación',
    description: 'Desarrollo del proyecto Hub Norte para empresas tecnológicas'
  },
  {
    year: '2024',
    title: 'Consolidación',
    description: 'US$85M en activos gestionados y expansión a nuevos sectores'
  }
];