(function(){
    'use strict';
    angular.module('todoApp')
        .controller('todoListController',todoListController);

    todoListController.$inject = ['$scope','eventBus']
    function todoListController($scope,eventBus){
        console.log('todo list  is load');

    }
})();