let {
    controllerAddAdmin,
    controllerGetAdmin,
    controllerGetAdminById,
    controllerUpdateAdmin,
    controllerDeleteAdmin,
    controllerLogin
} = require("./controller_admin");

let router = require("express").Router();
let { checkToken } = require("../auth/token");

router.post("/tambahAdmin", controllerAddAdmin);
router.get("/ambilAdmin", checkToken, controllerGetAdmin);
router.get("/:id", checkToken, controllerGetAdminById);
router.patch("/editAdmin", checkToken, controllerUpdateAdmin);
router.delete("/hapusAdmin", checkToken, controllerDeleteAdmin);
router.post("/login", controllerLogin);


module.exports = router;
