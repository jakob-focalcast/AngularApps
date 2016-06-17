var calculatorApp = angular.module('calculatorApp', []);

angular.module('calculatorApp').directive('calculatorDirective', CalculatorDirective);
CalculatorDirective.$inject = [
  '$log'
];

function CalculatorDirective (
  $log
){
  return {
    restrict : 'E',
    templateUrl : 'calculatorTemplate.html',
    controller : 'CalculatorController',
    controllerAs : 'calcCtrl',
    bindToController : true,
  }
}

angular.module('calculatorApp').controller('CalculatorController', CalculatorController);
CalculatorController.$inject = [
  '$log',
  'NumberService'
];
function CalculatorController($log, NumberService){
  var self = this;
  this.num1 = 0;
  this.num2 = 0;
  this.add = NumberService.add;
}

angular.module('calculatorApp').service('NumberService', NumberService);

function NumberService(){
  var sums = [];
  var add = function(num1, num2){
    sums.push(num1+num2);
    if(sums.length>5){
      sums.splice(0,1);
    }
  }
  var getSums = function(){
    return sums;
  }

  return {
    sums : sums,
    getSums : getSums,
    add : add
  }
}
