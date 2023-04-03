const express=require('express')
const router=express.Router()
const Model = require('../model/model');
module.exports=router
router.post('/post', async (req, res) => {
const data = new Model({
name: req.body.name,
age: req.body.age
})
try {
const dataToSave = await data.save();
res.status(200).json(dataToSave)
}
catch (error) {
res.status(400).json({message: error.message})
}
})