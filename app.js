const nodemailer=require("nodemailer");

var transporter= nodemailer.createTransport({
    service:"gmail",
    //secure:false,
    port:587,
    auth:{
        user:"username",
        pass:"password"
    }
    /*tls:{
        rejectUnauthorized:false
    }*/
})
var mailOptions={
    from:"princ3sscharming28@gmail.com",
    to:"akash.nag63@yahoo.in",
    subject:"Nodemailer Test",
    text:"Hello World!!"
}

transporter.sendMail(mailOptions,(err,res)=>{
    if(err){
        console.log(err);        
    }
    else{
        console.log("Mail sent");        
    }
})