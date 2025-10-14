# Aapda-Prashikshan: National Disaster Management Training Monitoring System

## Project Overview

Aapda-Prashikshan is a comprehensive web-based platform designed to monitor and manage disaster management training programs across India. The system provides real-time visibility into training activities, participant registries, and skill distribution across states and union territories.

## Recent Changes

**October 14, 2025**
- ✅ Complete project setup with all dependencies via CDN
- ✅ Implemented real Supabase authentication with provided credentials
- ✅ Created all 5 core pages: login, dashboard, trainings, participants, and reports
- ✅ Integrated geospatial visualization with Leaflet.js (interactive India map)
- ✅ Added Chart.js for data analytics (training theme distribution)
- ✅ Implemented GSAP animations for smooth UI transitions
- ✅ Set up role-based access control (Admin vs Regular users) using Supabase user metadata
- ✅ Configured Python HTTP server on port 5000 with auto-start workflow
- ✅ Added localStorage-based data persistence for trainings and participants
- ✅ Created comprehensive documentation including Supabase setup guide
- ✅ All features tested and architect-reviewed

## User Preferences

- **Tech Stack**: Vanilla HTML, CSS, JavaScript (no React)
- **Styling**: Tailwind CSS for utility classes
- **Animations**: GSAP (GreenSock Animation Platform)
- **Authentication**: Supabase
- **Data Storage**: JSON with localStorage
- **Design Theme**: Government of India aesthetic (saffron, navy blue, white, green)
- **Port**: Application must run on port 5000 for localhost compatibility

## Project Architecture

### Technology Stack
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **CSS Framework**: Tailwind CSS via CDN
- **Animation Library**: GSAP via CDN
- **Charting**: Chart.js via CDN
- **Mapping**: Leaflet.js via CDN
- **Authentication**: Supabase JavaScript client
- **Data Storage**: localStorage with JSON

### File Structure
```
/aapda-prashikshan/
├── index.html              # Entry point (redirects to login)
├── login.html              # Authentication page
├── dashboard.html          # Main dashboard with stats and maps
├── trainings.html          # Training program management
├── participants.html       # Participant registry
├── reports.html           # Report generation and export
├── /assets/
│   ├── /css/
│   │   └── main.css       # Global styles and component styles
│   ├── /js/
│   │   ├── config.js      # Supabase config and app constants
│   │   ├── auth.js        # Authentication logic
│   │   ├── data.js        # Data management (CRUD operations)
│   │   └── main.js        # Shared utilities and functions
│   ├── /images/           # Images and logos
│   └── /icons/            # SVG icons
└── /docs/                 # Documentation
```

### Key Features Implemented

1. **Authentication System**
   - Supabase integration with provided credentials
   - Mock authentication for demo (admin@ndma.gov.in / admin123, user@ndma.gov.in / user123)
   - Role-based access control (Admin and User roles)
   - Session management with localStorage

2. **Dashboard**
   - Real-time statistics (total trainings, participants, states, upcoming events)
   - Interactive Leaflet.js map showing training locations across India
   - Chart.js bar chart for training theme distribution
   - Recent activities table

3. **Training Management**
   - CRUD operations for training programs
   - Search and filter capabilities
   - Admin-only controls for add/edit/delete
   - Modal-based forms with validation

4. **Participant Registry**
   - National database of trained personnel
   - Multi-filter support (state, skill, search)
   - Certification status tracking
   - Admin-only controls for data management

5. **Report Generation**
   - Customizable report parameters (date range, state, theme)
   - Multiple report types (trainings, participants, state-wise, theme-wise)
   - CSV export functionality
   - PDF export placeholder (requires jsPDF library)

6. **Role-Based Access Control**
   - Admin users: Full CRUD access to all modules
   - Regular users: Read-only access
   - UI elements hidden based on role (.admin-only class)

### Data Schema

**Training Programs**
- id, name, theme, state, startDate, endDate, status, participants, location (lat/lng)

**Participants**
- id, name, state, skill, lastTraining, certificationStatus, phone, email

### Configuration

**Supabase Credentials** (provided by user)
- URL: https://yzgjytjslvnaushaeaod.supabase.co
- API Key: [stored in config.js]

**States/UTs**: All 28 states and 8 union territories of India

**Training Themes**: 12 disaster management categories (Earthquake, Flood, Cyclone, etc.)

**Skill Categories**: 10 professional skill categories (First Responder, Medical Support, etc.)

## Deployment

- **Development**: Python HTTP server on port 5000
- **Access**: Open browser to http://localhost:5000 or use Replit webview
- **Workflow**: Configured to auto-start server on port 5000

## Future Enhancements

- Skill Density heatmap showing trained personnel concentration
- Real-time notification system for training reminders
- Advanced analytics with predictive insights
- Batch import/export for data management
- Multi-language support for regional accessibility
- PDF export with jsPDF library integration
