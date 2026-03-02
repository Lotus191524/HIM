document.getElementById('loveBtn').addEventListener('click', () => {
    const container = document.getElementById('heart-container');
    
    // Create 30 floating hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            
            // Randomize position and speed
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (Math.random() * 2 + 2) + 's';
            heart.style.opacity = Math.random();
            
            container.appendChild(heart);

            // Clean up DOM after animation
            setTimeout(() => {
                heart.remove();
            }, 4000);
        }, i * 100);
    }

    // Change button text after click
    const btn = document.getElementById('loveBtn');
    btn.innerText = "I Love You Forever!";
});
        
