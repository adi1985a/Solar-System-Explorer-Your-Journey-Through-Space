document.addEventListener('DOMContentLoaded', function() {
    // Video background setup
    const video = document.querySelector('.video-background');
    const muteBtn = document.querySelector('.mute-button');
    const playBtn = document.querySelector('.play-button');
    const scrollBtn = document.querySelector('.scroll-down');

    if (video) {
        // Set initial video properties
        video.muted = true;
        video.loop = true;
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });

        // Mute/Unmute functionality
        if (muteBtn) {
            muteBtn.addEventListener('click', function() {
                if (video.muted) {
                    video.muted = false;
                    muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
                } else {
                    video.muted = true;
                    muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                }
            });
        }

        // Play/Pause functionality
        if (playBtn) {
            playBtn.addEventListener('click', function() {
                if (video.paused) {
                    video.play();
                    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
                } else {
                    video.pause();
                    playBtn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
        }
    }

    // Smooth scroll functionality
    if (scrollBtn) {
        scrollBtn.addEventListener('click', function() {
            const windowHeight = window.innerHeight;
            window.scrollTo({
                top: windowHeight,
                behavior: 'smooth'
            });
        });
    }

    // Mobile fallback
    function checkMobile() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            const videos = document.querySelectorAll('.video-background');
            videos.forEach(video => {
                // Get the poster attribute from the video
                const posterImage = video.getAttribute('poster');
                if (posterImage) {
                    // Create a style for background image
                    video.style.display = 'none';
                    video.parentElement.style.backgroundImage = `url(${posterImage})`;
                    video.parentElement.style.backgroundSize = 'cover';
                    video.parentElement.style.backgroundPosition = 'center';
                }
            });
        }
    }

    checkMobile();
});
