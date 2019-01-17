var demo=angular.module('Project2',['ngRoute']);




demo.constant('myConfig',{
    filterapiUrl:"http://www.filltext.com/?rows=32&fname={firstName}&lname={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=trues"

})



// demo.service('demoService',['$http',function($http){
//     this.getData = function(url){
//         return $http.get(url);
//     }

//     this.postData = function(data){
//         return "data post"

//     }
// }]);


// demo.factory('demoFactory',[function(){
//     return{
//         getData:function(){
//             return "hi factory"
//         },
//         postData:function(data){
//             return "data post via factory";
//         }

//     }
// }])





