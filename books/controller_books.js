let {
    serviceAddBooks,
    serviceGetBooks,
    serviceGetBooksById,
    serviceUpdateBooks,
    serviceDeleteBooks
} = require("./Book.service");

module.exports = {
    controllerAddBook: (req, res) => {
        let body = req.body;
        serviceAddBooks(body, (err, results) => {
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
    controllerGetBookById: (req, res) => {
        let kd_Book = req.params.id;
        serviceGetBooksById(kd_Book, (err, results) => {
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
    controllerGetBook: (req, res) => {
        serviceGetBooks((err, results) => {
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
    controllerUpdateBook: (req, res) => {
        let body = req.body;
        serviceUpdateBooks(body, (err, results) => {
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
    controllerDeleteBook: (req, res) => {
        let body = req.body
        serviceDeleteBooks(body, (err, results) => {
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
    }
};
