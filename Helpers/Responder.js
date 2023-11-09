class Responder{

    success(response, data , title){
        return response.status(200).json({
            success : true,
            title , data
        })
    }

    created(response, data , title){
        return response.status(201).json({
            success : true,
            title , data
        })
    }

    error(response, error , title){
        return response.status(500).json({
            success : false,
            title , error
        })
    }

}

export default new Responder();