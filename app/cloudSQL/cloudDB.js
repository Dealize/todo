angular
    .module('cloudDB',[])
    .factory('cloudDB',cloudDB);


    function cloudDB(){
        var cloudDB = new Wilddog('https://ngtodo.wilddogio.com/');
        console.log('cloudDB');
        console.log(cloudDB);
        return cloudDB;
    }

