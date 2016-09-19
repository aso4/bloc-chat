(function() {
    function RoomCtrl($scope, Room) {
        var ref = firebase.database().ref().child("messages");
        // create a synchronized array
        // click on `index.html` above to see it used in the DOM!
        $scope.rooms = Room.all;

        $scope.addRoom = function(room) {
            Room.all.$add(room);
            $scope.newRoom = '';
        }
    }
    angular
        .module('blocChat')
        .controller('RoomCtrl', ['$scope', 'Room', RoomCtrl]);
}());
