
// Variables containing location data (latitude and longitude respectively).
var ulat, ulng;

// Stores the user's location (i.e. their latitude and longitude coordinates) to use in location based search & for filling latitude & longitude 
// values on the submission form via user location.
function storeCoords(position) {
	ulat = position.coords.latitude;
	ulng = position.coords.longitude;
	document.getElementById("lat").value = ulat;
	document.getElementById("lng").value = ulng;
	//alert("Success!\nLatitude: " + ulat + "\nLongitude: " + ulng); //Test if the coordinates were stored properly.
}

function locationDenied(error) {
	if (error.code == 1) {
		// Handles case where user denies website access to their location. 
		alert("CoffeeConnect was denied permission to access your location!\nAllow CoffeeConnect to access your location to use this feature.")
	}
}
// Attempts to retreive user's location. If location cannot be retreived (user denies access to location, browser
// doesn't support it, etc), will show an error message and suggest user tries a different searc method.
function searchByLocation() {
	if("geolocation" in navigator) {
		navigator.geolocation.getCurrentPosition(storeCoords, locationDenied); // Will ask user to allow the website to access their location & store lat, lng coords. 
	} else {
		alert("Could not find your location. Try another search method?"); // If the user's browser does not have navigator.geolocation. 
	}
}

function uploadLocation() {
	var checkbox = document.getElementById("locationCheckbox");

	if (checkbox.checked == true) {
		searchByLocation(); 
	} else {
		document.getElementById("lat").value = '';
		document.getElementById("lng").value = '';
	}
}

// Coordinates for the hard-coded search results. 
var starbucksCoords = {lat: 43.257762, lng: -79.919399}; 
var williamsCoords = {lat: 43.257442, lng: -79.917897};
var secondcupCoords = {lat: 43.262455, lng: -79.905087};

// Specifies content that will appear when a user clicks on a map marker. 
var starbucksContent = "<p>Starbucks on the corner of Emerson and Main</p>" + "<a href='individual_sample.html'>View location</a>";
var williamsContent = "<p>Williams Cafe across from McMaster Children's Hospital</p>" + "<a href='individual_sample.html'>View location</a>";
var secondcupContent = "<p>Second Cup in Westdale</p>" + "<a href='individual_sample.html'>View location</a>";

// Initializing function for a Google Maps instance. 
function openMap() {
	// Creates the map, sets its initial view, and connects it to the map container in the results_sample & individual_sample pages. 
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: {lat: 43.261764, lng: -79.922050},
    	zoom: 14
    });

    var starbucksInfo = new google.maps.InfoWindow({
    	content: starbucksContent
    });

    var williamsInfo = new google.maps.InfoWindow({
    	content: williamsContent
    });

    var secondcupInfo = new google.maps.InfoWindow({
    	content: secondcupContent
    });

    var marker1 = new google.maps.Marker({
   		position: starbucksCoords,
    	map: map,
    	title: 'Starbucks'
  	});

  	marker1.addListener('click', function() {
  		starbucksInfo.open(map, marker1);
  	});

  	var marker2 = new google.maps.Marker({
  		position: williamsCoords,
  		map: map,
  		title: 'Williams Cafe'
  	});

  	marker2.addListener('click', function() {
  		williamsInfo.open(map, marker2);
  	});

  	var marker3 = new google.maps.Marker({
  		position: secondcupCoords,
  		map: map,
  		title: 'Second Cup'
  	})

  	marker3.addListener('click', function() {
  		secondcupInfo.open(map, marker3);
  	});
}

function removeMarker() {
	marker1.setMap(null);
	marker3.setMap(null);
}

/* 
   Basic form validation - only checks that something has been entered in each field. However, input type 'email' will automatically check 
   that a valid email format has been used in the email field. 

   To make this better, I would add checks to make sure that the email was made up of valid characters only to prevent any malicious attack, 
   that the password has a symbol and number in it and was at least 8 characters long, (You know, the arbitrary "this is what makes a strong password" rules), 
   and that the first name is only made up of letters (And maybe dashes, apostrophes, and spaces for folks with names that follow that convention). 

   */
function validateRegistration() {
	// Stores the user's input. 
	var email = document.forms["signUp"]["email"].value;
	var password = document.forms["signUp"]["password"].value;
	var fname = document.forms["signUp"]["fname"].value;

	// Checks if email field is empty. 
	if (email == '') {
		alert("Please enter a valid email and check to make sure all other required fields are filled out.");
		return false;
	// Checks if password field is empty. 
	} else if (password == '') {
		alert("Please enter a valid password and check to make sure all other required fields are filled out.");
		return false;
	// Checks if first name field is empty. 
	} else if (fname == '') {
		alert("Please enter your first name and check to make sure all other required fields are filled out.");
		return false;
	} 
}