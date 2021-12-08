const express = require('express');
const Routes = require('./Routes')

const app = express();

app.get('/',(req,res)=>{
    res.send("Hello i am your backend")
})

app.use('/api', Routes)

app.listen(5000,()=>{console.log("Server started")})
