const mysql = require('mysql2')

class Db {
    constructor() {
    
        // Конфиг для запуска pool
        this.mysqlConfig = {
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'learnsql',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        }

        // Первое подключение
        this.connectToDb()
        
        // Переподключение, когда со временем соединение будет прервано
        this.pool.on('error', err => {
            if(err.code === 'PROTOCOL_CONNECTION_LOST') {
                this.connectToDb()                        
            } else {                                      
            throw err                               
            }
        })
    

    }

    // Запрос к Бд с Promise
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

    // Создание подключения pool
    connectToDb() {
        this.pool = mysql.createPool(this.mysqlConfig)
    }

}


module.exports = new Db()