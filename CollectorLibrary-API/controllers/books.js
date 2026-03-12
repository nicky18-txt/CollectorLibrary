const { Books, Autores } = require('../models');

let newBook = async(request,response)=>{
    try{
        if(request.body.title === undefined || request.body.genre === undefined || request.body.publication_year === undefined || request.body.isbn === undefined || request.body.page_count === undefined){
            return response.status(406).json({
                message:"Faltan datos para crear el libro",
                status:406
            })
        }

        const firstName = request.body.firstName || request.body.firstname;
        const lastName = request.body.lastName || request.body.lastname;

        if(firstName === undefined || lastName === undefined){
            return response.status(406).json({
                message:"Debes ingresar el nombre y apellido del autor del libro",
                status:406
            })
        }

        let author = await Autores.findOne({
            where: {
                firstName,
                lastName
            }
        });

        if(!author){
            return response.status(404).json({
                message:"El autor no existe",
                status:404
            })
        }

        let createBook = await Books.create({
            autor_id: author.id,
            title: request.body.title,
            genre: request.body.genre,
            publication_year: request.body.publication_year,
            isbn: request.body.isbn,
            page_count: request.body.page_count
        });
        response.status(201).json({
            message:"Libro creado exitosamente",    
            status:201,
            data: createBook
        })
    }catch(error){
        response.status(500).json({
            message:"Error al crear libro",
            status:500,
            error: error.message
        })
    }
}

let getBookByISBN = async(request, response) => {
    try{
        const { isbn } = request.params;

        let book = await Books.findOne({
            where: { isbn },
            include: [
                {
                    model: Autores,
                    attributes: ['firstName', 'lastName']
                }
            ]
        });

        if(!book){
            return response.status(404).json({
                message: "No se encontró un libro con ese ISBN",
                status: 404
            })
        }

        response.status(200).json({
            message: "Libro encontrado exitosamente",
            status: 200,
            data: book
        })
    }catch(error){
        response.status(500).json({
            message: "Error al obtener el libro",
            status: 500,
            error: error.message
        })
    }
}

module.exports={
    newBook,
    getBookByISBN
}