app.factory('userFactory', ['$firebaseArray', '$firebaseObject', '$route', 
	function($firebaseArray, $firebaseObject, $route) { 
	var storiesArray;	
	var loggedInUser, ref;
	
	return {

		setUser: function(authData) {
			loggedInUser = authData;
			console.log('loggedInUser', loggedInUser);
			ref = new Firebase('https://historyofyou.firebaseio.com/' + loggedInUser.uid + '/stories/');
			storiesArray = $firebaseArray(ref);
			console.log('ref', ref);
			return storiesArray;
		}
	};
}]);