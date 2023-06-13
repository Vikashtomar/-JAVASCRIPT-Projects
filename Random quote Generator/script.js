// Array of quotes
const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. - Albert Einstein",
    "The best way to predict the future is to create it. - Peter Drucker",
    "It does not matter how slowly you go as long as you do not stop. - Confucius"
  ];
  
  // Function to generate a random quote
  function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-display").textContent = quote;
  }
  
  // Event listener for the "New Quote" button
  document.getElementById("new-quote-btn").addEventListener("click", generateRandomQuote);
  
  // Initial quote generation
  generateRandomQuote();
  