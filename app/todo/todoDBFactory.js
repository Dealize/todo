(function(){
    'use strict';
    angular
        .module('todoApp')
        .factory('todoDBFactory',todoDBFactory);

    todoDBFactory.$inject = ['cloudDB']
    function todoDBFactory(cloudDB){
        var service = {
            createNewTodo:createNewTodo,
            readAllTodo:readAllTodo,
            delOneTodo:delOneTodo
        };
        return service;

        function createNewTodo(data){
            var createData = cloudDB.child('todo');
            console.log('sql data is ',data);
            createData.update(data);
            //createData.set(data);
        }
        function readAllTodo(){

        }
        function delOneTodo(){

        }
    }
})();