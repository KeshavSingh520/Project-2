
var demo=angular.module('Project2');
 demo.controller('FilterTableController',function($scope,$location,$anchorScroll,$http){

    $scope.defaultString="Searching for... "
    $scope.newSearch="";
    $scope.searchIndex=""
    $scope.toggle="true"
    $scope.scrollTo=function(scrollLocation){
      $location.hash(scrollLocation);
      $anchorScroll(); 
    }

    $http.get('http://www.filltext.com/?rows=32&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=trues').then(function(success){
      $scope.employee=success.data;
     
      
     },function(error){
      alert('some error occurred');
     })




        
        });