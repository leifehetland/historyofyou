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
    .when('/you', {
        templateUrl: 'partials/you.html',
        controller: 'YouCtrl as youCtrl'
    })
    .when('/your-story', {
        templateUrl: 'partials/yourstory.html',
        controller: 'YourMapCtrl as yourMapCtrl'
    })
	}
]);