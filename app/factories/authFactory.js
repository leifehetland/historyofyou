app.factory('Auth', ['$firebaseAuth',
	function($firebaseAuth) {
		var ref = new Firebase('https://historyofyou.firebaseio.com/');
		return $firebaseAuth(ref);
	}
	]);