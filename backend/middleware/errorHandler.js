const {constant} = require('../constant'); 

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode?res.statusCode:constant.INTERNAL_SERVER_ERROR; 
    
    switch(statusCode){
        case constant.VALIDATION_ERROR: 
            res.json({
                title: 'Validation Error',
                message: err.message, 
                statusCode: statusCode, 
                stackTrace: err.stack
            });
            break; 
        
        case constant.UNAUTHORIZED: 
            res.json({
                title: 'Unauthorized',
                message: err.message, 
                statusCode: statusCode, 
                stackTrace: err.stack
            });
            break;

        case constant.FORBIDDEN:
            res.json({
                title: 'Forbidden',
                message: err.message,
                statusCode: statusCode,
                stackTrace: err.stack
            })
            break;

        case constant.NOT_FOUND:
            res.json({
                title: 'Not Found',
                message: err.message,
                statusCode: statusCode,
                stackTrace: err.stack
            })

        case constant.INTERNAL_SERVER_ERROR:
            res.json({
                title: 'Internal Server Error',
                message: err.message,
                statusCode: statusCode,
                stackTrace: err.stack
            })
            break; 

        default: 
            console.log('No error found'); 
            break; 
    }
}