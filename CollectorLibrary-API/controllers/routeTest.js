//recibo un request y doy un response. Tambien se puede escribir como req y res
let getTest = async(request,response)=>{
    response.json({
        message:"Este es un test de un endpoint",
        hora:"18:14 del 18 de febrero del 2026"
    })
}

const postTest = async()=>{

}

module.exports={
    getTest,
    postTest
    
}
