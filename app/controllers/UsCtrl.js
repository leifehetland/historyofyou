app.controller('UsCtrl', ["$firebaseArray", '$location', '$routeParams',
    function($firebaseArray, $location, $routeParams) {
	      console.log('routeParams', $routeParams.location);
	      this.myLocation = $routeParams.location;
	      var ref = new Firebase("https://historyofyou.firebaseio.com/stories");
      	this.stories_list = $firebaseArray(ref);
      }])