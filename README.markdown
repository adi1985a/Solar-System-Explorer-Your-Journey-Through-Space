# Solar System Explorer

## Overview
Solar System Explorer is a responsive HTML-based website for learning about space. It features a video background, interactive video modal, a favorites system using localStorage, a facts carousel, and links to external space resources like NASA. Built with modern CSS, JavaScript, and Font Awesome icons.

## Features
- **Responsive Navigation**: Mobile-friendly menu with links to Home, Planets, Stars, Exploration, Astronomy, and more.
- **Video Background**: Autoplaying space video on the homepage with overlay for readability.
- **Interactive Video Modal**: Watch embedded YouTube videos in a modal with play/pause control.
- **Favorites System**: Add/remove videos to favorites, stored in localStorage, with visual feedback.
- **Facts Carousel**: Displays quick space facts with icons for visual appeal.
- **Featured Section**: Highlights recent space discoveries with images and external links.
- **Newsletter Signup**: Form for email subscriptions (client-side only).
- **Social Media Links**: Connects to Twitter, Facebook, Instagram, and YouTube (placeholders).

## Requirements
- Web browser (e.g., Chrome, Firefox, Safari)
- Internet connection for external resources:
  - Font Awesome (`https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css`)
  - Google Fonts (`Orbitron`, `Roboto`)
  - YouTube iframe API
- Local assets:
  - `styles/main.css`
  - `js/main.js`
  - `videos/home.mp4`
  - `pictures/webb.jpg`, `pictures/mars1.jpg`, `pictures/sun1.jpg`

## Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```
2. Ensure the required assets are in place:
   - `styles/main.css`: Main stylesheet.
   - `js/main.js`: Main JavaScript file.
   - `videos/home.mp4`: Background video.
   - `pictures/`: Images for featured cards.
3. Host the site on a web server (e.g., Apache, Nginx) or open `index.html` directly in a browser:
   ```bash
   python -m http.server 8000
   ```
4. Access the site at `http://localhost:8000`.

## Usage
1. Open the website in a browser to view the homepage.
2. **Interface**:
   - **Navigation**: Click links to explore sections (e.g., Planets, News) or external resources (e.g., NASA Gallery).
   - **Hero Section**: Watch the background video or click "Start Exploring" to jump to featured content.
   - **Featured Cards**: Read about space discoveries with links to external articles.
   - **Facts Carousel**: View space facts with icons.
   - **Video Section**: Watch a YouTube video in a modal or add it to favorites.
   - **Footer**: Access quick links, social media, or subscribe to the newsletter.
3. **Actions**:
   - Click the mobile menu button to toggle navigation on small screens.
   - Add/remove videos from favorites with notifications.
   - Close the video modal to resume the background video.

## File Structure
- `index.html`: Main homepage with video, featured section, facts, and footer.
- `styles/main.css`: Custom styles for layout, responsiveness, and animations.
- `js/main.js`: JavaScript for additional interactivity (assumed to exist).
- `videos/home.mp4`: Background video for the hero section.
- `pictures/`: Images for featured cards (`webb.jpg`, `mars1.jpg`, `sun1.jpg`).
- `README.md`: This file, providing project documentation.

## Notes
- The `js/main.js` file is assumed to exist for additional JavaScript functionality (e.g., carousel logic).
- The newsletter form is client-side only; server-side handling requires additional setup.
- External links (e.g., NASA, social media) are placeholders or real URLs; ensure they remain valid.
- The background video (`home.mp4`) should be optimized for web to reduce load times.
- LocalStorage is used for favorites; no server-side persistence is implemented.
- Ensure the web server supports CORS for external resources if hosted.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make changes and commit (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact
For questions or feedback, open an issue on GitHub or contact the repository owner.