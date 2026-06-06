document.addEventListener("DOMContentLoaded", () => {
    const roles = [
        "a PEGA Developer.",
        "an Engineer."
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;    
    const typingElement = document.getElementById("typing-text");
    
    function typeEffect() {
        const fullText = roles[roleIndex];
        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }
        charIndex = Math.max(0, Math.min(charIndex, fullText.length));
        currentText = fullText.substring(0, charIndex);
        typingElement.textContent = currentText;
        let speed = isDeleting ? 50 : 100;
        if (!isDeleting && charIndex === fullText.length) {
            speed = 1500; // pause before deleting
            isDeleting = true;
        }
        else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 500; // pause before next word
        }
        setTimeout(typeEffect, speed);
    }
    
    if (typingElement) {
        typeEffect();
    }
});