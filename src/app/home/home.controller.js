(function() {
    'use strict';

    /**
     * Controls all other Pages
     */
    angular.module('dashboard').controller('HomeCtrl', HomeController);


    function HomeController() {

        var vm = this;
        console.log("Home Controller reporting for duty.");
    }

})();
