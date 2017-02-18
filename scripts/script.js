//get a quote when page loads 
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
