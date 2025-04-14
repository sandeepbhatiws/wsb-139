var secretkey = '1234567890';
var jwt = require('jsonwebtoken');

// For View 
exports.index = async (request, response) => {

    if (request.headers.authorization) {

        try {
            var token = request.headers.authorization.split(' ');
            var verifyToken = await jwt.verify(token[1], secretkey);

            if (verifyToken) {
                const resp = {
                    status: true,
                }
                response.send(resp);
            } else {
                const resp = {
                    status: false,
                }
                response.send(resp);
            }
        } catch (error) {
            const resp = {
                status: false,
            }
            response.send(resp);
        }
    } else {
        const resp = {
            status: false,
        }
        response.send(resp);
    }
}