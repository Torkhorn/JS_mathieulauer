var app = angular.module("myApp", ['ngRoute', 'ngResource']);

app.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/vue1.html',
                controller: "myCtrl"
            })

        .when("/page2", {
                templateUrl: 'app/views/vue2.html',
                controller: "myCtrl2",
                resolve: {
                    liste : function(eleveFactory){
                        // var promise = $q.defer();

                        // eleveFactory.query().$promise.then(function(data){
                        //     console.log(data);
                        //     promise.resolve(data);
                        // });
                        // return promise.promise

                        return eleveFactory.query()


                    }
                }
            })
            .when("/eleve/:id", {
                templateUrl: 'app/views/profil.html',
                controller: "profil.ctrl"
            })
            .otherwise({
                redirectTo: '/',

            });
    }
]);