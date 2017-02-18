//get a quote when page loads for the first time
window.onload = function () {
    getQuotes();
}

//callback
var displayRandomQuote = function (quotes) {
    //generate random number between 0 and 39 
    window.quoteIndex =  Math.floor(Math.random() * (40)); 
    //get a random quote object from the array
    var randomQuote = quotes[quoteIndex];

    //put the quote text into #quote
    var quoteElementNode = document.getElementById("quote");
    quoteElementNode.innerHTML = randomQuote.content;
    //put the quote author into #author 
    var authorElementNode = document.getElementById("author");
    authorElementNode.innerHTML = randomQuote.title;

    setTwitterButton();
};

//create script element to get quotes (JSONP)
var getQuotes = function() {
    var scriptQuote = document.createElement("script");
    scriptQuote.id = "getQuotes";
    scriptQuote.src = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=displayRandomQuote";
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

