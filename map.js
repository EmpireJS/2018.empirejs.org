function initMap() {
    var latLng = new google.maps.LatLng(40.7686084, -73.967244);
    var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#2D91C7"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]

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

    // function addHotelMarker(title, latLng, url, map) {
    //     var marker = new google.maps.Marker({
    //         position: latLng,
    //         map: map,
    //         title: title,
    //         icon: '/img/map/hotel.png',
    //         animation: google.maps.Animation.DROP
    //     });
    //
    //     // Add Click Event
    //     google.maps.event.addListener(marker, 'click', function() {
    //         window.location = url;
    //     });
    // }

    var eventMarker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: 'Kaye Playhouse',
        icon: 'scribbles/pink-small-scribble.svg',
        animation: google.maps.Animation.DROP
    });

    // Add Click Event for location
    google.maps.event.addListener(eventMarker, 'click', function() {
        window.location = 'http://www.hunter.cuny.edu/kayeplayhouse';
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
