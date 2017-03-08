'use strict';

/**
 * @ngdoc overview
 * @name fireChatApp
 * @description
 * # fireChatApp
 *
 * Main module of the application.
 */

angular.module('fireChat', ['ngCookies', 'firebase'])
       .run(['$cookies', function($cookies) {

        if (!$cookies.blocChatCurrentUser || $cookies.blocChatCurrentUser === '') {
            angular.element('#myModal2').modal({
                backdrop: 'static'
            });
            angular.element('#myModal2').modal('show');
        }

    }]);
