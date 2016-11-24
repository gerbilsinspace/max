(function(){
	var data = {
		quotes: [
			"Microwaving a Camembert is a perfectly normal thing to do.", 
			"Pedal Power.",
			"Elsa Blue.",
			"I like cheese.",
			"Walking in the rain for 26 miles without a coat is a perfectly normal thing to do.",
			"I'm going to be late for stand up, I forgot to charge my car.",
			"Where is my driving licence.",
			"The controller is too small for my man hands.",
			"Me Like Hulk"
		],
		images: [
			"max1.png",
			"max2.png",
			"max3.png",
			"max4.png",
			"max5.png",
			"max6.png"
		]
	}

	function chooseOne(arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}

	function setupImage() {
		$('#background-image').css("backgroundImage", 'url("img/'+ chooseOne(data.images) +'")');
	}

	function setupQuote() {
		$('#quote').text(chooseOne(data.quotes));
	}

	function pad(number, length) {
	  var str = '' + number;
	  while(str.length < length) {
	    str = '0' + str;
	  }
	  return str;
	}

	function setupMovie() {
		var movieID = pad(Math.floor((Math.random() * 2155529) + 1), 7);

		$.getJSON("https://www.omdbapi.com/?i=tt"+movieID, function(movieData) {
	    $("#title").text(movieData.Title);
	    $("#link").attr("href", 'https://www.imdb.com/title/tt'+movieID+'/');
	    $("#type").text("Type: " + movieData.Type);
	    $("#year").text(movieData.Year);
	    $("#rating").text(movieData.imdbRating);
	    $("#plot").text(movieData.Plot);
	  });
	}

	function animateElements() {
		document.getElementById('quote').className = 'move';
		document.getElementById('author').className = 'move';
	}

	window.onload = function() {
		setupImage();
		setupMovie();
		setupQuote();
		animateElements();
	};
})();
