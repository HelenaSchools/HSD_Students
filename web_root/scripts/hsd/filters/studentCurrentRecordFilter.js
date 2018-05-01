hsdAngular.filter('currentRecord',function(){
    return function(input, value){
        var out=[];
        if(value){
            for(var i=0; i<input.length;i++){
                out.push(value[i]);
            }
        }else{
            var today =new Date(Date.now()).toLocaleDateString;
            for(var i=0;i<input.length;i++){
                
                if(input[i].startDate){
                    var startDate=new Date(input[i].startDate).toLocaleDateString;
                }else{
                    var startDate=new Date(Date.now()-1).toLocaleDateString;
                }

                if(input[i].endDate){
                    var endDate=new Date(input[i].endDate).toLocaleDateString;
                }else{
                    var endDate=new Date(Date.now()+1).toLocaleDateString;
                }
                if(endDate<today||startDate>today){
                    out.push(value);
                }
            }
        }
        return out;
    }
})