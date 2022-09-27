const mongoose = require('mongoose');

const schema = mongoose.Schema({
    FacultyInitial: String,
    FacultyName: String,
    FacultyAge: Number,
    FacultyBranch: String
})

module.exports=mongoose.model('Faculty',schema,'Faculties');