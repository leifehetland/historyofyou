var app = angular.module('HistoryOfYouApp', ['ngRoute', 'firebase']);

app.config(['$routeProvider', function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'partials/login.html',
			controller: 'AuthCtrl as authCtrl'
		})
		.when('/signup', {
        templateUrl: 'partials/signup.html',
        controller: 'AuthCtrl as authCtrl'
    })
    .when('/your-profile', {
        templateUrl: 'partials/yourprofile.html',
        controller: 'YourMapCtrl as yourMapCtrl'
    })
	}
]);