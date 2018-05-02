(function(){
    hsdAngular.controller('studentAddressesController',
    ['$scope','$http','studentContactService',
        function($scope,$http,service){
            
            var studentId=getStudentID(document.URL);
            $scope.showAllAddresses=false;

            
            $scope.contacts=service.studentContactData(studentId);
            //$scope.contactAddresses=service.getContactAddresses(studentId);
            service.getContactAddresses(studentId).then(function(addresses){
                console.log(addresses);
                $scope.addresses=addresses;//currentRecord(addresses);
                console.log($scope.addresses);
                
            })
        }
    ]);
    
    
})()

