app.controller("myCtrl", function($scope, $rootScope) {
	$rootScope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    $scope.person = {};

    
    $scope.submitForm = function(){
    	$rootScope.monTableau.push($scope.person);
    	$scope.person = {};
    };
});