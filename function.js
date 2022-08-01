function Students(firstName,lastName,roll,sex,dob){
    this.firstName=firstName;
    this.lastName=lastName;
    this.roll=roll;
    this.sex=sex;
    this.dob=new Date(dob);

    this.getFullName=function(){
        return (firstName+lastName);
    }

    this.getBirthYear=function(){
        return this.dob.getFullYear();
    }

    this.age=function(){
       let presentDate=new Date();
       return presentDate.getFullYear()-this.dob.getFullYear();
    }

    Students.prototype.findegligibleOrNot=function findegligibleOrNot(minAge){

        if(this.age()>minAge){
            console.log(this.getFullName()+' is egligible <br/> ');
        }
    
        else{
            console.log(this.getFullName()+' is Not egligible <br /> ');
        }
    };
}




const s1=new Students('Alankrita','Patidar','18T108','Female','01/12/1998');
const s2=new Students('Dev','Patidar','18T109','Male','21/07/2003');

s1.getBirthYear() < s2.getBirthYear()? console.log(s1.getFullName()) : console.log(s2.getFullName());

console.log(s1.age());
s1.findegligibleOrNot(18);