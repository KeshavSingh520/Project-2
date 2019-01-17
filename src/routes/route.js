var demo=angular.module('Project2');

demo.config(function($routeProvider){

    $routeProvider.CasInSensitiveMatch=true;
        $routeProvider

        .when('/home',{
            templateUrl:"templates/home.html",
            controller:"homeController",
            controllerAs:"HC",
            
        })
        
        .when('/filtertable',{
            templateUrl:"templates/filtertable.html",
            controller: "FilterTableController",
            controllerAs:"FT"
        })

        .when('/profile',{
            templateUrl:"templates/profile.html",
            controller: "ProfileController"
        })

        .when('/contact us',{
            templateUrl:"templates/contact us.html",
            controller: "ContactController"
        })

        .when('/thanks',{
            templateUrl:"templates/thanks.html",
            controller: "homeController"
        })

        .when('/weather',{
            templateUrl:"templates/weather.html",
            controller: "weatherController"
        })

      

        .otherwise('/home',{
            templateUrl:"templates/home.html",
            controller: "homeController"
        })
});

