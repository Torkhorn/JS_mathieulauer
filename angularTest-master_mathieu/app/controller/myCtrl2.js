app.controller("myCtrl2", function($scope, $http, Liste, eleveFactory) {
    // $scope.monTableau = [{
    //     nom : "casagrande", prenom:"leo"
    // },{
    //     nom : "vador", prenom:"dark"
    // }];

    // $http({
    //     method : 'GET',
    //     url : 'http://localhost:3000/api/liste'
    // }).then(function successsCallback(response){
    //     console.log(response);
    //     $scope.maListe = response.data;
    // }, function errorCallback(response){
    //     console.log(response);
    // });

    $scope.maListe = Liste;
    console.log(Liste);
    console.log($scope.maListe);

    $scope.deleteEleve = function(eleve) {
        console.log(eleve);
        eleveFactory.delete({userId:eleve._id});
    }
    
});