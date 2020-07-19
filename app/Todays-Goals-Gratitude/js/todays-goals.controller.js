angular
  .module('app')
  .controller('TodaysGoals', TodaysGoals);

function TodaysGoals() {
  var ctrl = this;
  ctrl.message = 'Hi there, how are things?';
}
