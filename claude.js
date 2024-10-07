document.addEventListener("DOMContentLoaded", function() {
    const paras = document.querySelectorAll('.paras');
    let currentIndex = 0;

    function showNextPara() {
        // Hide all paragraphs
        paras.forEach(para => para.style.display = 'none');

        // Set display to block for the current paragraph and trigger fadeIn animation
        const para = paras[currentIndex];
        para.style.display = 'block';
        para.style.animation = `fadeIn 1s forwards`;

        para.addEventListener('animationend', () => {
            // After fadeIn, wait, then trigger fadeOut
            setTimeout(() => {
                para.style.animation = `fadeOut 1s forwards`;

                para.addEventListener('animationend', () => {
                    para.style.display = 'none'; // Hide it again
                    currentIndex = (currentIndex + 1) % paras.length; // Loop back to the first
                    showNextPara(); // Show the next paragraph
                }, { once: true }); // Ensure this only runs once
            }, 1000); // Time before fading out
        }, { once: true }); // Ensure this only runs once
    }

    showNextPara(); // Start the animation
});