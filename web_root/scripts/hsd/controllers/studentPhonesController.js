(function(){
    hsdAngular.controller('studentPhonesController',[
        '$scope','$http','studentContactService',
            function($scope,$http,service){
                var studentId=getStudentID(document.URL);
                
                service.getContactsCurrentInfo(studentId).then(function(contacts){
                    $scope.contacts=contacts;
                    
                })
            }
    ])
})()