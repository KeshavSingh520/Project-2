

demo.factory('demoFactory',[function(){
    return{
        getData:function(){
            return "hi factory"
        },
        postData:function(data){
            return "data post via factory";
        }

    }
}])