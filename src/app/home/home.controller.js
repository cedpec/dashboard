(function() {
    'use strict';

    /**
     * Controls all other Pages
     */
    angular.module('dashboard').controller('HomeCtrl', HomeController);

    HomeController.$inject = ['userService']

    function HomeController(userService) {

        var vm = this;
        console.log("Home Controller reporting for duty.");

        userService.getAll().then(function(response) {

            vm.users = response;
        });
    }
})();
