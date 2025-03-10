const brandModal = require("../../modals/brand");

// For View 
exports.index = async(request,response) => {

    var page = request.body.page ? request.body.page : 1;
    var limit = request.body.limit ? request.body.limit : 15;
    var skip = (page -1) * limit;

    var total_records = await brandModal.find(
        { 
            // price : {
            //     $gte : request.body.price
            // },
            status : true, 
            deleted_at : null 
        }).select('name price order status');

    await brandModal.find(
        { 
            // price : {
            //     $gte : request.body.price
            // },
            status : true, 
            deleted_at : null 
        }).select('name price order status')
        .sort({ order : 'asc', _id : 'desc' })
        .limit(limit)
        .skip(skip)



    .then((result) => {
        if(result.length > 0){
            const resp = {
                status : true,
                message : 'Record found successfully !!',
                data : result,
                total_records : total_records.length,
                total_pages : total_records.length / limit
            }
            response.send(resp);
        } else {
            const resp = {
                status : false,
                message : 'No record found !!',
                data : [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status : false,
            message : 'Something went wrong !!',
            data : '',
            error : error
        }
        response.send(resp);
    })
}