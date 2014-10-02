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
    data: [[new Date(+new Date()-3600000),101],[new Date(),100]],
    options: {
      // title:'Obserama',
      labels: ["x", "W"],

      title: '6 months',
      titleHeight: 32,
      logscale: false,

      //showRoller: true, // allows controlling roller
      // rollPeriod: 30, // ok depends on scale

      //rollPeriod: 3,
      // errorBars: true, requires sigma column

      // gridLineColor: '#FF0000',
      // highlightCircleSize: 10,
      strokeWidth: 2,

      axisLabelColor: 'gray',

      colors: ['rgb(128,128,255)'],
      // axis:{
      //   'weight':{axisLabelWidth:20}
      // },
      // axisLineColor: 'blue',
      // drawXGrid: false,
      // drawYGrid: false,
      // axisLabelWidth:100, // doesn't seem to do anything
      yAxisLabelWidth: 25,

      showLabelsOnHighlight: false,
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
});
