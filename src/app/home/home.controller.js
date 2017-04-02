(function() {
    'use strict';

    /**
     * Controls all other Pages
     */
    angular.module('dashboard').controller('HomeCtrl', HomeController);

    HomeController.$inject = ['User']

    function HomeController(User) {

        var vm = this;
        console.log("Home Controller reporting for duty.");

        vm.users = User.query();

        console.log(vm.users);
    }
})();
