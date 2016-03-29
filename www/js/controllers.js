angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // Hey
})

.controller('SettingsCtrl', function($scope) {
  // Set initial values
  $('#settings-primary-key').val(
    localStorage.getItem('settings.primaryKey') || ''
  );
  $('#settings-secondary-key').val(
    localStorage.getItem('settings.secondaryKey') || ''
  );

  // Set listeners to update values
  $('#settings-primary-key').on('keyup', function () {
    localStorage.setItem('settings.primaryKey', $(this).val());
  });
  $('#settings-secondary-key').on('keyup', function () {
    localStorage.setItem('settings.secondaryKey', $(this).val());
  });
});
