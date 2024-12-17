const express = require("express");
const mongoose = require ("mongoose")

require("dotenv").config()
const holaRoutes = require("./routes/helloRoutes");
const inventarioRoutes = require("./routes/inventario");
const app = express();
PORT = 3000;
app.set("port",PORT);
app.get("/hola",(req,res)=>{
    res.send("Hola mundo");
})

app.use(express.json())

//Routes
app.use("/api/hola", holaRoutes);
app.use("/api/inventario", inventarioRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Conectado a la base de datos"))
.catch((err)=>console.error(err))

app.listen(PORT,()=>{
    console.log(`Listening port ${PORT}`)
})