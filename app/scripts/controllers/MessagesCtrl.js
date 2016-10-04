(function() {
    function MessagesCtrl($scope, Messages) {
        var ref = firebase.database().ref().child("messages");

        $scope.getMessagesForRoom = function(room) {
            $scope.currentRoom = room;
            $scope.currentRoomName = room.name;
            var currentRoomMessagesRef = new $window.Firebase($scope.rooms.$ref() + '/' + room.$value + '/messages/');
            $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
        };

        $scope.addMessageToRoom = function(messageText) {
            var nickname = $cookies.blocChatCurrentUser;
            var time = $window.moment().format('h:mm a');

            $scope.roomMessages.$add({
                name: nickname,
                message: messageText,
                time: time
            });
            $scope.newMessageText = '';
        };

    }
    angular
        .module('blocChat')
        .controller('MessagesCtrl', ['$scope', 'Messages', MessagesCtrl]);
}());
