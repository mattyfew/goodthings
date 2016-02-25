'use strict';

angular.module('app.routes', ['ui.router'])

//config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

.config(function($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
    url: '/',
    views: {
      'nav': {
        templateUrl: 'app/views/templates/nav.html',
        controller: 'NavCtrl'
      },
      'main': {
        templateUrl: 'app/views/home.html'
      },
      'footer': {
        templateUrl: 'app/views/templates/footer.html'
      }
    }
  })

  .state('profile', {
    url: '/profile',
    views: {
      'nav': {
        templateUrl: 'app/views/templates/nav.html',
        controller: 'NavCtrl'
      },
      'main': {
        templateUrl: 'app/views/profile.html',
        controller: 'ProfileCtrl'
      },
      'footer': {
        templateUrl: 'app/views/templates/footer.html'
      }
    }
  })

  .state('login', {
    url: '/login',
    views: {
      'nav': {
        templateUrl: 'app/views/templates/nav.html',
        controller: 'NavCtrl'
      },
      'main': {
        templateUrl: 'app/views/login.html',
        controller: 'LoginCtrl'
      },
      'footer': {
        templateUrl: 'app/views/templates/footer.html'
      }
    }
  })
})

;
