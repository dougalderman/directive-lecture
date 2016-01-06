angular.module('directiveLecture')
.service('mainService', function() {
    this.returnSomeData = function() {
        return [1, 2, 3, 4, 5];
    }
})