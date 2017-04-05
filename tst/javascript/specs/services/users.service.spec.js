(function() {
    'use strict';

    describe('userService tests', function() {

        var userService;
        var httpBackend;

        beforeEach(module('dashboard.services'));

        var successStatus;
        var errorStatus = '';
        var mock;
        beforeEach(function() {
            successStatus = [];
            errorStatus = '';
            mock = {
                success: function(data) {
                    successStatus = data;
                },
                error: function(data) {
                    errorStatus = data;
                }
            };
            spyOn(mock, 'success').and.callThrough();
            spyOn(mock, 'error').and.callThrough();
        });

        beforeEach(inject(function($httpBackend, _userService_) {
            httpBackend = $httpBackend;
            userService = _userService_;
        }));

        it('should exists', function() {
            expect(userService).toBeDefined;
        });

        describe('.getAll()', function() {

            afterEach(function() {
                httpBackend.verifyNoOutstandingExpectation();
                httpBackend.verifyNoOutstandingRequest();
            });

            it('should exist', function() {
                expect(userService.getAll).toBeDefined();
            });

            it('should call', function() {
                var data = ['one thing', 'another thing'];

                httpBackend.expectGET(/\/api\/users/).respond(data);
                userService.getAll().then(mock.success, mock.error);
                httpBackend.flush();

                expect(mock.success).toHaveBeenCalled();
                expect(successStatus[0]).toEqual(data[0]);
                expect(mock.error).not.toHaveBeenCalled();
                expect(errorStatus).toEqual('');

            });
        });
    });
})();
