function initMap() {

    // var map = new google.maps.Map(document.getElementById('map-container'));

    // var infowindow = new google.maps.InfoWindow();
    var service = new google.maps.places.PlacesService(document.createElement('div'));

    service.getDetails({
        placeId: 'ChIJN6x96hadj4AR7ZVrIZVCt4s'
    }, function (place, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            // $('#business-hours').html("<strong>Mon-Sat</strong><br>"
            //     + place.opening_hours.weekday_text[0] +
            //     "<br><strong>Sun</strong><br>" + "Closed" + "<br>");

            // var marker = new google.maps.Marker({
            //     map: map,
            //     position: place.geometry.location
            // });
            // map.setCenter(place.geometry.location);
            // google.maps.event.addListener(marker, 'click', function () {
            //     infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
            //         'Place ID: ' + place.place_id + '<br>' +
            //         place.formatted_address + '</div>' + '<br>' +
            //         place.opening_hours.weekday_text[0] + '<br>' +
            //         place.opening_hours.weekday_text[1] + '<br>' +
            //         place.opening_hours.weekday_text[2] + '<br>' +
            //         place.opening_hours.weekday_text[3] + '<br>' +
            //         place.opening_hours.weekday_text[4] + '<br>' +
            //         place.opening_hours.weekday_text[5] + '<br>' +
            //         place.opening_hours.weekday_text[6] + '<br>');
            //     infowindow.open(map, this);
            // });
        }
    });


    // Create a new StyledMapType object, passing it an array of styles,
    // and the name to be displayed on the map type control.
    // var styledMapType = new google.maps.StyledMapType(
    //     [
    //         {
    //             "featureType": "administrative.locality",
    //             "elementType": "all",
    //             "stylers": [
    //                 {
    //                     "hue": "#2c2e33"
    //                 },
    //                 {
    //                     "saturation": 7
    //                 },
    //                 {
    //                     "lightness": 19
    //                 },
    //                 {
    //                     "visibility": "on"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "landscape",
    //             "elementType": "all",
    //             "stylers": [
    //                 {
    //                     "hue": "#ffffff"
    //                 },
    //                 {
    //                     "saturation": -100
    //                 },
    //                 {
    //                     "lightness": 100
    //                 },
    //                 {
    //                     "visibility": "simplified"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "poi",
    //             "elementType": "all",
    //             "stylers": [
    //                 {
    //                     "hue": "#ffffff"
    //                 },
    //                 {
    //                     "saturation": -100
    //                 },
    //                 {
    //                     "lightness": 100
    //                 },
    //                 {
    //                     "visibility": "off"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "hue": "#bbc0c4"
    //                 },
    //                 {
    //                     "saturation": -93
    //                 },
    //                 {
    //                     "lightness": 31
    //                 },
    //                 {
    //                     "visibility": "simplified"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road",
    //             "elementType": "labels",
    //             "stylers": [
    //                 {
    //                     "hue": "#bbc0c4"
    //                 },
    //                 {
    //                     "saturation": -93
    //                 },
    //                 {
    //                     "lightness": 31
    //                 },
    //                 {
    //                     "visibility": "on"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.arterial",
    //             "elementType": "labels",
    //             "stylers": [
    //                 {
    //                     "hue": "#bbc0c4"
    //                 },
    //                 {
    //                     "saturation": -93
    //                 },
    //                 {
    //                     "lightness": -2
    //                 },
    //                 {
    //                     "visibility": "simplified"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "road.local",
    //             "elementType": "geometry",
    //             "stylers": [
    //                 {
    //                     "hue": "#e9ebed"
    //                 },
    //                 {
    //                     "saturation": -90
    //                 },
    //                 {
    //                     "lightness": -8
    //                 },
    //                 {
    //                     "visibility": "simplified"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "transit",
    //             "elementType": "all",
    //             "stylers": [
    //                 {
    //                     "hue": "#e9ebed"
    //                 },
    //                 {
    //                     "saturation": 10
    //                 },
    //                 {
    //                     "lightness": 69
    //                 },
    //                 {
    //                     "visibility": "on"
    //                 }
    //             ]
    //         },
    //         {
    //             "featureType": "water",
    //             "elementType": "all",
    //             "stylers": [
    //                 {
    //                     "hue": "#e9ebed"
    //                 },
    //                 {
    //                     "saturation": -78
    //                 },
    //                 {
    //                     "lightness": 67
    //                 },
    //                 {
    //                     "visibility": "simplified"
    //                 }
    //             ]
    //         }
    //     ],
    //     { name: 'Styled Map' });

    // // Create a map object, and include the MapTypeId to add
    // // to the map type control.
    // var map = new google.maps.Map(document.getElementById('map'), {
    //     center: { lat: 37.580381, lng: -122.332892 },
    //     zoom: 16,
    //     mapTypeControlOptions: {
    //         mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
    //             'styled_map']
    //     }

    // });


    // //Associate the styled map with the MapTypeId and set it to display.
    // map.mapTypes.set('styled_map', styledMapType);
    // map.setMapTypeId('styled_map');
}