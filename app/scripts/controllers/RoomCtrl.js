(function() {
    function RoomCtrl($scope, $window, $firebaseArray, Room) {
        // var ref = firebase.database().ref().child("messages");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.rooms = Room.all;

        $scope.addRoom = function(room) {
            Room.all.$add({name: room});
            $scope.newRoom = '';
        }

        $scope.getMessagesForRoom = function(room) {
            $scope.currentRoom = room;
            $scope.currentRoomName = room.name;
            console.log(room);
            var currentRoomMessagesRef = new firebase.database().ref().child('rooms' + '/' + room.$id + '/messages/');
            console.log(currentRoomMessagesRef);
            $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
        };

        $scope.addMessageToRoom = function(messageText) {
            // var nickname = $cookies.blocChatCurrentUser;
            var nickname = 'Albert';
            // var time = $window.moment().format('h:mm a');

            $scope.roomMessages.$add({
                name: nickname,
                message: messageText//,
                // time: time
            });
            $scope.newMessageText = '';
        };

        // $scope.getMessagesForRoom = function(room) {
        //     $scope.currentRoom = room;
        //     $scope.currentRoomName = room.name;
        //     var currentRoomMessagesRef = new $window.Firebase($scope.rooms.$ref() + '/' + room.$value + '/messages/');
        //     $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
        // };
        //
        // $scope.addMessageToRoom = function(messageText) {
        //     var nickname = $cookies.blocChatCurrentUser;
        //     var time = $window.moment().format('h:mm a');
        //
        //     $scope.roomMessages.$add({
        //         name: nickname,
        //         message: messageText,
        //         time: time
        //     });
        //     $scope.newMessageText = '';
        // };
    }
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', '$window', '$firebaseArray', 'Room', RoomCtrl]);
}());
