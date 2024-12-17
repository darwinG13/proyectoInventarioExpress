const Herramienta = require ("../models/inventario")
const {request} = require ("express")

exports.obtenerInventario = async (req,res)=>{
try{
    const inventario = await Herramienta.find({})
    res.json(inventario).status(200)
} catch (error){
    console.log(error)
    return res.status(500).send(error)
}   
    
}
exports.crearHerramienta = async(req,res)=>{
    try{
       await Herramienta.create({
        nombre : req.body.nombre,
        unidades : req.body.unidades,
        precio : req.body.precio,
        color : req.body.color
       }) 
       res.status(201).send("Herramienta Creada")
    } catch (error){
        console.log(error)
        return res.status(500).send(error)
    }
}
exports.obtenerHerramientaPorId = async (req,res)=>{
    try{
        const {id} = req.params
        const herramienta = await Herramienta.findById(id)
        res.status(200).json(herramienta)
    }catch(error){
        console.log(error)
        return res.status(500).send(error) 
    }
}
exports.modificarHerramientaPorId = async (req,res)=>{
    try{
        const {id} = req.params
        const herramienta = await Herramienta.findByIdAndUpdate(id,{
            nombre : req.body.nombre,
            unidades : req.body.unidades,
            precio : req.body.precio,
            color : req.body.color 
        })
        res.status(200).json(herramienta)
    }catch(error){
        console.log(error)
        return res.status(500).send(error) 
    }
}
exports.eliminarHerramientaPorId = async (req,res)=>{
    try{
        const {id} = req.params
        const herramienta = await Herramienta.findByIdAndDelete (id,{
            nombre : req.body.nombre,
            unidades : req.body.unidades,
            precio : req.body.precio,
            color : req.body.color 
        })
        res.status(200).json(herramienta)
    }catch(error){
        console.log(error)
        return res.status(500).send(error) 
    }
}