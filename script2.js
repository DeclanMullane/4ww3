var williamsCoords = {lat: 43.257442, lng: -79.917897};
var williamsContent = "<p>Williams Cafe across from McMaster Children's Hospital</p>" + "<a href='individual_sample.html'>View location</a>";

function initMap() {
	// Creates the map, sets its initial view, and connects it to the map container in the results_sample & individual_sample pages. 
    var map = new google.maps.Map(document.getElementById('cafeLocation'), {
    	center: {lat: 43.261764, lng: -79.922050},
    	zoom: 14
    });

    var williamsInfo = new google.maps.InfoWindow({
    	content: williamsContent
    });

	var marker2 = new google.maps.Marker({
  		position: williamsCoords,
  		map: map,
  		title: 'Williams Cafe'
  	});

  	marker2.addListener('click', function() {
  		williamsInfo.open(map, marker2);
  	});

}