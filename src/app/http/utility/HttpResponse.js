export const ResponseSuccess = (res, statusCode = 200, message = '', data= {}) => {
    return res.status(statusCode).send({
        status: true,
        statusCode,
        message,
        data,
    });
}

export const ResponseError = (res, statusCode = 500, message= '') => {

    return res.status(statusCode).send({
        status: false,
        statusCode,
        message,
        data: {}
    });
}