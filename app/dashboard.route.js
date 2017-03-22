(function() {
'use strict';

angular.module('dashboard').config(routeProvider);

routeProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

function routeProvider($stateProvider, $urlRouterProvider) {

  console.log('config');

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      views: {
        '': {
          templateUrl: 'app/home/home.html'
        },
        'header@home': {
          templateUrl: 'templates/header.html'
        },
        'body@home': {
          controller: 'PageCtrl',
          templateUrl: 'templates/body.html'
        },
        'footer@home': {
          templateUrl: 'templates/footer.html'
        }
      }
    });
}

})();
