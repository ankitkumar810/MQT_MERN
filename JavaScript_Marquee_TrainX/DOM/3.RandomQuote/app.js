const quotes = [
    "Success is not final, failure is not fatal: it is the courage to continue that counts. – Winston Churchill",
    "The future depends on what you do today. – Mahatma Gandhi",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Do what you can, with what you have, where you are. – Theodore Roosevelt",
    "Dream big and dare to fail. – Norman Vaughan",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Stay hungry, stay foolish. – Steve Jobs",
    "It always seems impossible until it's done. – Nelson Mandela",
    "Your time is limited, so don't waste it living someone else's life. – Steve Jobs",
    "The best way to predict the future is to create it. – Peter Drucker"
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}

// Display a quote when the page loads
generateQuote();