const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:true}))

app.get('/bmiForm',(req, res)=>{
    res.sendFile(__dirname+'/index.html');
})

app.post('/bmiForm',(req, res)=>{
    h = parseFloat(req.body.Height/100);
    w = parseFloat(req.body.Weight);
    req_name = req.body.Name;
    
    bmi = Math.round(w/(h*h));

    res.send(`Hey ${req_name}, Your BMI Is ${bmi}`);
})

app.listen(PORT,()=>{
    console.log(`Server Listening @ http://localhost:3000`);
})