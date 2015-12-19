app.controller('UsCtrl', ["$firebaseArray", '$location', '$routeParams',
    function($firebaseArray, $location, $routeParams) {
	      console.log('routeParams', $routeParams.location);
	      this.myLocation = $routeParams.location;
      }])