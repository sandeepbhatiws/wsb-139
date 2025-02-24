module.exports = (request,response,next) => {
    if(!request.query.apikey){
        const results = {
            status: false,
            message: 'key is required !!',
            data: null
        }
        response.send(results);
    } else if(request.query.apikey != 123456789){
        const results = {
            status: false,
            message: 'Key is invalid !!',
            data: null
        }
        response.send(results);
    } else {
        next();
    }
    
}