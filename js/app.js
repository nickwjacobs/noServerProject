angular.module('lawOffice', ['ui.router']).config(function($stateProvider, $urlRouterProvider){

$urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home',{
        url: '/',
        templateUrl: './views/home.html',
        controller: 'homeCtrl'
      })
      .state('admin',{
          url: '/admin',
          templateUrl: './views/admin.html',
          controller: 'adminCtrl'
        })  .state('login',{
              url: '/login',
              templateUrl: './views/login.html',
              controller: 'loginCtrl'
            });
});
