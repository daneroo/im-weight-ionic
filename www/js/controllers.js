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

      // truncate for now...
      $scope.values = observations.values.slice(0,100);

      $scope.lastValue = ($scope.values && $scope.values.length>0)?$scope.values[0]:'??';
    })
    .finally(function(){
      $ionicLoading.hide();
      $scope.$broadcast('scroll.refreshComplete');
    });
  }

  $scope.fetch();
})

.controller('FriendsCtrl', function($scope,Observations) {

  $scope.graph = {
    data: [],
    options: {
      // title:'Obserama',
      labels: ["x", "W"]
    }
  };

  Observations.get().then(function(observations){
    // console.log(observations);
    var data = [];
    observations.values.slice(0,30).forEach(function(o){
      data.push([new Date(o.stamp),o.value/1000]);
    });
    $scope.graph.data=data;
  });

  var base_time = Date.parse("2014/07/01");
  var num = 24 * 0.25 * 365;
  for (var i = 0; i < num; i++) {
    $scope.graph.data.push([new Date(base_time + i * 3600 * 1000),
      // i + 50 * (i % 60), // line
      i * (num - i) * 4.0 / num // parabola
    ]);
  }

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
