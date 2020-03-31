let {
    controllerAddBook,
    controllerGetBook,
    controllerGetBookById,
    controllerUpdateBook,
    controllerDeleteBook
} = require("./controller_books");

let router = require("express").Router();

router.post("/tambahBook", controllerAddBook);
router.get("/ambilBook", controllerGetBook);
router.get("/:id", controllerGetBookById);
router.patch("/editBook", controllerUpdateBook);
router.delete("/hapusBook", controllerDeleteBook);


module.exports = router;
