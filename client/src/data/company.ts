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
    name: 'Roberto Pirazzoli Bunster',
    role: 'CEO & Co-Fundador',
    bio: 'Más de 15 años de experiencia en desarrollo de infraestructura y gestión de activos estratégicos.',
    achievements: []
  },
  {
    id: 'founder-2', 
    name: 'Rodrigo Palacios del Campo',
    role: 'COO & Co-Fundador',
    bio: 'Especialista en finanzas corporativas e inversiones con track record en el sector minero y energético.',
    achievements: []
  }
];

// Key business metrics
export const businessMetrics: BusinessMetric[] = [
  {
    value: '500+',
    label: 'predios disponibles',
    description: 'Puntos estratégicos en operación'
  },
  {
    value: '300.000+',
    label: 'hectáreas', 
    description: 'Superficie total en gestión'
  },
  {
    value: '1.200 km',
    label: 'para piping y fibra',
    description: 'Red de telecomunicaciones'
  },
  {
    value: '+ de 10',
    label: 'industrias posibles',
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

// Company approach and methodology
export const companyApproach = [
  {
    icon: 'Target',
    title: 'Identificación Estratégica',
    description: 'Análisis de mercado para identificar activos con alto potencial de crecimiento en sectores clave como Mining, Oil&Gas, y energías renovables.'
  },
  {
    icon: 'Zap',
    title: 'Innovación Tecnológica',
    description: 'Integración de tecnologías emergentes: IoT, data centers, desalinizadoras, y sistemas de conectividad avanzada para maximizar el valor de los activos.'
  },
  {
    icon: 'Network',
    title: 'Conectividad Inteligente',
    description: 'Desarrollo de infraestructura de piping, fibra óptica y logística inteligente que conecta sectores estratégicos del norte de Chile.'
  },
  {
    icon: 'TrendingUp',
    title: 'Escalabilidad Sostenible',
    description: 'Modelo de crecimiento basado en energías limpias, eficiencia operacional y tecnologías que impulsan la transformación digital del sector industrial.'
  }
];