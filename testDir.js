angular.module('directiveLecture')
.directive('testDir', function() {
    return {
        restrict: 'E',
        templateUrl: 'testDir.html',
        scope: {
            firstName: '=',  // 2 way data binding
            lastName: '@',  // string binding
            alertName: '&' // 
        }
    };
})