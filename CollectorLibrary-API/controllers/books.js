const { Books } = require('../models');

let createBook = async(request,response)=>{
    try{
        if(request.body.title === undefined || request.body.genre === undefined || request.body.publication_year === undefined || request.body.isbn === undefined || request.body.page_count === undefined){
            return response.status(406).json({
                message:"Faltan datos para crear el libro",
                status:406
            })
        }
        //PREGUNTAR QUE COMO NO TIENE NO NULL SI ESTA VALIDO
        // if(request.body.isbn.length !== 13){
        //     return response.status(406).json({
        //         message:"El ISBN debe tener 13 caracteres",
        //         status:406
        //     })
        // }

        const isbn = String(request.body.isbn).trim();

        if (!isbn) {
            return response.status(406).json({
                message: "El ISBN es obligatorio",
                status: 406
            })
        }

        const existingBook = await Books.findOne({
            where: { isbn }
        });

        if (existingBook) {
            return response.status(409).json({
                message: "El ISBN ya existe",
                status: 409
            })
        }

        request.body.isbn = isbn;
        let newBook = await Books.create(request.body);
        response.status(201).json({
            message:"Libro creado exitosamente",    
            status:201,
            data: newBook
        })
    }catch(error){
        response.status(500).json({
            message:"Error al crear libro",
            status:500,
            error: error.message
        })
    }
}

module.exports={
    createBook
}