const productModal = require("../../modals/product");

// For View 
exports.index = async(request,response) => {

    var totalRecords = await productModal.find({ deleted_at: null }).countDocuments();

    var totalProducts = await productModal.aggregate([
        { $count : 'totalRecords' }
    ]);

    var totalProductRecords = await productModal.aggregate(
        [
            {
                $group:{
                    _id: "",
                    minPrice: { $min: "$discount_price" },
                    maxPrice: { $max: "$discount_price" },
                    avgPrice: { $avg: "$discount_price" },
                    sumPrice: { $sum: "$discount_price" }
                }
            }
        ]
     )

    
    const resp = {
        status : true,
        message : 'Record found successfully !!',
        total_records : totalRecords, 
        total_products : totalProducts[0].totalRecords,
        totalProductRecords : totalProductRecords
    }
    response.send(resp);
}