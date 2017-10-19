/**
 * Created by Nan on 2017/10/13.
 */
var app = angular.module("app", ["ui.router"]);
app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'App/view/temp/shoppingCar.html'
        });
   $urlRouterProvider.otherwise("/home")
});