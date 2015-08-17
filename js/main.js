var app = angular.module('ibApp', [])
  .controller('MainCtrl', function($scope, $http, $filter) {
    var orderBy = $filter('orderBy');
    $http({
      method: 'JSONP',
      url: 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=a5e95177da353f58113fd60296e1d250&user_id=132365033@N08&format=json&nojsoncallback=1',
      params: {
        'format': 'json',
        'jsoncallback': 'JSON_CALLBACK'
      }
    }).success(function(data) {
      $scope.data = data.photos;
      $scope.loading = false;
    })
  })
  .directive('flickrItem', function() {
    return {
      templateUrl: 'js/item-template.html'
    };
  })
