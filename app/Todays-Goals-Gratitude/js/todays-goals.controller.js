angular
  .module('app')
  .controller('TodaysGoals', TodaysGoals);

function TodaysGoals() {
  var ctrl = this;
  ctrl.newGoal = '';
  ctrl.goalList = [];
  
  ctrl.addGoal = function () {
    if (!ctrl.newGoal || ctrl.goalList.filter( function (item) {
      return item === ctrl.newGoal;
    }).length > 0) {
      ctrl.newGoal = '';
      return;
    }
    ctrl.goalList.push(ctrl.newGoal);
    console.log(`Goal ${ctrl.newGoal} added...`);
    ctrl.newGoal = '';
  }
}
