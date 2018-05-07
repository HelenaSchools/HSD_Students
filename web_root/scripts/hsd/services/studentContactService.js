(function(){
    hsdAngular.factory('studentContactService',['$http',
        function($http){
            return {
                getContactsCurrentInfo: function(studentId){
                    var contacts=[];
                    return $http.get('/ws/contacts/student/'+studentId)
                        .then(function(result){
                            
                            _.each(result.data,function(element){
                                
                                var phones=[];
                                var emails=[];
                                var addresses=[];
                                _.each(element.phones,function(phone){
                                    if(!phone.deleted){
                                        
                                        phones.push(new Phone(phone));
                                    }
                                })
                                
                                
                                _.each(element.emails,function(email){
                                    if(!email.deleted){
                                        emails.push(new Email(email));
                                    }
                                })
                                _.each(element.addresses,function(address){
                                    if(currentRecord(address.startDate,address.endDate)){
                                        addresses.push(new Address(address));
                                    }
                                })
                                contacts.push(new Contact(element,phones,addresses,emails));
                            })
                            console.log(contacts);
                            return contacts;  
                        })
                } 
            }
        }
    ])

    var currentRecord=function(startDate, endDate){
        var today=new Date(Date.now());
        if(endDate===null){
            endDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()+1);
        }else{
            endDate=new Date(endDate);
        }
        if(startDate===null){
            startDate=new Date(today.getFullYear(),today.getMonth(),today.getDate()-1);
        }else{
            startDate=new Date(startDate);
        }
        if(endDate>today&&startDate<today){
            return true;
        }else{
            return false;
        }
                                    
    }
    var Email = function(email){
        this.address=email.address;
        this.type=email.type;
    }
    
    var Address =function(address){  
        this.street=address.street;
        this.lineTwo=address.lineTwo;
        this.unit=address.unit;
        this.city=address.city;
        this.state=address.state;
        this.postalCode=address.postalcode;
        this.type=address.addressType
    }

    var Contact=function(element, phones, addresses,emails){
        this.personId=element.contactId;
        this.firstName=element.firstName;
        this.lastName=element.lastName;
        for(var i=0;i<element.contactStudents[0].studentDetails.length;i++){
            if(currentRecord(element.contactStudents[0].studentDetails[i].startDate,element.contactStudents[0].studentDetails[i].endDate)){
                console.log(this.relation=element.contactStudents[0].studentDetails[i]);
                this.relation=element.contactStudents[0].studentDetails[i].relationship;
                this.custody=element.contactStudents[0].studentDetails[i].custody;
                this.emergency=element.contactStudents[0].studentDetails[i].emergency;
                this.livesWith=element.contactStudents[0].studentDetails[i].livesWith;
                this.schoolPickup=element.contactStudents[0].studentDetails[i].schoolPickup;
            }
        }
        this.phones=phones;
        this.addresses=addresses;
        this.emails=emails;
    }

    var Phone=function(phone){
        this.type=phone.phoneType;
        this.number=phone.phoneNumber;
        this.extension=phone.extension;
        this.preferred=phone.preferred;
    }
})()