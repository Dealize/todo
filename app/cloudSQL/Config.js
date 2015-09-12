angular
    .module('Config',[])
    .factory('Config',Config);


    function Config(){
        var Wilddog = require('wilddog');
        console.log('Config is load');
        return 'asd';
    }

