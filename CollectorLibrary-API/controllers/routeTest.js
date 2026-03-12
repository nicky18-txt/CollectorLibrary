//recibo un request y doy un response. Tambien se puede escribir como req y res
const { Autores } = require('../models');

let getTest = async(request,response)=>{
    response.json({
        message:"Este es un test de un endpoint",
        hora:"18:14 del 18 de febrero del 2026"
    })
}

const postTest = async(request,response)=>{
    try{
        const { firstName, lastName, birthYear, nationality } = request.body;
        
        const nuevoAutor = await Autores.create({
            firstName,
            lastName,
            birthYear,
            nationality
        });
        
        response.status(201).json({
            message:"Autor creado exitosamente",
            data: nuevoAutor
        })
    }catch(error){
        response.status(500).json({
            message:"Error al crear autor",
            error: error.message
        })
    }
}

module.exports={
    getTest,
    postTest
    
}
