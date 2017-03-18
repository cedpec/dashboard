/**
* Main AngularJS Web Application
*/
var app = angular.module('dashboard', [
'ngRoute'
]);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {

  console.log('config');
$routeProvider
// Home
.when("/", {templateUrl: "templates/home.html", controller: "PageCtrl"})
// // Pages
// .when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
// .when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
// /* etc… routes to other pages… */
// // Blog
// .when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
// .when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
// else 404
.otherwise("/404", {templateUrl: "404.html", controller: "PageCtrl"});
}]);


/**
* Controls all other Pages
*/
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
console.log("Page Controller reporting for duty.");
});
