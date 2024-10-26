document.addEventListener('DOMContentLoaded', function() {
    // Update profile information from config
    document.getElementById('name').textContent = config.name;
    document.getElementById('title').textContent = config.title;
    document.getElementById('bio').textContent = config.bio;
    document.getElementById('location').textContent = config.location;
    document.getElementById('email').textContent = config.email;

    // Handle profile image error
    const profileImage = document.getElementById('profile-image');
    profileImage.onerror = function() {
        // If profile image fails to load, use a placeholder
        this.src = 'https://via.placeholder.com/128';
        console.log('Profile image failed to load, using placeholder');
    };

    // Add some simple animations
    document.querySelector('.container').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.container').style.transition = 'opacity 0.5s ease-in-out';
        document.querySelector('.container').style.opacity = '1';
    }, 100);
});