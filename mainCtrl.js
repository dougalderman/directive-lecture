angular.module('directiveLecture')
.controller('mainCtrl', function($scope) {
    $scope.test = 'test';
    $scope.name = 'Ryan';
    
    $scope.whatsMyName = function(firstName, lastName) {
        alert('Your name is ' + firstName + ' ' + lastName);
    }
})