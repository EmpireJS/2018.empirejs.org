function initMap() {
    var latLng = new google.maps.LatLng(40.791885, -73.952581);
    var styles = [
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            { lightness: 100 },
            { visibility: "simplified" }
          ]
        },{
          featureType: "road.local",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        },
        {
          featureType: 'water',
          elementType: 'geometry.fill',
          stylers: [{color: '#f8e71c'}]
        },
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {name: "Styled Map"});

    var mapOptions = {
        zoom: 15,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        disableDoubleClickZoom: false,
        scrollwheel: false,
        draggable: false,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    function addHotelMarker(title, latLng, url, map) {
        var marker = new google.maps.Marker({
            position: latLng,
            map: map,
            title: title,
            icon: '/img/map/hotel.png',
            animation: google.maps.Animation.DROP
        });

        // Add Click Event
        google.maps.event.addListener(marker, 'click', function() {
            window.location = url;
        });
    }

    var eventMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: "The New York Academy of Medicine",
        icon: '/img/map/star.png',
        animation: google.maps.Animation.DROP
    });

    // Add Click Event for location
    google.maps.event.addListener(eventMarker, 'click', function() {
        window.location = 'https://nyam.org/';
    });

    // // Add Hotels
    // addHotelMarker(
    //     "Hyatt House",
    //     new google.maps.LatLng(32.956958, -96.828211),
    //     "http://addison.house.hyatt.com/en/hotel/home.html",
    //     map
    // );

    // addHotelMarker(
    //     "Radisson Hotel Dallas North",
    //     new google.maps.LatLng(32.958204, -96.826842),
    //     "http://hotels.radisson.com/tx/addison/hotels_addison_tx_usadntx.html",
    //     map
    // );

    // addHotelMarker(
    //     "Spring Hill Suites",
    //     new google.maps.LatLng(32.956949, -96.827179),
    //     "http://www.marriott.com/hotels/travel/dalsh-springhill-suites-dallas-addison-quorum-drive/",
    //     map
    // );
}
