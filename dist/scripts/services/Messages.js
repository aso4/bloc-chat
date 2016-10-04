(function() {
    function Messages($firebaseArray) {
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);
        return {
            all: messages
        };
    }
    angular
        .module('blocChat')
        .factory('Messages', ['$firebaseArray', Messages]);
}());
