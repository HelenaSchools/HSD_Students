'use strict';
var hsdAngular = angular.module('hsdAngular',[]);
var currentRecord = function(input){
    
    var out=[];
    var today =new Date(Date.now()).toLocaleDateString();
    
    for(var i=0;i<input.length;i++){
        
        if(input[i].startDate !==null){
            var startDate=new Date(input[i].startDate).toLocaleDateString();
        }else{
            var startDate=new Date(Date.now()-1).toLocaleDateString();
        }

        if(input[i].endDate !== null){
            var endDate=new Date(input[i].endDate).toLocaleDateString();
        }else{
            var endDate=new Date(Date.now()+1).toLocaleDateString();
        }

        if(!(endDate<today||startDate>today)){
            out.push(input);
    
        }
    }
    return out;
}

var getStudentID=function(url){
    if(url.includes('frn')){
        return url.substring(url.indexOf('frn')+7)
    }
}
