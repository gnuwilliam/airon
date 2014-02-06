var Airon = angular.module('Airon', []);

function routeConfig($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home.html'
    })
    .when('/cursos', {
      templateUrl: '/templates/courses.html'
    })
    .when('/screencasts', {
      templateUrl: '/templates/screencasts.html'
    })
    .when('/sobre', {
      templateUrl: '/templates/sobre.html'
    })
    .when('/contato', {
      templateUrl: '/templates/contato.html'
    })
    .when('/404', {
    	templateUrl: '/templates/404.html'
    })
    .otherwise({ redirectTo: '/404' });
}

Airon.config(routeConfig);