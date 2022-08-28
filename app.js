const express=require('express');
const path = require ('path'); 
const cors = require('cors');
const userdata = require('./src/model/user');
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const bodyparser=require('body-parser');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'testinganoop04@gmail.com',
    pass: 'oudensilzwfclvan'
  }
}));


const mailOptions = {
  from: 'testinganoop04@gmail.com',
  to: '',
  subject: 'OTP to sign in',
  text: ""
};


var app = express();

app.use(express.static('public'));
app.use('/css',express.static(__dirname +'public/css'));
app.use('/js',express.static(__dirname +'public/js'));
app.use(cors());
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use(express.static('./dist'));
const urlencodedParser=bodyparser.urlencoded({extended:false}); 


app.get("/getuserotp", (req,res)=>{
    response.header("Access-Control-Allow-Origin","*");
    response.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    userdata.findOne({email: request.body.email}).then(
        function(user){
            console.log(user);
            response.send(user);
        }
    );
});


app.post("/submitusermail",(req,res)=>{
    console.log(req.body.usermail);

    userdata.findOne({email: req.body.usermail}, function(err, fuser){
        console.log(fuser)
        if(err || fuser==null){
            var user = {
                email : req.body.usermail,
                otp : 100000 + Math. floor(Math. random() * 900000),    
            }          
            console.log(user)      
            var newuser=new userdata(user);
            newuser.save();
            fuser = newuser;
        }
        else{
            fuser.otp = 100000 + Math. floor(Math. random() * 900000);
            fuser.save();
        }

        mailOptions.to = fuser.email.toString();
        mailOptions.text = fuser.otp.toString();
        console.log(mailOptions)
        transporter.sendMail(mailOptions,  function(error, info){
                                                if (error) {
                                                  console.log(error);
                                                } else {
                                                  console.log('Email sent: ' + info.response);
                                                }
        });

    });

    res.send('user mail saved');

});



// start server
app.listen(process.env.PORT || 5000,()=>{
    console.log('server has been started at:'+5000);
});