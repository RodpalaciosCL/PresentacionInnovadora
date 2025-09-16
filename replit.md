# Invenor 2.0 - Investment Platform

## Overview

Invenor 2.0 is a corporate website and investment platform for "Inversiones del Norte," a Chilean company that develops strategic assets in northern Chile. The platform showcases investment opportunities in railway stations, industrial hubs, and infrastructure projects. Built as a modern React application with TypeScript, it features financial calculators, interactive maps, multilingual support, and professional presentation of investment opportunities to attract strategic investors.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing with code splitting via React.lazy
- **Styling**: Tailwind CSS with shadcn/ui components for consistent, professional design
- **Animations**: Framer Motion for smooth page transitions and interactive elements
- **State Management**: React Context for theme and language preferences, TanStack Query for server state

### Design System
- **Component Library**: shadcn/ui components built on Radix UI primitives
- **Theme System**: Light/dark mode toggle with localStorage persistence and system preference detection
- **Internationalization**: i18next with Spanish (default) and English translations
- **Responsive Design**: Mobile-first approach with breakpoint-specific layouts
- **Brand Colors**: Professional palette with emerald green (#10b981) and slate grays

### Business Logic Components
- **Financial Calculator**: Interactive ROI, TIR, VAN, and payback calculations for different investment scenarios
- **Investment Opportunities**: Tabbed interface showcasing railway stations, Hub Norte innovation center, and Puchuncaví projects
- **Interactive Maps**: Geospatial visualization of railway station locations and investment properties
- **Contact Forms**: Structured investor inquiries with validation and API submission

### Backend Architecture
- **Framework**: Express.js with TypeScript for API endpoints
- **Database**: Drizzle ORM configured for PostgreSQL with Neon serverless database
- **Session Management**: connect-pg-simple for PostgreSQL-backed sessions
- **API Design**: RESTful endpoints for stations, contacts, and financial settings
- **Development Storage**: In-memory storage implementation for development environment

### Data Layer
- **Schema Definition**: Drizzle schema with Zod validation for type-safe database operations
- **Models**: Users, contact submissions, railway stations, and financial settings
- **Query Layer**: TanStack Query for caching, synchronization, and error handling of API requests
- **Form Validation**: react-hook-form with Zod resolvers for client-side validation

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL driver for production database connections
- **drizzle-orm**: Type-safe ORM for database operations with PostgreSQL dialect
- **@tanstack/react-query**: Server state management with caching and background updates
- **react-helmet-async**: SEO and meta tag management for dynamic page titles
- **framer-motion**: Animation library for smooth transitions and interactive elements

### UI and Styling
- **@radix-ui/react-***: Comprehensive set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Utility for creating variant-based component APIs
- **lucide-react**: Modern icon library with consistent styling

### Forms and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Resolver integration for validation libraries
- **zod**: TypeScript-first schema validation library
- **drizzle-zod**: Integration between Drizzle ORM and Zod for schema validation

### Development Tools
- **@typescript-eslint/**: TypeScript-specific linting rules and parser
- **@vitejs/plugin-react**: React support for Vite build tool
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay for Replit environment
- **tsx**: TypeScript execution engine for Node.js development server

### Internationalization
- **i18next**: Internationalization framework with React integration
- **react-i18next**: React bindings for i18next with hooks and components

## Deployment Configuration

### Current Support
The application supports deployment to multiple platforms with platform-specific optimizations:

#### Cloudflare Workers (Primary Deployment Target)
- **Full-stack Support**: Express.js backend runs natively on Cloudflare Workers with Node.js compatibility
- **Edge Distribution**: Global deployment with zero cold starts and automatic scaling
- **Configuration**: Uses `wrangler.toml` with `nodejs_compat` compatibility flag
- **Database**: PostgreSQL connections via environment variables (supports Neon, PlanetScale, etc.)
- **Variables**: Environment variables accessible via `process.env` with Cloudflare secrets management
- **Build Process**: Frontend builds to `client/dist`, backend uses `httpServerHandler` wrapper with Node HTTP server
- **Performance**: 5-minute CPU time limit, supports WebSockets and server-sent events

#### Replit (Development Environment)
- **Development Tools**: Includes Replit-specific plugins for debugging and error overlays
- **Automatic Restarts**: Development workflow with hot module replacement
- **Configuration**: Uses development-specific middleware and in-memory storage
- **Environment**: HTTPS redirection and www subdomain handling for production previews

### Environment Variables Required
- `DATABASE_URL`: PostgreSQL connection string for production database
- `NODE_ENV`: Environment setting (development/production)
- `SESSION_SECRET`: Secret key for session management
- Platform-specific variables handled through respective secret management systems

The development environment uses in-memory storage while production connects to a PostgreSQL database via environment variables. The application includes automatic platform detection and environment-specific optimizations.

### Cloudflare Workers Deployment Steps
1. **Build Frontend**: `cd client && npm run build` (outputs to `client/dist`)
2. **Install Wrangler**: `npm install -g wrangler` or use `npx wrangler`
3. **Configure Secrets**: `wrangler secret put DATABASE_URL` and `wrangler secret put SESSION_SECRET`
4. **Deploy**: `wrangler deploy` (builds and deploys both Express backend and static assets)
5. **Development**: `wrangler dev` for local Workers environment testing

Static assets are served by Wrangler's [assets] configuration, while API routes are handled by the Express server running in Workers with Node.js compatibility.