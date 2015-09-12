(function(){
    'use strict';
    angular.module('todoApp')
        .controller('todoListController',todoListController);

    todoListController.$inject = ['$scope','eventBus','todoDBFactory']
    function todoListController($scope,eventBus,todoDBFactory){
        var vm = this;
        var todoList = [];
        vm.todoList = todoList;
        vm.deleteTodo = deleteTodo;


        eventBus.on('newTodoInfo',function(data){
            todoList.splice(0,0,data.data);
            //����д��Ϊ�����һ���������,����ʱ�������ݿ��е�ÿ�����ݶ�������������˷�,�����б�Ҫ�������鷴ת
            console.log(todoList);

            //����ԭ������и���,��ת֮��ԭ�����˳��Ҳ�ᷢ���仯
            //var newArr = todoList.reverse();
            var newArr = angular.copy(todoList).reverse();
            console.log(newArr);
            todoDBFactory.createNewTodo(newArr);

        });

        function deleteTodo(index){
            todoList.splice(index,1);
        }

    }
})();