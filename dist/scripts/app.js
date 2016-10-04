'use strict';

/**
 * @ngdoc overview
 * @name blocChatApp
 * @description
 * # blocChatApp
 *
 * Main module of the application.
 */

angular.module('blocChat', ['ngCookies', 'firebase']).run(['$cookies', function($cookies) {

        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
            angular.element('#myModal2').modal({
                backdrop: 'static'
            });
            angular.element('#myModal2').modal('show');
        }

    }]);
