angular
  .module('app')
  .directive('todaysGoals', todaysGoals);

function todaysGoals () {
  return {
    scope: {}, // Encapsulate scope
    restrict: 'E', // Element
    controller: 'TodaysGoals as goals',
    templateUrl: 'Todays-Goals-Gratitude/templates/todays-goals.html'
  };
}
