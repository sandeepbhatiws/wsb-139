const userModal = require("../../modals/user");
const bcrypt = require('bcrypt');
const saltRounds = 10;

// For Add Data
exports.register = async (request, response) => {

    userData = request.body;

    if(request.body.password){
        userData.password = bcrypt.hashSync(request.body.password,saltRounds);
    }

    userData.user_type = 'user';

    const data = new userModal(userData)

    await data.save()
    .then((result) => {
        const resp = {
            status: true,
            message: 'user created successfully !!',
            data: result,
        }
        response.send(resp);
    })
    .catch((error) => {
        var errormessages = [];

        for (var value in error.errors) {
            errormessages.push(error.errors[value].message);
        }

        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
            error: errormessages
        }
        response.send(resp);
    })
}

// For Login
exports.login = async (request, response) => {

    await userModal.findOne({
        email : request.body.email,
        user_type : 'user',        
    })
    .then((result) => {
        if (result != null) {

            if(bcrypt.compareSync(request.body.password, result.password)){
                if(result.status == true){
                    const resp = {
                        status: true,
                        message: 'User found successfully !!',
                        data: result,
                    }
                    response.send(resp);
                } else {
                    const resp = {
                        status: false,
                        message: 'Account has been deactivated.',
                        data: null,
                    }
                    response.send(resp);
                }
            } else {
                const resp = {
                    status: false,
                    message: 'Password is incorrect.',
                    data: null,
                }
                response.send(resp);
            }

            
        } else {
            const resp = {
                status: false,
                message: 'No record found !!',
                data: [],
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
            error: error
        }
        response.send(resp);
    })
}

// const generateUniqueSlug = async (Model, baseSlug) => {
//     let slug = baseSlug;
//     let count = 0;
  
//     // Loop to find unique slug
//     while (await Model.findOne({ slug })) {
//       count++;
//       slug = `${baseSlug}-${count}`;
//     }
  
//     return slug;
// };

// // For View 
// exports.index = async (request, response) => {

//     var condition = {
//         deleted_at: null
//     }

//     if (request.body.name != '' && request.body.name != undefined) {
//         // var nameRegex = new RegExp("^" + request.body.name);
//         var nameRegex = new RegExp(request.body.name, "i");
//         condition.name = nameRegex;
//     }

//     await parentCategoryModal.find(condition)
//         .select('name image status sub_category_id order')
//         .populate({
//             path : 'sub_category_id',
//             select : 'name status'
//         })
//         .sort(
//             {
//                 _id: 'desc'
//             }
//         )
//         .then((result) => {
//             if (result.length > 0) {
//                 const resp = {
//                     status: true,
//                     message: 'Record found successfully !!',
//                     base_url : `${request.protocol}://${request.get('host')}/uploads/categories/`,
//                     data: result,
//                 }
//                 response.send(resp);
//             } else {
//                 const resp = {
//                     status: false,
//                     message: 'No record found !!',
//                     data: [],
//                 }
//                 response.send(resp);
//             }
//         })
//         .catch((error) => {
//             const resp = {
//                 status: false,
//                 message: 'Something went wrong !!',
//                 data: '',
//                 error: error
//             }
//             response.send(resp);
//         })
// }



// // For Update
// exports.update = async (request, response) => {

//     var condition = {};

//     if (request.body.name) {
//         condition.name = request.body.name;
//     }

//     if(request.file){
//         condition.image = request.file.filename;
//     }

//     if (request.body.order) {
//         condition.order = request.body.order;
//     }

//     await parentCategoryModal.updateOne(
//         {
//             _id: request.params.id
//         },
//         {
//             $set: condition
//         }
//     ).then((result) => {
//         var resp = {
//             status: true,
//             message: 'Record update successfully !!',
//             data: result
//         }

//         response.send(resp);

//     }).catch((error) => {
//         var errormessages = [];

//         for (var value in error.errors) {
//             console.log(value);
//             errormessages.push(error.errors[value].message);
//         }

//         const resp = {
//             status: false,
//             message: 'Something went wrong !!',
//             data: '',
//             error: errormessages
//         }
//         response.send(resp);
//     })
// }

// // For Delete
// exports.destroy = async (request, response) => {

//     console.log(request.body.ids)

//     await parentCategoryModal.updateMany(
//         {
//             _id: {
//                 $in: request.body.ids
//             }
//         },
//         {
//             $set: {
//                 deleted_at: Date.now(),
//             }
//         }
//     ).then((result) => {
//         var resp = {
//             status: true,
//             message: 'Record deleted successfully !!',
//             data: result
//         }

//         response.send(resp);

//     }).catch((error) => {

//         console.log(error);
//         var errormessages = [];

//         for (var value in error.errors) {
//             console.log(value);
//             errormessages.push(error.errors[value].message);
//         }

//         const resp = {
//             status: false,
//             message: 'Something went wrong !!',
//             data: '',
//             error: errormessages
//         }
//         response.send(resp);
//     })
// }

// // For Change Status
// exports.changeStatus = async (request, response) => {
//     await parentCategoryModal.updateMany(
//         { _id: { $in: request.body.ids } },
//         [
//             { 
//                 $set: { 
//                     status: { 
//                         $not: "$status" 
//                     } 
//                 } 
//             }
//         ]
//     ).then((result) => {
//         var resp = {
//             status: true,
//             message: 'Change status successfully !!',
//             data: result
//         }

//         response.send(resp);

//     }).catch((error) => {
//         var errormessages = [];

//         console.log(error);

//         for (var value in error.errors) {
//             console.log(value);
//             errormessages.push(error.errors[value].message);
//         }

//         const resp = {
//             status: false,
//             message: 'Something went wrong !!',
//             data: '',
//             error: errormessages
//         }
//         response.send(resp);
//     })
// }