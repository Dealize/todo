(
    function(){
        'use strict';
        angular.module('todoApp')
            .controller('newTodoController',newTodoController);

        newTodoController.$inject = ['$scope'];
        function newTodoController($scope){
            console.log('new todo  is load');
        }
    }
)();