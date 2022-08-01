class User{
  
  static count=0;

  constructor(userName,email,password){
    this.userName=userName;
    this.email=email;
    this.password=password;
    User.count++;
  }

  countUser(){
    console.log('Number of User registered = '+ User.count);
  }
 
  register(){
   
    console.log(this.userName+' is now registered ');
  }
}

class Member extends User{
  constructor(userName,email,password,memberPackage){
    super(userName,email,password);
    this.package=memberPackage;

    let todayDate=new Date();
    const membershipactivetillYear=todayDate.getFullYear();
    const membershipactivetillMonth=todayDate.getMonth();
    const membershipactivetillDay=todayDate.getDay();

    this.membershipactivetilldate= new Date(membershipactivetillYear,membershipactivetillMonth,membershipactivetillDay);
 }

 renewMembership(){
  const membershipactivetillYear=this.membershipactivetilldate.getFullYear();
  const membershipactivetillMonth=this.membershipactivetilldate.getMonth();
  const membershipactivetillDay=this.membershipactivetilldate.getDay();

  this.membershipactivetilldate=new Date(membershipactivetillYear,membershipactivetillMonth+1,membershipactivetillDay);

 }

 subscriptionActivateTill(){
  console.log(this.username+' is subscribed to '+this.package+' uptill '+this.membershipactivetilldate);
 }

  getPackage(){
  console.log(this.userName+' is subscribed to the '+this.package+'package');
 }
}

const user1= new Member('Joe','joe@gmail.com','12346','standard');
const member1= new Member('mike','mike@gmail.com','12345','standard');

member1.getPackage();
member1.register();
member1.countUser();

member1.renewMembership();
member1.subscriptionActivateTill();