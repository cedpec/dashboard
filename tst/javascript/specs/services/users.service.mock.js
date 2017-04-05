(function() {
    'use strict';

    angular.module('userServiceMock', []).provider('userService', userService);

    function userService() {

        this.$get = function($q) {
            return {
                getAll: function() {
                    var data = ['user1', 'user2'];
                    var deferred = $q.defer();
                    deferred.resolve(data);
                    return deferred.promise;
                }
            };
        };
    }
})();
