//var calculatorApp = angular.module('calculatorApp', []);

angular.module('calculatorApp').directive('listDirective', ListDirective);
ListDirective.$inject = [
  '$log'
]
function ListDirective(
  $log
){
  return{
    restrict : 'E',
    templateUrl : 'listTemplate.html',
    controller : 'ListController',
    controllerAs : 'listCtrl',
    bindToController : true,
  }
}

angular.module('calculatorApp').controller('ListController', ListController);
ListController.$inject = [
  '$log',
  'NumberService'
];
function ListController($log, NumberService){
  var self = this;
  this.sums = NumberService.sums;
}
