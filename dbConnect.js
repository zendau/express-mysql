const mysql = require('mysql2')

class Db {
    constructor() {
    
        this.mysqlConfig = {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'learnsql',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }

        this.connectToDb()
            
        this.pool.on('error', err => {
            if(err.code === 'PROTOCOL_CONNECTION_LOST') {
                this.connectToDb()                        
            } else {                                      
            throw err                               
            }
        })
    

    }

    query(query, data) {

        return new Promise((res, rej) => {

            try {

                this.pool.execute(query, data, (err, data) => {


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

    connectToDb() {
        this.pool = mysql.createConnection(this.mysqlConfig)
    }

}


module.exports = new Db()