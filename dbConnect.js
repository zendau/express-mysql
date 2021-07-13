const mysql = require('mysql2')

class Db {
    constructor() {
        
    this.pool = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'learnsql',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })


    

    }

    query(query) {

        return new Promise((res, rej) => {

            try {

                this.pool.query(query, (err, data) => {


                    if (err) {
                        rej(err.sqlMessage)
                    }
    
                    res(data)
    
                })
            } catch (e) {
                rej(e.message)
            }
        })
        
    }
}


module.exports = new Db()