var calculatorApp = angular.module('calculatorApp', []);

calculatorApp.controller('CalculatorController', function CalculatorController($scope){
  $scope.num1 = 0;
  $scope.num2 = 0;
  var sums = $scope.sums = [];
  $scope.add = function(num1, num2){
    sums.push(num1+num2);
    if(sums.length>5){
      sums.splice(0,1);
    }
  }
});

//calculatorApp.controller('ListController', function ListController($scope){
//
//});
