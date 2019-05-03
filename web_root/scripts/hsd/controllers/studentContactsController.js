(function(){
    hsdAngular.controller('studentContactsController',[
        '$scope','$http','studentContactService',
            function($scope,$http,service){
                var studentId=getStudentID(document.URL);
                
                service.getContactsCurrentInfo(studentId).then(function(contacts){
                    $scope.contacts=contacts;
                    console.log($scope.contacts);
                    console.log(!($scope.contacts[0].addresses[0].lineTwo == null))
                })
                
            }
            
    ])
})()