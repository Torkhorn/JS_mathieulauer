app.controller("myCtrl2", function($scope, $http,liste, eleveFactory) {
    // $scope.monTableau = [{nom : "casagrande", prenom:"leo"},{nom : "vador", prenom:"dark"}];
    $scope.maliste = liste;
    console.log(liste);
    console.log($scope.maliste);

    $scope.deleteEleve = function(eleve){
        console.log(eleve);
        eleveFactory.delete({userId:eleve._id});
    };

});