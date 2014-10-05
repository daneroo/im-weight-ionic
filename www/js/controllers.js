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
    data: [[new Date(+new Date()-3600000),100],[new Date(),100]],
    options: {
      // let's take the title out! (style in css anyways)
      // title: '6 months',
      // titleHeight: 32,

      // thinner left axis label margin
      yAxisLabelWidth: 25,
      digitsAfterDecimal:1,

      // graph line
      strokeWidth: 2,
      colors: ['rgb(128,128,255)'],

      // Legend
      // legend:'always',
      // labels: ['x', 'W'],
      // showLabelsOnHighlight: false,


      // showRoller: true, // allows controlling roller
      // rollPeriod: 10, // ok depends on scale - 10 fo all time is good...


      // for touch stuff later...
      //interactionModel: interactionModel
      // interactionModel: {},
      // date Window: [now - desiredDays * day, now],
    }
  };

  Observations.get().then(function(observations){
    // console.log(observations);
    var data = [];
    // observations.values.slice(0,100).forEach(function(o){
    observations.values.forEach(function(o){
      data.push([new Date(o.stamp),o.value/1000]);
    });
    data = data.reverse();
    $scope.graph.data=data;
  });

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
  $scope.sunken=true;
  $scope.click=function(){
    $scope.sunken = !$scope.sunken;
  }
});
