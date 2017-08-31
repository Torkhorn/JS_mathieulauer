app.controller("profil.ctrl",['$scope','$routeParams', '$http', 'eleveFactory', function($scope,$routeParams, $http, eleveFactory){
	$scope.test = "hello";
	console.log($routeParams);

	$scope.monProfil = eleveFactory.get({userId : $routeParams.id});
	// $http({
	// 	method : 'GET',
	// 	url : 'http://localhost:3000/api/liste/' + $routeParams.id
	// }).then(function success(response){
	// 	console.log(response);
	// 	$scope.monProfil = response.data;
	// }, function error(response){
	// 	console.log(response);

	// });

}]);