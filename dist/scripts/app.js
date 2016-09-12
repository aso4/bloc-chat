 (function() {
     function config($stateProvider, $locationProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
             });
         $stateProvider
             .state('home', {
                 url: '/',
                 templateUrl: '/templates/home.html'
             });
//             .state('album', {
//                 url: '/album',
//                 controller: 'AlbumCtrl as album',
//                 templateUrl: '/templates/album.html'
//             })
//             .state('collection', {
//                 url: '/collection',
//                 controller: 'CollectionCtrl as collection',
//                 templateUrl: '/templates/collection.html'
//             });
     }
 
     angular
         .module('blocChat', ['ui.router'])
         .config(config);
 })();