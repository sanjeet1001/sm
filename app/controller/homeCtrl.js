app.controller('homeCtrl',function($scope,$http) {
    $scope.userdata=[];
    $scope.getData = function(){
        $http({
            method: 'GET',
            url: '/about'
            }).then(function successF(response) {
                $scope.userdata = response.data;
            }, function errorF(response) {
                
            });
    }
})