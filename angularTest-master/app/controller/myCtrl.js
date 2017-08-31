app.controller("myCtrl", function($scope, $rootScope) {
    $rootScope.monTableau = [{
        nom: "casagrande",
        prenom: "leo"
    }, {
        nom: "vador",
        prenom: "dark"
    }];
    // $scope.person = {};

    $scope.submitForm = function() {
        $rootScope.monTableau.push($scope.person);
        $scope.person = {};
    };
    // Simple GET request example:
    // $http({
    //     method: 'GET',
    //     url: 'http://localhost:3000/api/liste'
    // }).then(function successCallback(response) {
    //     // this callback will be called asynchronously
    //     // when the response is available
    //     console.log(response);
    // }, function errorCallback(response) {
    //     // called asynchronously if an error occurs
    //     // or server returns response with an error status.
    //     console.log(response);
    // });
});