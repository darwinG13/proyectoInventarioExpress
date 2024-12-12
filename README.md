# Proyecto inventario
### Inicio del proyecto
abrimos la terminal en la carperta del proyecto y hacemos el comnando npm init


npm init -y 


despues instalamos las dependencias 


npm install express mongoose dotenv cors


despues instalamos dependencias de desarrollo


npm install --save-dev nodemon


abrimos IDE (entorno de desarrollo integrado)


code .


creamos los archivos


touch index.js .env README.md .gitignore


dentro del .gitignore escribimos lo siguiente:


node_module
.env


dentro del index.js pusimos el codigo:

```
```
- const express = require("express"): traemos un express desde node_modules para poder usarlo
- const app = express(): creamos una instancia o una copia de express para usarla en nuestra app
- PORT = 3000: definimos el puerto que queremos usar
- app.set("port",PORT): configuramos el puerto en nuestra app
- app.get("/hola", : definimos una ruta y un verbo HTTP
- (req,res)=>{: creamos una funcion que tiene como parametros req:request res:response
- request es lo que recibimos 
- response es lo que respondemos 
- res.send("Hola mundo") : enviamos la respuesta
- app.listen(PORT,()=>{ :escucha el puerto y avisame si lo estas escuchando
- console.log(Listening port ${PORT}) el mensaje de que todo esta bien