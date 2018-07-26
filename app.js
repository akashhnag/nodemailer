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
    from:"",
    to:"",
    subject:"",
    text:""
}

transporter.sendMail(mailOptions,(err,res)=>{
    if(err){
        console.log(err);        
    }
    else{
        console.log("Mail sent");        
    }
})