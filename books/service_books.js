let db = require('../config/connection');

module.exports = {
    serviceAddBooks: (data, callBack) => {
        db.query(
            `insert into Book(nm_Book, stok, pengarang, penerbit, tarif, durasi)
          values (?,?,?,?,?,?)`,
            [
                data.nm_Book,
                data.stok,
                data.pengarang,
                data.penerbit,
                data.tarif,
                data.durasi
            ],
            (error, result, fields) => {
                if (error) {
                    return callBack(error);
                } else {
                    return callBack(null, result);
                }
            }
        );
    },
    serviceGetBooks: callBack => {
        db.query(`select * from Book`, [], (err, results, fields) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
    serviceGetBooksById: (kd_Book, callBack) => {
        db.query(
            `select * from Book where kd_Book = ?`,
            [kd_Book],
            (err, resuls, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, resuls[0]);
                }
            }
        );
    },
    serviceUpdateBooks: (data, callBack) => {
        db.query(
            `update Book set stok=?, tarif=? ,durasi=? where kd_Book=?`,
            [
                data.stok,
                data.tarif,
                data.durasi,
                data.kd_Book
            ],
            (err, results, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results);
                }
            }
        );
    },
    serviceDeleteBooks: (data, callBack) => {
        db.query(`select * from Book where kd_Book=?`,
            [data.kd_Book],
            (err, result) => {
                if (err) {
                    callBack(err)
                } if (!result) {
                    callBack(result)
                } else {
                    db.query(`delete from Book where kd_Book=?`,
                        [data.kd_Book])
                    return callBack(null, result[0])
                }
            })
    }
};
