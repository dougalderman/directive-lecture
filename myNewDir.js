angular.module('directiveLecture')
.directive('myNewDir', function() {
    return {
        templateUrl: 'myNewDir.html',
        restrict: 'E',
        scope: {
            firstName: '='
        },
        link: function( scope, elem, attrs) {
            console.log('scope = ' + scope.firstName);
            console.log('elem = ') + console.log(elem);
            console.log('attrs = ') + console.log(attrs);
            elem.css('color', 'blue');
        },
        controller: function($scope, mainService) {
            $scope.alertName = function() {
                alert($scope.firstName)
            }
            
            $scope.getData = function() {
                $scope.myRandomArray = mainService.returnSomeData();
            }
        }
        // controller: 'mainCtrl' -- way to access controller in a separate file.
    }
});