(function() {
    angular.module('dashboard.services', ['ngResource']).factory('userService', userService);

    userService.$inject = ['$resource'];

    function userService($resource) {

        var User = $resource('src/api/users/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });

        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {

            return User.query().$promise;
        }
    }
})();
