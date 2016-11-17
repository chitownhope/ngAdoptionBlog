console.log("best adoption blog ever")

angular.module('adoptionBlog', [
    'ngRoute'
]).config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false //good for anthing (E9+
    })

    $routeProvider
        .when('/', {
            templateUrl: 'ngViews/home.html',
            controller: 'PostsCtrl'
        })
        .when('/create', {
            templateUrl: 'ngViews/create.html',
            controller: 'AdminCreateCtrl'
        })
        .when('/admin', {
            templateUrl: 'ngViews/admin.html',
            controller:'AdminDeleteCtrl'
        });
        //add cats and dog controller and then add their respective views

        $routeProvider.otherwise({redirectTo: '/'});
    }
]);
