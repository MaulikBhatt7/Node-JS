const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors=require('cors')
const Faculty = require('./Faculty');

mongoose.connect('mongodb+srv://maulik:maulik@cluster0.1ghoqyp.mongodb.net/Faculties?retryWrites=true&w=majority').then(()=>{
    const app=express();
    app.use(bodyParser.urlencoded({ extended: false }))
    app.use(cors());
    app.get('/faculties',async (req,res)=>{
        const data = await Faculty.find();
        res.send(data);
    })
    app.get('/faculty/:id',async (req,res)=>{
        const data = await Faculty.findOne({FacultyInitial:req.params.id});
        res.send(data)
    })
    app.post('/faculty',async (req,res)=>{
        const fac = new Faculty();
        fac.FacultyInitial=req.body.FI;
        fac.FacultyName=req.body.FN;
        fac.FacultyAge=req.body.FA;
        fac.FacultyBranch=req.body.FB;
        const data = await fac.save();
        res.send(data)
    })
    app.put('/faculty/:id',async (req,res)=>{
        const data = await Faculty.findOne({FacultyInitial:req.params.id})
        data.FacultyName=req.body.FN;
        data.FacultyAge=req.body.FA;
        data.FacultyBranch=req.body.FB;
        await data.save();
        res.send(data);
    })
    app.delete('faculty/:id',async (req,res)=>{
        const data = await Faculty.deleteOne({FacultyInitial:req.params.id})
    })
    app.listen(3003,()=>{
    console.log("Server started @ http://localhost:3003");
    })
})