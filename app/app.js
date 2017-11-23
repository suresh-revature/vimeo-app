var app = angular.module('VimeoApp', [ 'ngRoute' ]);

app.config([ '$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider.when('/vimeo', {
		controller : 'VimeoController',
		templateUrl : 'app/views/vimeo.html'
	}).otherwise({
		redirectTo : 'vimeo'
	});
	
	$locationProvider.html5Mode(true).hashPrefix('!');
} ]);

app.filter('trusted', [ '$sce', '$log', function($sce, $log) {
	return function(url) {
		$log.info('Trusting the URL: ', url, $sce.trustAsResourceUrl(url));
		return $sce.trustAsResourceUrl(url);
	};
} ]);