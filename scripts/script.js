window.onload = function() {

        //store array of quotes
        window.quotesArr;

        //callback
	window.displayRandomQuote = function (quotes) {
	    quotesArr = quotes;

	    //generate random number between 0 and 39 
            window.quoteIndex =  Math.floor(Math.random() * (40)); 

	    window.randomQuote = quotesArr[quoteIndex];


            console.log(quoteIndex);
            console.log(quotesArr);

	    console.log(randomQuote.content);
	};

        //create script to fetch 40 quotes
	var scriptQuote = document.createElement("script");
	scriptQuote.id = "getQuote";
	scriptQuote.src = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=40&_jsonp=displayRandomQuote";

	document.body.appendChild(scriptQuote);
	document.getElementById(scriptQuote.id).remove();

      };

