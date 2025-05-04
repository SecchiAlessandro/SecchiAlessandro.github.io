# User Flow & Project Structure

## User Journey
1. User navigates to `https://secchialessandro.github.io/`.
2. User uses the side navigation to jump between sections (About, Thoughts, Experience, etc.).
3. User interacts with content (reads text, views images/carousels, listens to audio, watches videos).
4. User potentially clicks external links (LinkedIn, GitHub, YouTube, etc.).

## Data Flow
- All content is static HTML, CSS, and JavaScript served via GitHub Pages.
- Image/audio/video assets are stored in the `assets/img/` directory.
- Google Photos albums are embedded using `publicalbum` JavaScript.

## Project File Structure
```
/Users/aless/AI_projects/PersonalBlog/
├── SecchiAlessandro.github.io/
│   ├── assets/
│   │   ├── img/      # Profile pictures, project images, etc.
│   │   └── ...       # Other assets if any
│   ├── css/
│   │   └── styles.css # Main stylesheet
│   ├── js/
│   │   └── scripts.js # Core theme JavaScript
│   ├── index.html     # Main page content
│   └── ...            # Other potential HTML files if any
├── project-docs/      # Project documentation (Created)
│   ├── overview.md
│   ├── requirements.md
│   ├── tech-specs.md
│   ├── user-structure.md (This file)
│   └── timeline.md
└── .git/              # Git repository data
``` 