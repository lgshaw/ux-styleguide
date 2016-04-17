    var app = angular.module('sk.styleguide', ['ngRoute']);

// configure our routes
    app.config(function($routeProvider, $locationProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'partials/home.html',
                controller  : 'mainController'
            })
            
            // route for the how-it-works page
            .when('/how-it-works', {
                templateUrl : '/partials/how-it-works.html',
                controller  : 'howItWorksController',
            })
            
            // route for the principles page
            .when('/principles', {
                templateUrl : '/partials/principles.html',
                controller  : 'principlesController'
            })
            
            // route for the base-styles page
            .when('/base-styles', {
                templateUrl : '/partials/base-styles.html',
                controller  : 'baseStylesController'
            })
            
            // route for the patterns page
            .when('/patterns', {
                templateUrl : '/partials/patterns.html',
                controller  : 'patternsController'
            })
            .otherwise({redirectTo:'/'});
            
            $locationProvider.html5Mode(true);
                 
    });
    
     app.controller('mainController',function($rootScope, $scope, $http){    
        $rootScope.partialTitle = "SEEK Design";
    });
    
    app.controller('HeaderController',function($scope, $location) 
    { 
        $scope.isActive = function (viewLocation) { 
            return viewLocation === $location.path();
        };
    });
    
    app.controller('howItWorksController',function($rootScope, $scope, $http){    
        $rootScope.partialTitle = "How it works";
    });
    
     app.controller('principlesController',function($rootScope, $scope, $http){    
        $rootScope.partialTitle = "Principles";
    });
    
     app.controller('baseStylesController',function($rootScope, $scope, $http){    
        $rootScope.partialTitle = "Base styles";
    });
    
     app.controller('patternsController',function($rootScope, $scope, $http){    
        $rootScope.partialTitle = "Patterns";
    });