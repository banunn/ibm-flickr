var app = angular.module('myApp', [])
  .controller('MainCtrl', function($scope, $http) {
    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1',
      params: {
        'format': 'json',
        'jsoncallback': 'JSON_CALLBACK'
      }
    }).success(function(data) {
      $scope.data = data.photos;
      console.log(data.photos);
      $scope.loading = false;
    })

    console.log($scope.loading);
  })
