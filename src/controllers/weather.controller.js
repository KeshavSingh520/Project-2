var demo=angular.module('Project2');

demo.controller('weatherController',function($http,$scope){

$http.get('api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=f41e0255093ab05915e2cbbe97835245').then(function(success){
    $scope.newdata=success.data;
    console.log('response',$scope.newdata)
},function(error){
    alert("Some error occurred")
})
   
});