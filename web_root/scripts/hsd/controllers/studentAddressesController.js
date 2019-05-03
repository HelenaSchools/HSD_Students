(function(){
    hsdAngular.controller('studentAddressesController',
    ['$scope','$http','studentContactService',
        function($scope,$http,service){
            
            var studentId=getStudentID(document.URL);
            $scope.showAllAddresses=false;

            service.getContactsCurrentInfo(studentId).then(function(contacts){
                addresses=[];
                for(var i=0;i<contacts.length;i++){
                    if(contacts[i].addresses.length>0){
                        for(var j=0;j<contacts[i].addresses.length;j++){
                            addresses.push(new contactAddress(contacts[i],contacts[i].addresses[j]))
                        }
                    }
                }
                //console.log(addresses);
                if(addresses.length>0)
                {
                    $scope.addresses=addresses;
                }
                //console.log($scope.addresses);
                //console.log($scope.addresses[0].unit==null)
                //console.log($scope.addresses[0].unit==null)
            })
        }
    ]);
    
    var contactAddress= function(contact, address){
        this.firstName=contact.firstName,
        this.lastName=contact.lastName,
        this.relation=contact.relation,
        this.street=address.street,
        this.lineTwo=address.lineTwo,
        this.unit=address.unit,
        this.city=address.city,
        this.postalCode=address.postalCode,
        this.type=address.type
    }
    
})()

