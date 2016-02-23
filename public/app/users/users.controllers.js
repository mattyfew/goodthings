var app = angular.module('users.controllers', []);

app.controller('ProfileCtrl', function($scope, $http, $location, SecurityService) {
  $scope.logout = function()
  {
    SecurityService.logout(function(response)
    {
      console.log(response);
      $location.url('/');
    })
  }
})

app.controller('LoginCtrl', function($scope, $http, $location, SecurityService)
{
  $scope.login = function(user)
  {
    console.log(user);
    SecurityService.login(user, function(result)
    {
      console.log(result);
      $location.url('/profile');
    });
  }
});

app.controller('NavCtrl', function($scope, $location, SecurityService){
  $scope.login = function()
  {
      SecurityService.logout(function(response) {
        console.log(response);
        $location.url('/');
      });
  }
})
