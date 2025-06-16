# 🌌🛰️ Solar System Explorer: Your Journey Through Space 🚀
_A responsive HTML-based website for learning about space, featuring a video background, interactive video modal, localStorage favorites, a facts carousel, and links to external resources like NASA._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E.svg?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Font Awesome](https://img.shields.io/badge/Font%20Awesome-6.x-528DD7.svg?logo=font-awesome&logoColor=white)](https://fontawesome.com/)
[![Google Fonts](https://img.shields.io/badge/Google%20Fonts-Orbitron%20%7C%20Roboto-4285F4.svg?logo=googlefonts)](https://fonts.google.com/) <!-- Assuming both are used -->

## 📋 Table of Contents
1.  [Overview](#-overview)
2.  [Key Features](#-key-features)
3.  [Screenshots (Conceptual)](#-screenshots-conceptual)
4.  [Technical Stack & Requirements](#-technical-stack--requirements)
5.  [Local Setup & Viewing](#️-local-setup--viewing)
6.  [Website Usage & Navigation](#️-website-usage--navigation)
7.  [File Structure](#-file-structure)
8.  [Important Notes & Considerations](#-important-notes--considerations)
9.  [Contributing](#-contributing)
10. [License](#-license)
11. [Contact](#-contact)

## 📄 Overview

**Solar System Explorer** is a responsive HTML-based website designed to be an engaging educational resource for learning about space and astronomy. The site features a captivating video background, an interactive modal for watching embedded YouTube videos, a "favorites" system utilizing browser `localStorage` to save preferred videos, and an informative facts carousel. It also highlights recent space discoveries and provides links to external resources like NASA. Built with modern HTML, CSS (custom styles in `styles/main.css`), and JavaScript (`js/main.js`), it incorporates Font Awesome icons and Google Fonts ("Orbitron" and "Roboto") for a clean, thematic, and user-friendly experience.

<br><br>
<p align="center">
  <img src="screenshots/1.gif" width="70%">
</p>


![Demo GIF](screenshots/2.gif)
![Demo GIF](screenshots/3.gif)
![Demo GIF](screenshots/4.gif)
![Demo GIF](screenshots/5.gif)
![Demo GIF](screenshots/6.gif)
![Demo GIF](screenshots/7.gif)

## ✨ Key Features

*   📱 **Fully Responsive Design**: Built to adapt seamlessly to various screen sizes (desktops, tablets, mobile phones), likely using CSS flexbox, grid, and media queries within `styles/main.css`.
*   🧭 **Mobile-Friendly Navigation**:
    *   A clear navigation menu with links to sections like "Home," "Planets," "Stars," "Exploration," "Astronomy," and potentially external resources.
    *   Features a hamburger menu for easy navigation on mobile devices, with its toggle functionality managed by JavaScript.
*   🎬 **Immersive Video Background**:
    *   An autoplaying space-themed video (`videos/home.mp4`) on the homepage with a text overlay for readability and a call-to-action like "Start Exploring."
*   🎞️ **Interactive Video Modal**:
    *   Allows users to watch embedded YouTube videos (e.g., space documentaries, mission launches) within a modal dialog.
    *   Includes play/pause controls for the embedded video.
*   ⭐ **Favorites System (localStorage)**:
    *   Users can add selected videos to a "favorites" list.
    *   Favorite videos are stored in the browser's `localStorage`, allowing them to persist across sessions for that user on that browser.
    *   Provides visual feedback when a video is added to or removed from favorites.
*   💡 **Facts Carousel**:
    *   Displays a rotating series of interesting space facts, each potentially accompanied by a relevant Font Awesome icon for visual appeal.
    *   (Carousel logic would be implemented in `js/main.js`).
*   🛰️ **Featured Discoveries Section**:
    *   Highlights recent or significant space discoveries or missions (e.g., James Webb Space Telescope, Mars missions).
    *   Presents these as cards with images (`pictures/webb.jpg`, `pictures/mars1.jpg`, etc.) and links to external articles or official sources for more information.
*   📬 **Newsletter Signup Form**:
    *   A simple form for users to subscribe to a newsletter with their email address (client-side implementation only; requires backend for actual subscription).
*   🔗 **Social Media & External Links**:
    *   Connects to social media platforms (Twitter, Facebook, Instagram, YouTube - placeholders or actual links).
    *   Provides links to valuable external space resources like the NASA Gallery.
*   🎨 **Modern Styling & Typography**:
    *   Styled with a custom stylesheet (`styles/main.css`).
    *   Utilizes Font Awesome for a wide range of scalable vector icons.
    *   Employs Google Fonts: "Orbitron" (likely for headings, for a futuristic feel) and "Roboto" (for body text, for readability).

## 🖼️ Screenshots (Conceptual)

_Screenshots of: the Solar System Explorer homepage with the video background, the navigation menu, the interactive video modal, the favorites system in action, the facts carousel, the featured discoveries section, and the newsletter signup form._

<p align="center">
  <img src="screenshots\1.jpg" width="300"/>
  <img src="screenshots\2.jpg" width="300"/>
  <img src="screenshots\3.jpg" width="300"/>
  <img src="screenshots\4.jpg" width="300"/>
  <img src="screenshots\5.jpg" width="300"/>
  <img src="screenshots\6.jpg" width="300"/>
  <img src="screenshots\7.jpg" width="300"/>
  <img src="screenshots\8.jpg" width="300"/>
  <img src="screenshots\9.jpg" width="300"/>
  <img src="screenshots\10jpg" width="300"/>
  <img src="screenshots\11.jpg" width="300"/>
  <img src="screenshots\12.jpg" width="300"/>
  <img src="screenshots\13.jpg" width="300"/>
  <img src="screenshots\14.jpg" width="300"/>
  <img src="screenshots\15.jpg" width="300"/>
  <img src="screenshots\16.jpg" width="300"/>
  <img src="screenshots\17.jpg" width="300"/>
  <img src="screenshots\18.jpg" width="300"/>
  <img src="screenshots\19.jpg" width="300"/>
  <img src="screenshots\20.jpg" width="300"/>
  <img src="screenshots\21.jpg" width="300"/>
</p>


## 🛠️ Technical Stack & Requirements

### Core Technologies:
*   **Structure**: HTML5
*   **Styling**: CSS3 (`styles/main.css`)
*   **Interactivity**: JavaScript (ES6+ via `js/main.js`)
*   **Icons**: Font Awesome (v6.x via CDN)
*   **Fonts**: Google Fonts (Orbitron, Roboto)
*   **Video**: HTML5 `<video>` tag, YouTube iframe API

### Requirements:
*   **Web Browser**: Any modern web browser (e.g., Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
*   **Internet Connection**: **Required** to load external resources:
    *   Font Awesome CDN: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`
    *   Google Fonts (Orbitron, Roboto)
    *   YouTube iframe API (for embedded videos)
*   **Local Assets**:
    *   `styles/main.css` (main stylesheet)
    *   `js/main.js` (main JavaScript file for interactivity)
    *   `videos/home.mp4` (background video for the hero section)
    *   `pictures/` directory containing all images for featured cards (e.g., `webb.jpg`, `mars1.jpg`, `sun1.jpg`).

## ⚙️ Local Setup & Viewing

1.  **Clone or Download the Repository**:
    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```
    *(Replace `<repository-url>` and `<repository-directory>` with your specific details, or simply download the files into a local folder).*

2.  **Ensure Asset Placement**:
    *   Verify that the `styles/` folder contains `main.css`.
    *   Verify that the `js/` folder contains `main.js`.
    *   Verify that the `videos/` folder contains `home.mp4`.
    *   Ensure the `pictures/` subfolder exists and contains all necessary images (e.g., `webb.jpg`).
    *   Confirm that all paths in `index.html` and `styles/main.css` to these local assets are correct.

3.  **Open in Browser or Host Locally**:
    *   **Directly in Browser**: You can usually open `index.html` directly in your web browser (File > Open File).
    *   **Using a Simple HTTP Server (Recommended for consistent behavior, especially if JavaScript involves fetching local resources or has complex pathing)**:
        If you have Python installed, navigate to the project's root directory in your terminal and run:
        ```bash
        python -m http.server 8000
        ```
        Then, open your web browser and go to `http://localhost:8000`.
    *   Alternatively, use any other local web server solution (e.g., Live Server extension in VS Code).

## 💡 Website Usage & Navigation

1.  Open `index.html` in your web browser (ensure an internet connection for CDN-hosted resources).
2.  **Interface**:
    *   **Navigation Menu**: Use the main navigation (or hamburger menu on mobile) to explore sections like "Home," "Planets," "Stars," "Exploration," "Astronomy," or link to external resources like "NASA Gallery."
    *   **Hero Section**: Watch the autoplaying space video background. Click the "Start Exploring" button to (presumably) scroll to or navigate to the featured content.
    *   **Featured Cards**: Read summaries about recent space discoveries and click links to view external articles.
    *   **Facts Carousel**: View a series of space-related facts, possibly with navigation controls if implemented.
    *   **Video Section**: Click to watch an embedded YouTube video in a modal pop-up. Use buttons to add or remove the video from your "Favorites."
    *   **Footer**: Access quick links, (placeholder) social media profiles, or use the (client-side only) newsletter signup form.
3.  **Actions**:
    *   **Toggle Mobile Menu**: On smaller screens, click the hamburger icon to open and close the navigation menu.
    *   **Manage Favorites**: Click "Add to Favorites" or "Remove from Favorites" buttons associated with videos. These changes will be saved in `localStorage` and persist if you reload the page.
    *   **Video Modal**: Click play/pause controls within the video modal. Click a close button or outside the modal to dismiss it and resume viewing the main page.
    *   Interact with the (placeholder) newsletter form.

## 🗂️ File Structure

The project is expected to have the following basic file structure:

*   `index.html`: The main HTML file for the homepage, containing all sections and content.
*   `styles/` (subfolder):
    *   `main.css`: The primary custom CSS file for styling layout, responsiveness, and visual elements.
*   `js/` (subfolder):
    *   `main.js`: Custom JavaScript file for general interactivity, video modal, favorites system, facts carousel logic, and mobile menu.
*   `videos/` (subfolder):
    *   `home.mp4`: The background video for the hero section.
*   `pictures/` (subfolder): Contains all images used for featured cards (e.g., `webb.jpg`, `mars1.jpg`, `sun1.jpg`).
*   `README.md`: This documentation file.

## 📝 Important Notes & Considerations

*   **`js/main.js` Functionality**: This file is crucial and assumed to handle a significant amount of interactivity: mobile menu, video modal, favorites system (localStorage CRUD), facts carousel, and potentially smooth scrolling or other dynamic effects. Its full implementation is key.
*   **Newsletter Form (Client-Side Only)**: The newsletter signup form is currently a frontend element. For actual subscription functionality, it would need to be integrated with a backend service (e.g., via an API call to a mailing list provider or a custom backend script).
*   **Placeholder Links**: External links (e.g., to NASA articles, social media profiles) should be verified and updated if they are placeholders. Internal navigation links to other potential pages also need corresponding HTML files.
*   **Video Optimization**: The background video (`videos/home.mp4`) should be optimized for web delivery (compression, appropriate formats like WebM/MP4) to ensure fast loading and smooth playback.
*   **`localStorage` for Favorites**: This provides user-specific persistence on a single browser. It's not synchronized across devices or browsers and has storage limits.
*   **CORS**: If fetching any data via JavaScript from external APIs (beyond what YouTube iframe API handles itself), ensure the server hosting those APIs supports Cross-Origin Resource Sharing (CORS) or that you are proxying requests if necessary.
*   **Performance**: Heavy use of a background video, multiple external libraries (Font Awesome, Google Fonts), and potentially unoptimized images can impact page load speed. Consider performance optimization techniques.

## 🤝 Contributing

Contributions to **Solar System Explorer** are highly encouraged! If you have ideas for:

*   Adding more content sections (e.g., detailed planet pages, astronaut biographies).
*   Implementing the newsletter signup with a mock backend or a service like Mailchimp.
*   Expanding the favorites system (e.g., for articles or facts).
*   Improving the facts carousel or video modal functionality.
*   Optimizing assets for better performance.
*   Enhancing accessibility or SEO.

1.  Fork the repository.
2.  Create a new branch for your feature (`git checkout -b feature/YourSpaceIdea`).
3.  Make your changes (HTML, CSS, JS, assets).
4.  Commit your changes (`git commit -m 'Feature: Implement YourSpaceIdea'`).
5.  Push to the branch (`git push origin feature/YourSpaceIdea`).
6.  Open a Pull Request.

## 📃 License

This project is licensed under the **MIT License**.
(If you have a `LICENSE` file in your repository, refer to it: `See the LICENSE file for details.`)

## 📧 Contact

Project developed by **Adrian Lesniak**.
For questions or feedback, please open an issue on the GitHub repository or contact the repository owner.

---
🌠 _Embark on an interactive journey through the cosmos!_
