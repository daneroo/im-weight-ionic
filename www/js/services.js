angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
})
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
