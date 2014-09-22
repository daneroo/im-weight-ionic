angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope,$ionicLoading,Observations) {
  $scope.obsId='Waiting for data...';
  $scope.lastValue={stamp:null, value:null};
  $scope.values=[];

  $scope.fetch = function(){
    $ionicLoading.show({
      template: 'Fetching...'
    });
    Observations.get().then(function(observations){
      console.log('Fetched:',observations);
      console.log('-',observations._id);
      $scope.obsId = observations._id;
      $scope.values = observations.values;
      $scope.lastValue = ($scope.values && $scope.values.length>0)?$scope.values[0]:'??';
    })
    .finally(function(){
      $ionicLoading.hide();
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.fetch();
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
