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
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeCtrl',
                        controllerAs: 'homeCtrl'
                    },
                    'header@home': {
                        templateUrl: 'templates/header.html'
                    },
                    'leftpanel@home': {
                        templateUrl: 'app/home/leftpanel/leftpanel.html',
                        controller: 'LeftpanelCtrl',
                        controllerAs: 'leftpanelCtrl'
                    },
                    '@home': {
                        templateUrl: 'templates/welcome.html'
                    },
                    'footer@home': {
                        templateUrl: 'templates/footer.html'
                    }
                }
            })
            .state('home.admin', {
                url: 'admin',
                templateUrl: 'templates/administration.html'
            })
            .state('home.dashboard', {
                url: 'dashboard',
                templateUrl: 'templates/dashboard.html'
            });
    }

})();
