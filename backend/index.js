var express = require('express');
const mongoose = require("mongoose");
var bodyParser = require('body-parser');  
var app = express();
//var urlencodedParser = bodyParser.urlencoded({ extended: false })  
app.use(express.urlencoded({extended:true}))
app.use(express.json())
var cors = require('cors');

app.use('*', cors());
mongoose.connect("mongodb+srv://avi:Avi%408864@cluster0.hxqnlfo.mongodb.net/?retryWrites=true&w=majority",{

useNewUrlParser: true,
useUnifiedTopology: true  });


mongoose.set('strictQuery', false);

mongoose.connection.on("error",err=>{
    console.log("err",err)
});

mongoose.connection.on("connected" , (err,res)=>{
    console.log("database is connected");
});

const messageSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
})

const Message = mongoose.model("Message", messageSchema)

//const message = new Message({
//  username:"Avinash",
//  email:'asdfg@gmail.com',
//  message:"I want do do something.",
//});
//message.save();



app.use(express.static('public'));
app.get('/', function (req, res) {
   res.send('Hello World');
});



app.post('/', function (req,res) {
  res.set({
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":"Content-Type"
})
  console.log(req.body);
  //const {username , email, massage } = req.body;
  //console.log(username);
   //console.log(username,email,message);
 //  const messageData = new Message({
  //  username:req.body.username,
  //  email:req.body.email,
  //  message:req.body.message,
 // });
  //messageData.save();
  res.send('ok');
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`server is started ${PORT}`);
});