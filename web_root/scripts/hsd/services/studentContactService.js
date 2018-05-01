(function(){
    hsdAngular.factory('studentContactService',['$http',
        function($http){
            return {
                studentContactData: function(studentId){
                    return $http.get('/ws/contacts/student/'+studentId)
                    .then(function(results){
                        return results.data;
                    })
                },
                 getContactAddresses: function(studentId){
                    var addresses=[];
                    return $http.get('/ws/contacts/student/'+studentId)
                    .then(function(results){
                        _.each(results.data,function(element){
                            _.each(element.addresses,function(address){
                                addresses.push(new Address(element, address));
                            })
                        })
                        //console.log(addresses);
                        return addresses;
                    })
                } 
            }
        }
    ])

    var Address =function(element, address){
        this.personId=element.contactId;
        this.firstName=element.firstName;
        this.lastName=element.lastName;
        this.relation=element.contactStudents[0].studentDetails[0].relationship;
        this.street=address.street;
        this.lineTwo=address.lineTwo;
        this.city=address.city;
        this.state=address.state;
        this.postalCode=address.postalcode;
        this.startDate=address.startDate;
        this.endDate=address.endDate;
        this.type=address.addressType
    }
})()