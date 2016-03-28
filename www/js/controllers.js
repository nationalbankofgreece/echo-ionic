angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
