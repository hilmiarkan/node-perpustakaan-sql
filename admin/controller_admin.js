let {
    serviceAddAdmin,
    serviceGetAdmin,
    serviceGetAdminById,
    serviceUpdateAdmin,
    serviceDeleteAdmin,
    serviceGetAdminByEmail
} = require("./service_admin");
let { genSaltSync, hashSync, compareSync } = require("bcrypt");
let { sign } = require("jsonwebtoken");

module.exports = {
    controllerAddAdmin: (req, res) => {
        let body = req.body;
        let salt = genSaltSync(10);
        body.password = hashSync(`${body.password}`, salt);
        serviceAddAdmin(body, (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    succes: 0,
                    message: "database connection error"
                });
            } else {
                return res.status(200).json({
                    succes: 1,
                    data: results
                });
            }
        });
    },
    controllerGetAdminById: (req, res) => {
        let kd_Admin = req.params.id;
        serviceGetAdminById(kd_Admin, (err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Record not found"
                });
            } else {
                return res.json({
                    succes: 1,
                    data: results
                });
            }
        });
    },
    controllerGetAdmin: (req, res) => {
        serviceGetAdmin((err, results) => {
            if (err) {
                console.error(err);
                return;
            } else {
                return res.json({
                    succes: 1,
                    data: results
                });
            }
        });
    },
    controllerUpdateAdmin: (req, res) => {
        let body = req.body;
        let salt = genSaltSync(10);
        body.password = hashSync(body.password, salt);
        serviceUpdateAdmin(body, (err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "update failed"
                });
            } else {
                return res.json({
                    succes: 1,
                    message: "update lur"
                });
            }
        });
    },
    controllerDeleteAdmin: (req, res) => {
        let data = req.body
        serviceDeleteAdmin(data, (err, results) => {
            if (err) {
                console.error(err);
                return;
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Record not found"
                });
            } else {
                return res.json({
                    succes: 1,
                    message: "user delete succesfuly"
                });
            }
        });
    },
    controllerLogin: (req, res) => {
        let body = req.body;
        serviceGetAdminByEmail(body.email, (err, results) => {
            if (err) {
                console.error(err);
            }
            if (!results) {
                return res.json({
                    succes: 0,
                    message: "Invalid email or password"
                });
            }
            let result = compareSync(body.password, results.password);

            if (result) {
                results.password = undefined;
                let jsonwebtoken = sign({ result: results }, "secretkey", {
                    expiresIn: "1h"
                });
                return res.json({
                    succes: 1,
                    message: "login succesfuly, your Account Already Use",
                    account: results,
                    token: jsonwebtoken
                });
            } else {
                return res.json({
                    succes: 0,
                    message: "email or password invalid"
                });
            }
        });
    }
};
