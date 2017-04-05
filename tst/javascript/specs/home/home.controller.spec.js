(function() {
    'use strict';

    describe('homeController tests', function() {

        var homeController;
        var userService;
        var httpBackend;

        beforeEach(module('dashboard'));
        beforeEach(module('userServiceMock'));

        var scope;
        // Initialize the controller and a mock scope.
        beforeEach(inject(function($rootScope, $controller, _userService_) {
            scope = $rootScope.$new();
            userService = _userService_;

            spyOn(userService, 'getAll').and.callThrough();

            homeController = $controller('HomeCtrl', {
                $scope: scope,
                userService: userService
            });
        }));

        describe('Initialize', function() {
            it('should be defined', function() {
                expect(homeController).toBeDefined();
            });

            it('should userService.getAll have been call', function() {
                expect(userService.getAll).toHaveBeenCalled();
            });

            it('should do something on success', function() {
                scope.$digest();

                expect(homeController.users).toEqual(['user1', 'user2']);
            });

        });

    });
})();
