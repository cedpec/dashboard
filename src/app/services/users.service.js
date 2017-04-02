(function() {
    angular.module('dashboard.services', []).factory('User', userService);

    userService.$inject = ['$resource'];

    function userService($resource) {
        return $resource('src/api/users/:id', {
            id: '@_id'
        }, {
            update: {
                method: 'PUT'
            }
        });
    }
})();
