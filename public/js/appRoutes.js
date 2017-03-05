angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})

		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'CityController'
		})

		.when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'TheatreController'
		})

		.when('/showtime', {
			templateUrl: 'views/showtime.html',
			controller: 'ShowTimeController'
		})

		.when('/assign', {
			templateUrl: 'views/assign.html',
			controller: 'AssignController'
		})
		.when('/cancel',{
			templateUrl: 'views/cancellation.html'
		})

		.when('/sign-in',{
			templateUrl: 'views/sign-in.html'
		})


		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		});



	$locationProvider.html5Mode(true);

}]);
