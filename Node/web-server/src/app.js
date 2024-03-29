const express = require('express')

const app = express()

app.get('',(req,res)=>{
    res.send('Hello Express!!')
})

app.get('/help',(req,res)=>{
    res.send('Help')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.get('/weather',(req,res)=>{
    res.send('Weather')
})

app.listen(3000,()=>{
    console.log('Server up on port 3000')
})