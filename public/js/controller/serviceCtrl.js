app.controller('serviceCtrl', function($scope, $routeParams, $firebaseObject,
  mainService) {

  var ref = new Firebase(
    'https://textsupport-janice.firebaseio.com/numbers');

  var syncObject = $firebaseObject(ref);

  syncObject.$bindTo($scope, "numbers");


});
