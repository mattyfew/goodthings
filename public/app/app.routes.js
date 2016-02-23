'use strict';

angular.module('app.routes', ['ui.router'])

//config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

.config(function($locationProvider, $stateProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('goodthings', {
			url: '/',
			abstract: true,
			templateUrl: 'app/home.html',
			controller: 'MainCtrl'
		})

		.state('goodthings.home', {
			url: '',
			views: {
				'login@' : {
					controller: 'LoginCtrl',
					controllerAs: 'LoginCtrl',
					templateUrl: 'app/views/login.html'
				},

				'profile@' : {
					controller: 'ProfileCtrl',
					controllerAs: 'ProfileCtrl',
					templateUrl: 'app/views/profile.html'
				}
			}
		})

		$urlRouterProvider.otherwise('/');
});
