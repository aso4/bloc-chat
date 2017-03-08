(function() {
    function Messages($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        return {
            all: messages
        };
    }
    angular
        .module('fireChat')
        .factory('Messages', ['$firebaseArray', Messages]);
}());
