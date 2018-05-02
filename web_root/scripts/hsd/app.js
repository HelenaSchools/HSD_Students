'use strict';
var hsdAngular = angular.module('hsdAngular',[]);
var currentRecord = function(input){
    
        var out=[];
        var today =new Date(Date.now()).toLocaleDateString();
        console.log("today is: "+today)
        for(var i=0;i<input.length;i++){
            console.log("Record Number: "+i);
            console.log("Start Date before: "+input[i].startDate);
            if(input[i].startDate !==null){
                var startDate=new Date(input[i].startDate).toLocaleDateString();
            }else{
                var startDate=new Date(Date.now()-1).toLocaleDateString();
            }

            console.log("Start Date after: "+startDate)
            console.log("End date before: "+input[i].endDate)
            if(input[i].endDate !== null){
                var endDate=new Date(input[i].endDate).toLocaleDateString();
            }else{
                var endDate=new Date(Date.now()+1).toLocaleDateString();
            }
            console.log("End date after: "+endDate);
            console.log("End date before today? "+(endDate>today));
            console.log("Start date after today? "+(startDate<today));
            console.log("Current record? "+(endDate<today||startDate>today));
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
