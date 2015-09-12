(function(){
    'use strict';
    angular.module('todoApp')
        .controller('todoListController',todoListController);

    todoListController.$inject = ['$scope','eventBus']
    function todoListController($scope,eventBus){
        var vm = this;
        var todoList = [];
        vm.todoList = todoList;
        vm.deleteTodo = deleteTodo;


        eventBus.on('newTodoInfo',function(data){
             todoList.splice(0,0,data);
        });
        function deleteTodo(index){
            todoList.splice(index,1);
        }
        console.log(vm.todoList);

    }
})();