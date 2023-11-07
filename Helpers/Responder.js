class Responder{

    success(response, data , message="در خواست با موفقیت انجام شد ."){
        return response.status(200).json({
            success : true,
            message , data
        })
    }

    created(response, data , message="اطلاعات با موفقیت ثبت شد ."){
        return response.status(201).json({
            success : true,
            message , data
        })
    }

    error(response, error , message="درخواست با مشکل مواجه شد لطفا محددا تلاش کنید ."){
        return response.status(500).json({
            success : false,
            message , error
        })
    }

}

export default new Responder();