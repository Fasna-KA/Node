const express = require('express')
 const app = express()
 app.get('/api/main', function(req,res){
    res.send('Hi Iam Fasna Buhais')
    // res.send('<h1>its Assignmenrt 2</h1>')
    // res.send({ 
    //     name : 'FASNA K A',
    //     profession : 'Engineer'

    // }) 

    // can send only one send req
    // no need to use res.end() 
    //res.send  = res.write() + res.end()

 })
 app.listen(9090, function(){
    console.log('Hi Application is running')
 })