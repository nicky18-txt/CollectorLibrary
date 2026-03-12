const { Autores } = require('../models');

let getAuthors = async(request,response)=>{
    try{
        let autores = await Autores.findAll();
        console.log(autores.length)
        if(autores.length <= 0 ){
            return response.status(204).json({
                status:204,
                message:"No se encontraron autores"
            })
        }
        
        response.status(200).json({
            message:"Lista de autores mostrada exitosamente",
            status:200,
            data: autores   
        })
    }catch(error){
        response.status(500).json({
            message:"Error al obtener autores", 
            error: error.message
        })
    }
}
let createAuthor = async(request,response)=>{
    try{ 
        console.log(request.body.firstname);
        if(request.body.firstname === undefined && request.body.lastname === undefined && request.body.nationality === undefined && request.body.birthYear === undefined){
            response.status(406).json({
                message:"No se recibieron datos",
                status:406
            })
        }
        if (request.body.firstname === undefined && request.body.firstname === ""){
            request.body.firstname = "Anonimo";
        }

        if(request.body.lastname === undefined && request.body.lastname === ""){
            request.body.lastname = "Anonimo";
        }

        
        let newAuthor = await Autores.create(request.body);
        response.status(201).json({
            message:"Autor creado exitosamente",
            status:201,
            data: newAuthor
        })
    }catch(error){
        response.status(500).json({
            message:"Error al crear autor",
            status:500,
            error: error.message
        })
    }
}

module.exports={
    getAuthors,
    createAuthor
}
 