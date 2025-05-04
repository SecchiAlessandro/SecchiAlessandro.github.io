# Requirements & Features

## System Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge) supporting HTML5, CSS3, and JavaScript.
- Internet connection to load external assets (fonts, scripts) and view embedded content.

## Feature Descriptions
- **Single Page Layout:** All content presented on a single `index.html` page.
- **Responsive Design:** Adapts to various screen sizes (desktop, tablet, mobile) using Bootstrap.
- **Navigation:** Fixed sidebar navigation allowing users to jump to different sections.
- **Content Sections:**
    - About: Introduction, mission statement.
    - Thoughts: Diary-style entries on Energy, AI, Leadership.
    - Experience: Professional history.
    - Studies: Educational background.
    - Side Projects: Hackathons, student representation, intercultural experiences.
    - Hobbys: Volleyball, Piano, Mentoring.
    - Books: List of read books.
    - Contacts: Links to social profiles (LinkedIn, GitHub, etc.).
- **Media Integration:**
    - Images: Displayed directly (`<img>` tags).
    - Image Carousels/Galleries: Embedded Google Photos albums via `publicalbum.js`.
    - Audio: Embedded MP3 file using `<audio>` tag.
    - Video: Embedded YouTube videos using `<iframe>`.

## Business Rules
- N/A (Personal website).

## Edge Cases
- Browser compatibility issues (older browsers might not render perfectly).
- Broken external links (social media, YouTube, Google Photos).
- Slow loading times on poor internet connections due to media content.
- JavaScript disabled: Embedded albums/carousels might not work. 