const quotes = [
    {
        quote: "Impossible is nothing.",
        author: "adidas",
    },
    {
        quote: "Impossible is a word to be found only in the dictionary of fools.",
        author: "Napoleon Bonaparte",
    },
    {
        quote: "Veni, vidi, vici.",
        author: "Julius Caesar",
    },
    {
        quote: "There is nothing impossible to him who will try.",
        author: "Alexander the Great",
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill",
    },
    {
        quote: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "If you're afraid don't do it, if you're doing it don't be afraid.",
        author: "Cinggis Qayan",
    },
    {
        quote: "If you’re going through hell, keep going.",
        author: "Winston Churchill",
    },
    {
        quote: "We will either find a way, or make one.",
        author: "Hannibal Barca",
    },
    {
        quote:  "Change is the law of life.",
        author: "John F. Kennedy",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length )]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
