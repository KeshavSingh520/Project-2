var demo=angular.module('Project2');
demo.controller('project2Controller',function($scope,$location,$interval){

    $interval(function(){
        $scope.time=new Date().toLocaleTimeString();
    },1000);

   $scope.url1= $location.url();

   $scope.protocol = $location.protocol();

   $scope.currentpath=$location.path();

   $scope.newurl=$location.absUrl();
   $scope.port=$location.port();

   $scope.searchObject = $location.search();

   $scope.hash = $location.hash();



  


             
   

           

});