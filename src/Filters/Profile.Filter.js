var demo=angular.module('Project2');

(function(){

})()

demo.filter('camelCase1',[function(){
    return function(input){
        var firstLetter=input.substring(0,1);

        return (firstLetter.toUpperCase()+input.substring(1))
    }
    
}]);