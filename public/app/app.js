// MAIN ANGULAR MODULE
// ============================
'use strict';

angular.module('GoodThings', [
	'app.routes',
	'users.main'
])

.controller('MainCtrl', function($scope, $state) {
	function setCurrentView(view) {
		$scope.currentView = view;

		$state.go('login', {view: view});
	}
})
