const { Router } = require('express')
const express=require('express')
const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/reports', {
    family: 4,
});
const database = mongoose.connection;
database.on('error', (error) => {
console.log(error)
})
database.once('connected', () => {
console.log('Database Connected');
})

const app=express()
app.use(express.json())
const studentRouter=require('./routes/student')
app.use('/student',studentRouter)
app.listen(9000,() =>
{
console.log('server started.....')
})