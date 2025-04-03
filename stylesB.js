// Mobile Navigation Toggle
document.querySelector('.burger-menu').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('nav-active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Crypto Price Fetching
async function fetchCryptoPrices() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd');
        const data = await response.json();
        
        document.getElementById('bitcoin-price').textContent = 
            `$${data.bitcoin.usd.toLocaleString()}`;
        document.getElementById('ethereum-price').textContent = 
            `$${data.ethereum.usd.toLocaleString()}`;
    } catch (error) {
        console.error('Price fetch error:', error);
    }
}

// Trade Execution Simulation
function executeTrade() {
    const cryptoSelect = document.getElementById('crypto-select');
    const amountInput = document.getElementById('trade-amount');
    
    const crypto = cryptoSelect.value;
    const amount = amountInput.value;
    
    if (!amount || amount <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    // Simulated trade execution
    alert(`Trade executed: ${amount} of ${crypto}\nThank you for trading with CryptoTrader!`);
    
    // Reset form
    amountInput.value = '';
}

// Contact Form Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simulated form submission
    alert(`Thank you, ${name}! We'll get back to you at ${email} soon.`);
    
    // Reset form
    this.reset();
});

// Initialize price fetch and set interval
document.addEventListener('DOMContentLoaded', () => {
    fetchCryptoPrices();
    setInterval(fetchCryptoPrices, 60000); // Refresh every minute
});