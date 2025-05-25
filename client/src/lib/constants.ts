/**
 * constants.ts - Application constants for Invenor 2.0
 * Brand colors, animations and configuration
 */

export const BRAND_COLORS = {
  primary: {
    dark: '#1e1e1e',    // Gris oscuro base
    green: '#10946e',   // Verde Invenor  
    light: '#f9f9f9',   // Blanco/gris muy claro
    emerald: '#10b981', // Verde esmeralda para acentos
  },
  slate: {
    50: '#f8fafc',
    100: '#f1f5f9', 
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  }
} as const;

export const ANIMATION_DURATION = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slowest: 0.8,
} as const;

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px', 
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const COMPANY_INFO = {
  name: 'Invenor',
  tagline: 'infraestructura que se convierte en rentabilidad',
  email: 'contacto@invenor.cl',
  phone: '+56 2 2XXX XXXX',
  address: 'Santiago, Chile',
} as const;