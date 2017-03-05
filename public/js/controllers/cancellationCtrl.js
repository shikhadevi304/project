sampleApp.controller('cancelController', function($scope, $http, $log) {

  $scope.tagline = 'cancel tickets ';

  var getDetails = function() {
       
    $http({
      method: 'PUT',
      url: 'assign/addBooking/' + $scope.id,
      headers: {'Content-Type': 'application/json'},
      data: angular.fromJson(bookingDetailsObj)
    })
      };
    });