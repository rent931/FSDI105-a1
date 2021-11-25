console.log("User Register");

class User{
    constructor(email,pass,first,last,age,address,phone,payment,color){
        this.email=email;
        this.password=pass;
        this.fname=first;
        this.lname=last;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.payment=payment;
        this.color=color;
    }
}

function registerUser(){
    let email = $("#userEmail").val();
    let password = $("#userPassword").val();
    let fname = $("#userFirst").val();
    let lname = $("#userLast").val();
    let age = $("#userAge").val();
    let address = $("#address").val();
    let phone = $("#userPhone").val();
    let payment = $("#selPayment").val();
    let color = $("#userColor").val();
    let user=new User(email,password,fname,lname,age,address,phone,payment,color)
    console.log(user);


}

function init(){
    console.log("init function");
}
window.onload=init;