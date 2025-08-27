document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.querySelector('.ca button');
    const contractAddress = document.querySelector('.ca h3').textContent;

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(contractAddress);
            const buttonImg = copyButton.querySelector('img');
            const originalSrc = buttonImg.src;
            
            // Change the icon to indicate success
            buttonImg.src = './assets/icons/success.svg';
            
            // Reset back to copy icon after 2 seconds
            setTimeout(() => {
                buttonImg.src = originalSrc;
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });
});