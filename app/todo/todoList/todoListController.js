(function(){
    'use strict';
    angular.module('todoApp')
        .controller('todoListController',todoListController);

    todoListController.$inject = ['$scope']
    function todoListController($scope){
        console.log('todo list  is load');

    }
})();