# Wedding Website Application

## Overview

This is a full-stack wedding website application built for Kate & Charley's wedding in Sandpoint, Idaho. The application features a modern, responsive frontend with a React-based user interface and an Express.js backend with PostgreSQL database integration. The site provides wedding details, location information, accommodations, activities, registry information, and contact functionality.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

### Data Storage Solutions
- **Primary Database**: PostgreSQL (configured via Neon Database serverless)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing

## Key Components

### Frontend Components
- **Navigation**: Sticky navigation with smooth scrolling, active section tracking, and black lab logo
- **Hero Section**: Full-screen hero with mountain background optimized for mobile devices
- **Wedding Details**: Ceremony and reception information with enhanced visual cards and icons
- **Location Map**: Interactive Google Maps with side-by-side venue cards and improved transportation section
- **Accommodations**: Hotel recommendations with special wedding rates
- **Activities**: Local attractions and things to do in Sandpoint, Idaho (includes Guiness reference)
- **Registry**: Wedding registry links to multiple retailers
- **Weather**: Real-time NOAA weather data for Sandpoint, Idaho with current conditions and forecast
- **Photo Gallery**: Instagram-linked photo grid promoting #unforgettablenish hashtag for guest engagement
- **Contact Form**: Contact form with toast notifications

### Backend Components
- **Express Server**: Main application server with middleware for logging and error handling
- **Routes**: RESTful API endpoints (currently minimal setup)
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **Vite Integration**: Development server integration with HMR support

### Database Schema
- **Users Table**: Basic user management with username and password fields
- **Extensible Design**: Schema designed to accommodate future wedding-related data models

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query for caching and state management
2. **API Processing**: Express server handles requests and interacts with storage layer
3. **Data Persistence**: Drizzle ORM manages database operations with type safety
4. **Response Handling**: Structured error handling and response formatting
5. **UI Updates**: Reactive UI updates based on server state changes

## External Dependencies

### Core Dependencies
- **Database**: Neon Database (PostgreSQL serverless)
- **UI Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Component Library**: Radix UI primitives via Shadcn/ui
- **Form Validation**: Zod schema validation
- **Date Handling**: date-fns for date manipulation
- **Icons**: Font Awesome and Lucide React

### Development Dependencies
- **Build Tools**: Vite, esbuild
- **TypeScript**: Full TypeScript support across stack
- **Development Server**: Integrated Vite dev server with HMR

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev` starts development server with tsx
- **Port**: Application runs on port 5000
- **Hot Reload**: Vite provides fast HMR for frontend changes
- **Database**: Uses in-memory storage or connects to development PostgreSQL

### Production Build
- **Frontend Build**: `vite build` creates optimized static assets
- **Backend Build**: `esbuild` bundles server code for Node.js runtime
- **Start Command**: `npm run start` runs production server
- **Database**: Connects to production PostgreSQL via DATABASE_URL environment variable

### Replit Configuration
- **Modules**: nodejs-20, web, postgresql-16
- **Deployment**: Autoscale deployment target
- **Port Mapping**: Internal port 5000 mapped to external port 80

## Changelog

Changelog:
- June 13, 2025: Initial setup with complete wedding website
- June 13, 2025: Enhanced mobile hero image display and fixed background attachment
- June 13, 2025: Added black lab dog SVG favicon and logo in navigation  
- June 13, 2025: Implemented real-time NOAA weather integration for Sandpoint, Idaho
- June 13, 2025: Redesigned Important Notes section with icon cards and hover effects
- June 13, 2025: Updated venue display to side-by-side column layout
- June 13, 2025: Enhanced Getting Around section with improved visual design
- June 13, 2025: Added Instagram photo gallery with #unforgettablenish hashtag promotion for guest engagement
- June 13, 2025: Updated site to use custom black lab PNG as favicon and logo throughout navigation, hero, and footer
- June 13, 2025: Removed "Don't Forget Guiness" and "More Ways to Share" sections for cleaner design
- June 13, 2025: Implemented responsive mobile-centered navigation header
- June 13, 2025: Fixed photo gallery image display issues and added two full-width images (wedding ceremony and couple on bicycles)
- June 13, 2025: Repositioned site icon in hero section below couple's names and updated bicycle image

## User Preferences

Preferred communication style: Simple, everyday language.