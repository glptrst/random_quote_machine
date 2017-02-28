window.onload = function () {
    //animate when a new quote is requested
    var main = document.getElementById("main");
    var quoteButton = document.getElementById("quoteButton"); 
    quoteButton.addEventListener("click", function(){
	main.setAttribute("class", "animated fadeOutRightBig");
	setTimeout(function(){
	    main.setAttribute("class", "animated fadeInLeftBig");
	}, 500)
    });

    getQuotes();
}

// get and array of 40 quotes and display one
var displayRandomQuote = function (quotes) {
    //generate random number between 0 and 39 
    var quoteIndex =  Math.floor(Math.random() * 40); 
    //get a random quote object from the array
    var randomQuote = quotes[quoteIndex];
    //put the quote text into #quote
    var quoteElementNode = document.getElementById("quote");
    quoteElementNode.innerHTML = randomQuote.content;
    //put the quote author into #author 
    var authorElementNode = document.getElementById("author");
    authorElementNode.innerHTML = randomQuote.title;
};

var manageQuotes = function(quotes) {
    displayRandomQuote(quotes); 

    setTwitterButton();
}

//create script element to get quotes (JSONP)
var getQuotes = function() {
    var scriptQuote = document.createElement("script");
    scriptQuote.id = "getQuotes";
    scriptQuote.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=manageQuotes";
    document.body.appendChild(scriptQuote);
    //remove script element
    document.getElementById(scriptQuote.id).remove();
};

//put right link in twitter button
var setTwitterButton = function () {
    var text = document.getElementById("quote").firstChild.firstChild.nodeValue;

    var buttonURL = "https://www.twitter.com/intent/tweet?text=" + encodeURI(text);

    var twitterButton = document.getElementById("twitterLink");
    twitterButton.setAttribute("href", buttonURL);
};
