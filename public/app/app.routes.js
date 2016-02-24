'use strict';

angular.module('app.routes', ['ui.router'])

//config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

.config(function($locationProvider, $stateProvider, $urlRouterProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			abstract: true,
			templateUrl: 'app/home.html',
			controller: 'MainCtrl'
		})

		.state('profile', {
			url: '/profile',
			templateUrl: 'app/views/profile.html',
			controller: 'ProfileCtrl'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'app/views/login.html',
			controller: 'LoginCtrl'
		});

		$urlRouterProvider.otherwise('/');
});
