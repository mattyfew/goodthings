var app = angular.module('users.services', [])

app.factory('SecurityService', function($http, $location, $rootScope) {
  var login = function(user, callback)  {
    $http.post('/login', user)
    .success(function(user) {
      $rootScope.currentUser = user;
      callback(user);
    });
  }
  var logout = function(callback) {

    $http.post('/logout')
    .success(function() {
      $rootScope.currentUser = null;
      callback();
    })
  }
  return {

  }
})
