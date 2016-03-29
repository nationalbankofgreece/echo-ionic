angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
  // Set up POST - Create resource request
  $('#post-create-resource-button').on('click', function () {
    var initialText = $(this).text();

    $(this).attr('disabled', 'disabeld').text('POSTing request');

    var body = {
      'vehicleType': 'train',
      'maxSpeed': 125,
      'avgSpeed': 90,
      'speedUnit': 'mph'
    };

    $.ajax({
      url: 'https://nbgdemo.azure-api.net/echo/resource',
      beforeSend: function(xhrObj){
        // Set request headers for authentication and content type
        xhrObj.setRequestHeader('Content-Type','application/json');
        xhrObj.setRequestHeader(
          'Ocp-Apim-Subscription-Key', localStorage.getItem('settings.primaryKey')
        );
      },
      type: 'POST',
      // Request body
      data: body,
    })
    .done(function(data) {
      $(this).text(initialText).removeAttr('disabled');
      alert('success');
    })
    .fail(function(res) {
      $(this).text(initialText).removeAttr('disabled');
      alert('error');
    });
  });
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
