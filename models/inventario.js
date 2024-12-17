const mongoose = require("mongoose");
const Schema = mongoose.Schema
const HerramientaSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        maxLenght:100        
    },
    unidades:{
        type:Number,
        default:0
    },
    precio:{
        type:Number,
        required:true
    },
    color:{
        type:String
    }


})
module.exports= mongoose.model("Herramienta",HerramientaSchema)