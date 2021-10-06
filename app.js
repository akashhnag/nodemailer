const nodemailer=require("nodemailer");

const transporter= nodemailer.createTransport({
    service:"gmail",
    port:587,
    auth:{
        user:"username",
        pass:"password"
    }
})

const mailOptions={
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