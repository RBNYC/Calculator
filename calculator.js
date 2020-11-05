const express = require('express');
const bodyParser = require('body-parser'); // Body-parser allows to pass the information that has been sent from the post request (num1 and num2)

const app = express ();
app.use(bodyParser.urlencoded({extended:true})); // urlencoded :used when trying to parse data that comes from an HTML form.

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/", function(req, res){

var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);

var result = num1 + num2;

  res.send("The result of the calculation is " + result);
})

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);
  var height =  parseFloat(req.body.height);

  var bmiResult = weight / (height*height);

  res.send("Your BMI is " + bmiResult);
})

app.post("/redirectBMI", function(req, res){
  res.redirect("/bmiCalculator");
})

app.post("/redirectCalculator", function(req, res){
  res.redirect("/");
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function(){
  console.log("Server has started successfully");
});
