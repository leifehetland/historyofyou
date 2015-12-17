app.controller('AuthCtrl', ['Auth', '$firebaseAuth', '$location', 
	function(Auth, $firebaseAuth, $location){

		var user = this;
		var userId;

		user.register = function() {
			Auth. $createUser({
				email: user.email,
				password: user.password
			}).then(function(userData) {
				console.log('User created with uid:', userData.uid);
				$location.path('/');
			}).catch(function(error) {
				user.error = error;
				console.log('error', error);
			});
		};

		user.login = function() {
			Auth.$authWithPassword({
				email: user.email,
				password: user.password
			}).then(function(authData, loggedInUser) {
				console.log('Logged in as:', authData.uid);
				userId = authData.password.email;
				console.log(userId, userId);
				$location.path('/your-story');
			}).catch(function(error) {
				user.error = error;
				console.log('Authentication failed:', error);
			});
		};

		user.logout = function() {
			console.log('logging out');
				Auth.$unauth();
				$location.path('/');
		};
		user.removeUser = function() {
			Auth.$removeUser({
				email: user.email,
				password: self.password
			}).then(function() {
				user.message = "User removed!"
				console.log(user.message);
			}).catch(function(error) {
				user.error = error;
			});
		}
}]);