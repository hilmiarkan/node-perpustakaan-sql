require("dotenv").config();
let express = require("express");
let app = express();
let anggotaRouter = require("./anggota/router_users");
let bukuRouter = require("./buku/router_books");
let petugasRoter = require("./petugas/router_admin");
let pinjam = require("./peminjam/router_peminjaman");

app.use(express.json());
app.use("/users", anggotaRouter);
app.use("/books", bukuRouter);
app.use("/admin", petugasRoter);
app.use("/peminjaman", pinjam);

app.listen(process.env.APP_PORT, () => {
    console.error("running on port " + process.env.APP_PORT);
});
