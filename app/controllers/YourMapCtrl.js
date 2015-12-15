app.controller('YourMapCtrl', ['Auth', '$firebaseAuth', "$firebaseArray", '$location', 
  function(Auth, $firebaseAuth, $firebaseArray, $location){

    var authdataUID = Auth.$getAuth().uid;

    var myPlace = {};


     this.initAutocomplete = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:86.7833, lng:36.1667},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }
    });

     myPlace = {
        uid: authdataUID,
        name: places[0].name,
        placeID: places[0].place_id,
        lat: places[0].geometry.location.lat(),
        lng: places[0].geometry.location.lng(),
        // description: this.descriptionObj.description
      };


        console.log("myPlace", myPlace);

    map.fitBounds(bounds);
  });
};

  this.saveLocation = function() {

      var useruid = Auth.$getAuth().uid;
      var newRef = new Firebase("https://historyofyou.firebaseio.com/stories");
      var locations = $firebaseArray(newRef);
      console.log("myPlace", myPlace);

      myPlace.descrption = this.descriptionObj.description;

      console.log("Auth", Auth);
      console.log("newRef", newRef);
      console.log("useruid", useruid);

      locations.$add(myPlace);

      console.log("newRef", newRef);
      // myPlace = {};

    };

 google.maps.event.addDomListener(window, 'load', this.initAutocomplete); 

}]);