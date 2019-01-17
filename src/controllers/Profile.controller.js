var demo=angular.module('Project2');

demo.controller('ProfileController',function($scope,$route,getService,$timeout){


    $scope.message3="Profile";

    var vm=this;
    vm.reloadData=function(){
        $route.reload();
    }

    $timeout(function(){    
        $scope.header="loading...";
    },2000);



    getService.getData('https://randomuser.me/api/?results=32').then(function(success)
{

$scope.personData1=success.data.results;
$scope.count=success.data.info.results;



}
,
function(error){alert(error)})


   

   }) ;




