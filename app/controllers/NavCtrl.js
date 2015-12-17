app.controller('NavCtrl', ['Nav', '$scope', '$location',
 function(Nav, $scope, $location){
 	$scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
}])