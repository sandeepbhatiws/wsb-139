const userModal = require("../../modals/user");
const bcrypt = require('bcrypt');
const { request, response } = require("express");
var jwt = require('jsonwebtoken');
const saltRounds = 10;
var secretkey = '1234567890';
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
      user: "hvs32531@gmail.com",
      pass: "ixymarlqbiywiods",
    },
});

// For Add Data
exports.register = async (request, response) => {

    userData = request.body;

    if (request.body.password) {
        userData.password = bcrypt.hashSync(request.body.password, saltRounds);
    }

    userData.user_type = 'user';

    const data = new userModal(userData)

    await data.save()
        .then(async (result) => {

            var token = await jwt.sign({ data: result }, secretkey);

            console.log(token);

            const resp = {
                status: true,
                message: 'user register successfully !!',
                token: token,
                data: result,
            }
            response.send(resp);
        })
        .catch((error) => {

            console.log(error);
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
        email: request.body.email,
        user_type: 'user',
        deleted_at: null
    })
        .then((result) => {
            if (result != null) {

                if (bcrypt.compareSync(request.body.password, result.password)) {
                    if (result.status == true) {
                        var token = jwt.sign({ data: result }, secretkey, { expiresIn: "1day" });
                        const resp = {
                            status: true,
                            message: 'User login successfully !!',
                            token: token,
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
                    message: 'Email id or password is incorrect !!',
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

exports.viewProfile = async (request, response) => {

    var token = request.headers.authorization.split(' ');
    var verifyToken = await jwt.verify(token[1], secretkey);

    await userModal.findById(verifyToken.data._id)
        .then((result) => {
            if (result) {
                const resp = {
                    status: true,
                    message: 'Record found successfully !!',
                    base_url: `${request.protocol}://${request.get('host')}/uploads/users/`,
                    data: result,
                }
                response.send(resp);
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

// For Update Profile
exports.updateProfile = async (request, response) => {

    var token = request.headers.authorization.split(' ');
    var verifyToken = await jwt.verify(token[1], secretkey);

    const data = request.body;

    if (request.file) {
        data.image = request.file.filename;
    }

    await userModal.updateOne(
        {
            _id: verifyToken.data._id
        },
        {
            $set: data
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Record update successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for (var value in error.errors) {
            console.log(value);
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

// For Change Password
exports.changePassword = async (request, response) => {

    var token = request.headers.authorization.split(' ');
    var verifyToken = await jwt.verify(token[1], secretkey);

    if (request.body.current_password == request.body.new_password) {
        const resp = {
            status: false,
            message: 'New password must be different from current password',
            data: '',
        }
        response.send(resp);
    }

    if (request.body.new_password != request.body.confirm_password) {
        const resp = {
            status: false,
            message: 'New password and confirm password must be same',
            data: '',
        }
        response.send(resp);
    }

    await userModal.updateOne(
        {
            _id: verifyToken.data._id
        },
        {
            $set: {
                password: bcrypt.hashSync(request.body.confirm_password, saltRounds)
            }
        }
    ).then((result) => {
        var resp = {
            status: true,
            message: 'Change Password successfully !!',
            data: result
        }

        response.send(resp);

    }).catch((error) => {
        var errormessages = [];

        for (var value in error.errors) {
            console.log(value);
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

// Forgot password
exports.forgotPassword = async (request, response) => {

    await userModal.findOne({
        email: request.body.email,
        deleted_at: null,
    })
    .then(async(result) => {
        if (result) {

            var token = await jwt.sign({ data: request.body.email }, secretkey);

            try {
                const info = await transporter.sendMail({
                    from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
                    to: request.body.email, // list of receivers
                    subject: "Forgot Password", // Subject line
                    // text: "Hello world?", // plain text body
                    html: `<b>Hi ${ result.name },</b>
                        <p>We received a request to reset your password. Click the button below to choose a new password:</p>

                        <p>👉 Reset Password - http://localhost:3000/reset-password/${token}</p>

                        <p>If you didn’t request a password reset, you can safely ignore this email. Your account will remain secure.</p>

                        <p>This link will expire in 30 minutes for your security.</p>

                        Thanks, <br>
                        The Team`, // html body
                });
            } catch (error) {
                console.log(error);
            }

            const resp = {
                status: true,
                message: 'Email send successfully !!',
                data: '',
            }
            response.send(resp);
        } else {
            const resp = {
                status: false,
                message: 'Email id does not exit !!',
                data: null,
            }
            response.send(resp);
        }
    })
    .catch((error) => {
        const resp = {
            status: false,
            message: 'Something went wrong !!',
            data: '',
        }
        response.send(resp);
    })
}

// Reset Password
exports.resetPassword = async (request, response) => {

}