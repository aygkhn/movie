const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const DirectorSchema=new Schema({

    name:String,
    soyadi:String,
    bio:String,
    createAt:{
        type:Date,
        default:Date.now
    }

});

module.exports=mongoose.model('Director',DirectorSchema);