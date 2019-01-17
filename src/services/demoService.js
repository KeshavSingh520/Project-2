var demo=angular.module('Project2');

demo.service('getService',['$http',function($http){
    this.getData=function(url){
        return $http.get(url);
    }
}])