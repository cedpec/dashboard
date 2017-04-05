(function() {
    'use strict';

    describe('leftpanelController tests', function() {

        var leftpanelController;

        beforeEach(module('dashboard'));

        // Initialize the controller and a mock scope.
        beforeEach(inject(function($controller) {

            leftpanelController = $controller('LeftpanelCtrl', {});
        }));

        describe('Initialize', function() {
            it('should be defined', function() {
                expect(leftpanelController).toBeDefined();
            });
        });

    });
})();
