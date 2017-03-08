(function() {
    function RoomCtrl($scope, $window, $firebaseArray, $cookies, Room) {
        // var ref = firebase.database().ref().child("messages");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.rooms = Room.all;
        $scope.nickname = '';

        $scope.addRoom = function(room) {
            Room.all.$add({
                name: room
            });
            $scope.newRoom = '';
        };

        //USERS
        $scope.addUser = function(nickname) {
            console.log("nickname = ", nickname);
            if (nickname === undefined) {
                angular.element('#myModal2').modal({
                    backdrop: 'static'
                });
                angular.element('#myModal2').modal('show');
            } else {
                $cookies.blocChatCurrentUser = nickname;
                $scope.newNickname = '';
                angular.element('#myModal2').modal('hide');
            }
        };
        $scope.getMessagesForRoom = function(room) {
            $scope.currentRoom = room;
            $scope.currentRoomName = room.name;
            console.log("room = ", room);
            var currentRoomMessagesRef = new firebase.database().ref().child('rooms' + '/' + room.$id + '/messages/');
            console.log(currentRoomMessagesRef);
            $scope.roomMessages = $firebaseArray(currentRoomMessagesRef);
        };

        $scope.addMessageToRoom = function(messageText) {
            var nickname = $cookies.blocChatCurrentUser;
            // var time = $window.moment().format('h:mm a');

            $scope.roomMessages.$add({
                name: nickname,
                message: messageText //,
                    // time: time
            });
            $scope.newMessageText = '';
        };
    }
    angular
        .module('fireChat') //ngCookies not injected anywhere
        .controller('RoomCtrl', ['$scope', '$window', '$firebaseArray', '$cookies', 'Room', RoomCtrl]);
}());
