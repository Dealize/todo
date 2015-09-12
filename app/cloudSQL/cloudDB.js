angular
    .module('cloudDB',[])
    .factory('cloudDB',cloudDB)
    //.factory('crossDomain',crossDomain);


    function cloudDB(){
        var cloudDB = new Wilddog('https://ngtodo.wilddogio.com/');
        return cloudDB;
    }

