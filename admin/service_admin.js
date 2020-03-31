let db = require('../config/connection');

module.exports = {
    serviceAddAdmin: (data, callBack) => {
        db.query(
            `insert into Admin(nm_Admin,email,password, jabatan, tlpn_Admin)
          values (?,?,?,?,?)`,
            [
                data.nm_Admin,
                data.email,
                data.password,
                data.jabatan,
                data.tlpn_Admin
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
    serviceGetAdmin: callBack => {
        db.query(`select * from Admin`, [], (err, results, fields) => {
            if (err) {
                return callBack(err);
            } else {
                return callBack(null, results);
            }
        });
    },
    serviceGetAdminById: (kd_Admin, callBack) => {
        db.query(
            `select * from Admin where kd_Admin = ?`,
            [kd_Admin],
            (err, resuls, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, resuls[0]);
                }
            }
        );
    },
    serviceUpdateAdmin: (data, callBack) => {
        db.query(
            `update Admin set nm_Admin=?, email=?,password=?, jabatan=?, tlpn_Admin=? where kd_Admin=?`,
            [
                data.nm_Admin,
                data.email,
                data.password,
                data.jabatan,
                data.tlpn_Admin,
                data.kd_Admin
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
    serviceDeleteAdmin: (data, callBack) => {
        db.query(`select * from Admin where kd_Admin=?`,
            [data.kd_Admin],
            (err, result) => {
                if (err) {
                    callBack(err)
                } if (!result) {
                    callBack(result)
                } else {
                    db.query(`delete from Admin where kd_Admin=?`,
                        [data.kd_Admin])
                    return callBack(null, result[0])
                }
            })
    },
    serviceGetAdminByEmail: (email, callBack) => {
        db.query(
            `select kd_Admin, nm_Admin, email, password from Admin where email = ?`,
            [email],
            (err, results, fields) => {
                if (err) {
                    return callBack(err);
                } else {
                    return callBack(null, results[0]);
                }
            }
        );
    }
};
