document.getElementById('generateButton').addEventListener('click', function() {
    const url = document.getElementById('urlInput').value;
    if (url) {
        generateQRCode(url);
    } else {
        alert('Please enter a URL');
    }
});

function generateQRCode(url) {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code
    const qrCode = new QRCode(qrcodeContainer, {
        text: url,
        width: 200,
        height: 200,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}

// You can add more functionality for color, design, and marker customization.
