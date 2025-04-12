var secretkey = '1234567890';
var jwt = require('jsonwebtoken');

exports.verifyToken = async(request, response, next) => {

    if(request.headers.authorization){
        
        try {
            var token = request.headers.authorization.split(' ');
            var verifyToken = await jwt.verify(token[1], secretkey);

            if(verifyToken){
                next();
            } else {
                const resp = {
                    status: false,
                    message: 'Something went wrong !!',
                    token_status : false,
                    data: '',
                }
                response.send(resp);
            }
        } catch (error) {
            const resp = {
                status: false,
                message: 'Something went wrong !!',
                data: error,
            }
            response.send(resp);
        }
    } else {
        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
        }
        response.send(resp);
    }    
}