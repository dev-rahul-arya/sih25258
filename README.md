# Aapda-Prashikshan: National Disaster Management Training Monitoring System

A comprehensive web-based platform for monitoring and managing disaster management training programs across India.

## Overview

Aapda-Prashikshan is a unified, geo-aware web platform designed to address the fragmentation in India's disaster management training ecosystem. The system provides real-time visibility into training activities, participant registries, and skill distribution across states and union territories.

## Key Features

- **User Authentication**: Secure login system with role-based access control (Admin and Regular users)
- **Interactive Dashboard**: Real-time statistics, geospatial visualization, and analytics
- **Training Management**: Create, view, edit, and manage training programs
- **Participant Registry**: National cadre database with search and filter capabilities
- **Report Generation**: Customizable reports with download functionality
- **Geospatial Visualization**: Map-based view of training distribution across India
- **Skill Density Analytics**: Heatmap showing trained personnel concentration in high-risk areas

## Technology Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Tailwind CSS for styling
- GSAP for animations
- Chart.js for data visualizations
- Leaflet.js for geospatial mapping

### Backend & Authentication
- Supabase for authentication and user management
- JSON/localStorage for local data storage

## Setup Instructions

1. Clone the repository
2. Open `index.html` (login page) in a web browser
3. For development, use a local server:
   ```bash
   python -m http.server 5000
   ```
   Or use the included workflow configuration

## Authentication Setup

This application uses **Supabase** for authentication with role-based access control.

### Setting Up Supabase Users

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Users
3. Create users and set their role in user metadata:
   - For admin: `{"role": "admin", "name": "Admin User"}`
   - For regular user: `{"role": "user", "name": "Regular User"}`

See [docs/SUPABASE_SETUP.md](docs/SUPABASE_SETUP.md) for detailed setup instructions.

### Fallback Demo Credentials

If Supabase is not configured, the system uses mock authentication:
- **Admin User**: admin@ndma.gov.in / admin123
- **Regular User**: user@ndma.gov.in / user123

## Project Structure

```
/aapda-prashikshan/
├── login.html              # Login page
├── dashboard.html          # Main dashboard
├── trainings.html          # Training management
├── participants.html       # Participant registry
├── reports.html           # Report generation
├── /assets/
│   ├── /css/              # Stylesheets
│   ├── /js/               # JavaScript files
│   ├── /images/           # Images and logos
│   └── /icons/            # SVG icons
└── /docs/                 # Documentation
```

## Core Modules

### 1. Training Management
- Add new training programs
- View and edit existing trainings
- Filter by state, theme, and date
- Track training status

### 2. Participant Registry
- National database of trained personnel
- Search by name, state, or skill
- View certification status
- Track training history

### 3. Geospatial Dashboard
- Interactive map of India
- Training location markers
- State-wise distribution
- Skill density heatmap

### 4. Reporting & Analytics
- Generate custom reports
- Filter by date range, state, and theme
- Download reports in multiple formats
- Visual analytics with charts

## Admin Features

Administrators have additional capabilities:
- User management
- System-wide settings
- Advanced data access
- Bulk operations

## Security

- Secure authentication via Supabase
- Role-based access control
- Session management
- Data validation

## Alignment with National Objectives

This system supports:
- Prime Minister's 10-Point Agenda on Disaster Risk Reduction
- Sendai Framework for Disaster Risk Reduction
- National Disaster Management Authority (NDMA) initiatives

## License

Government of India - Ministry of Home Affairs / NDMA

## Contact

For support and queries, contact the NDMA technical team.
