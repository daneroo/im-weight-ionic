angular.module('starter.services', [])

/**
 * (CORS) requests for observations
 * returns a promise ( not HttpPromise )
 */
.factory('Observations', function($http) {
  var endpoint = 'http://im-weight.aws.af.cm';
  var url = endpoint+'/backup';
  // return a promise ($http)
  return {
    get: function() {
      return $http.get(url).then(function(response){
        return response.data;
      });
    }
  }
});
