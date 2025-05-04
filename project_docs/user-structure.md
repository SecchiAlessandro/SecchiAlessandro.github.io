# User Flow & Project Structure

## User Journey
1. **Landing**: User arrives at personal website/blog
2. **Content Consumption**: User reads about sections, experience, education, and projects
3. **Navigation**: User may click on social links, internal navigation items, or project links
4. **Contact**: User may initiate contact through provided methods

## Data Flow
For the text justification feature:
1. HTML structure provides the content containers
2. CSS styles apply text justification to appropriate elements
3. Browser rendering engine displays properly justified text to users

## Content Areas Affected
- Main introduction section
- About/bio section
- Experience details
- Education information 
- Skills listings
- Project descriptions

## Project File Structure
```
SecchiAlessandro.github.io/
├── index.html              # Main website HTML content
├── css/
│   └── styles.css          # Primary stylesheet with justification rules
├── js/                     # JavaScript files for interactive elements
├── assets/                 # Images and other media files
└── project_docs/           # Project documentation
    ├── overview.md         # Project overview
    ├── requirements.md     # Feature requirements
    ├── tech-specs.md       # Technical specifications
    ├── user-structure.md   # User flow and structure
    └── timeline.md         # Project timeline
```

## CSS Modification Locations
- `.text-justify` utility class added to general text utility section
- `.main-content` selector modified to use justified text
- `section.resume-section .resume-section-content` updated for section content
- Additional paragraph-specific rules added for resume sections 