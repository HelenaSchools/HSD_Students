(function(){
    hsdAngular.controller('studentAddressesController',
    ['$scope','$http','studentContactService',
        function($scope,$http,service){
            
            var studentId=getStudentID(document.URL);
            $scope.showAllAddresses=false;

            
            $scope.contacts=service.studentContactData(studentId);
            //$scope.contactAddresses=service.getContactAddresses(studentId);
            service.getContactCurrentInfo(studentId).then(function(contacts){
                addresses=[];
                for(var i=0;i<contacts.length;i++){
                    if(contacts[i].addresses.length>0){
                        for(var i=0;i<contacts[i].addresses.length;i++){
                            addresses.push(contacts[i].addresses[i])
                        }
                    }
                }
                console.log(addresses);
                if(addresses.length>0)
                {
                    $scope.addresses=addresses;
                }
                console.log($scope.addresses);
                
            })
        }
    ]);
    
    
})()

