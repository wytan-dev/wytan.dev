
    const typewriter = document.getElementById('typewriter');
    const textArray = ['aspiring algorithm engineer', 'software developer', 'thanks for stopping by!'];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeText() {
        if (!isDeleting && charIndex <= textArray[textIndex].length) {
            // Add the next character to the text content of the span
            typewriter.textContent = textArray[textIndex].substring(0, charIndex);
            charIndex++;
        } else if (!isDeleting && charIndex > textArray[textIndex].length) {
            // Delay the start of the deleting phase
            setTimeout(() => {
                isDeleting = true;
            }, 2000); // Delay for 2 seconds
        }

        if (isDeleting && charIndex >= 0) {
            // Remove the last character from the text content of the span
            typewriter.textContent = textArray[textIndex].substring(0, charIndex);
            charIndex--;
        } else if (isDeleting && charIndex === -1) {
            // Move to the next line or go back to the first line
            textIndex = (textIndex + 1) % textArray.length;
            charIndex = 0;
            isDeleting = false;
        }
    }

    setInterval(typeText, 100); // Add or remove a character every 100 milliseconds

