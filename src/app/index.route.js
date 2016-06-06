(function() {
  'use strict';

  angular
    .module('app')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/",
            templateUrl: "app/components/content/home/home.html",
            controller: function ($scope) {
            }
        })
        .state("topics", {
            url: "/topics",
            templateUrl: "app/components/content/topics/topics.html",
            controller: function ($scope) {
            }
        })
        .state("notes", {
            url: "/notes",
            templateUrl: "app/components/content/notes/notes.html",
            controller: function ($scope) {
            }
        })
        .state("settings", {
            url: "/articles",
            templateUrl: "app/components/content/articles/articles.html",
            controller: function ($scope) {
            }
        });
        
    $urlRouterProvider.otherwise('/');
  }

})();
