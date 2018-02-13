"use strict";
window.onload = function () {
    // Animate when a new quote is requested
    var main = document.getElementById("main");
    var quoteButton = document.getElementById("quoteButton");
    // When new quote button is clicked
    quoteButton.addEventListener("click", function(){
	// Make quote fade out right
	main.setAttribute("class", "animated fadeOutRightBig");
	// And make quote fade in left after 500 ms (after getQuotes has already been called)
	setTimeout(function(){
	    main.setAttribute("class", "animated fadeInLeftBig");
	}, 500);
    });

    getQuotes();
};

// Create, append (and remove) script element to get quotes (JSONP)
function getQuotes() {
    var scriptQuote = document.createElement("script");
    scriptQuote.id = "getQuotes";
    scriptQuote.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=displayRandomQuote";
    document.body.appendChild(scriptQuote);
    // Remove script element
    document.getElementById(scriptQuote.id).remove();
};

// Get and array of 40 quotes and display one
function displayRandomQuote (quotes) {
    // Generate random number between 0 and 39 
    var quoteIndex =  Math.floor(Math.random() * 40); 
    // Get a random quote object from the array
    var randomQuote = quotes[quoteIndex];

    // Put the quote text into #quote (replacing loading circle)
    var quoteElementNode = document.getElementById("quote");
    // Use innerHTML since we get html text
    quoteElementNode.innerHTML = randomQuote.content; 
    
    // Put the quote author into #author 
    var authorElementNode = document.getElementById("author");
    // Use innerHTML since we get html text
    authorElementNode.innerHTML = randomQuote.title;

    setTwitterButton();
};

// Put right link in twitter button
function setTwitterButton () {
    var text = document.getElementById("quote").firstChild.firstChild.nodeValue;

    var buttonURL = "https://www.twitter.com/intent/tweet?text=" + encodeURI(text);

    var twitterButton = document.getElementById("twitterLink");
    twitterButton.setAttribute("href", buttonURL);
};


