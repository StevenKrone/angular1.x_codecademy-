var app = angular.module('exampleapp', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise("/");

                $stateProvider
                .state('home', {
                    url: "/",
                    template: "<home></home>"
                })
                .state('about', {
                    url: "/about",
                    template: "<about></about>"
                })
                }
            );




