# **Aapda-Prashikshan: National Disaster Management Training Monitoring System**

A comprehensive, modernized web-based platform for monitoring and managing disaster management training programs across India.

## **Overview**

Aapda-Prashikshan is a unified, geo-aware web platform designed to address the fragmentation in India's disaster management training ecosystem. The system provides real-time visibility into training activities, participant registries, and skill distribution across states and union territories, all through a clean, responsive, and modern user interface.

## **Key Features**

* **Modern User Interface**: A complete redesign of all pages for a clean, professional, and consistent user experience.  
* **Responsive Design**: A mobile-first approach with a collapsible sidebar ensures seamless usability on any device.  
* **User Authentication**: Secure login system with role-based access control (Admin and Regular users).  
* **Interactive Dashboard**: Real-time statistics, geospatial visualization, and a multi-view analytics chart (Bar, Pie, Pareto, Table).  
* **Training Management**: Intuitive modals for creating, viewing, editing, and managing training programs.  
* **Participant Registry**: A national cadre database with robust search/filter capabilities and modernized action buttons.  
* **Advanced Report Generation**: Create and download custom reports in both **CSV** and **PDF** formats.

## **Technology Stack**

### **Frontend**

* HTML5, CSS3, JavaScript (Vanilla)  
* **Styling**: Tailwind CSS (via CDN)  
* **Animations**: GSAP  
* **Charting**: Chart.js  
* **Mapping**: Leaflet.js  
* **PDF Generation**: jsPDF & jspdf-autotable

### **Backend & Authentication**

* Supabase for authentication and user management  
* JSON/localStorage for local data storage

## **Setup Instructions**

1. Clone the repository.  
2. Open index.html (the new landing page) or login.html in a web browser.  
3. For development, use a local server:  
   python \-m http.server 5000

## **Authentication Setup**

This application uses **Supabase** for authentication. See docs/SUPABASE\_SETUP.md for detailed instructions on setting up users and roles.

### **Fallback Demo Credentials**

If Supabase is not configured, the system uses mock authentication:

* **Admin User**: admin@ndma.gov.in / admin123  
* **Regular User**: user@ndma.gov.in / user123

## **Project Structure**

The project follows a modular structure with self-contained HTML files for each page, leveraging modern JavaScript and CDN-based libraries.  

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

## **License**

Government of India \- Ministry of Home Affairs / NDMA