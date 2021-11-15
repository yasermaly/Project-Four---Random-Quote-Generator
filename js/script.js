/************************************************
Treehouse Techdegree:
Project 4 - Random Quote Generator
*************************************************/

/* Project Notes: 
  // I am going for an 'Exceeds Expectations' grade! :)
  // Additional quote object properties (year & tags) added to every object.
  // Randomized background colors added.
  // New Google font in CSS added.
  // Auto-refreshed quotes added.
*/

/*** 
 * Creating an Array of five objects storing each of its quote properties & values.
***/

const quotes = [
  { 
    quote: `Correction does much, but encouragement does more.`, 
    source: `- Johan Wolfgang Von Goethe`,
    citation: `Götz von Berlichingen`,
    year: `1773`,
    tags: 'Motivation'
  },
  { 
    quote: `Always turn a negative situation into a positive situation.`, 
    source: `- Michael Jordan`,
    citation: `TV interview`,
    year: `1995`,
    tags: 'Sports'
   },
  { 
    quote: `In order to carry a positive action we must develop here a positive vision.`, 
    source: `- 14th Dalai Lama`,
    citation: `Speech at Sissu, Lahau`,
    year: `2014`,
    tags: `Spiritual`
  },
  { 
    quote: `Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.`,
    source: `- Roy T. Bennett`,
    citation: `The Light in the Heart`,
    year: `2020`,
    tags: `Inspirational`
  },
  { 
    quote: `Science is not only a disciple of reason but, also, one of romance and passion.`, 
    source: `- Stephen Hawking`,
    citation: `On the Shoulders of Giants`,
    year: `2002`,
    tags: `Science`
  },
  ]

/***
 * Creating the `getRandomQuote` function to return 
 * a random quote object from the quotes array.
***/

function getRandomQuote() {
  let random = Math.floor(Math.random() * quotes.length); 
  
  return quotes[random];
}  

/***
 * Exceeds expectations requirement: creating a function
 * that updates the background color to a random color.
 * (I got help on this part at StackOverflow.com)
 ***/

function randomColorGenerator() {
	let red = Math.floor(Math.random() * 256 );
  let green = Math.floor(Math.random() * 256 );
  let blue = Math.floor(Math.random() * 256 );
	document.body.style.backgroundColor =  `rgb( ${red}, ${green}, ${blue} )`;
}

/***
 * Creating the `printQuote` function to display
 * a new quote each time the user clicks the "Show another quote" button.
***/

function printQuote(){
  let randomQuote = getRandomQuote();
  let html = `<p class="quote">${randomQuote.quote}</p><p class="source">${randomQuote.source}`;
  if (randomQuote.citation){
    html += `<span class="citation">${randomQuote.citation}</span>`;
  } if (randomQuote.year){
    html += `<span class="year">${randomQuote.year}</span>`;
  } if (randomQuote.tags) {
    html += `<span class="tags">${randomQuote.tags}</span>`;
  }
    html += `</p>`;

  randomColorGenerator();
  document.getElementById('quote-box').innerHTML = html; 
}

/***
 * Calling the `printQuote` function to run the program.
***/

printQuote();

/***
 * Exceeds expectations requirement: 
 * Create a timing function with the setInterval() method 
 * to print a new quote to the page at regular intervals.
 * (I looked this up on StackOverflow.com and chose 10 second intervals)
 ***/

const timer = setInterval(printQuote, 10000);

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);