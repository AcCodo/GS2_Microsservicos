const mysql2 = require('mysql2/promise')

connectionData = {
    host: 'src-database_mysql-1',
    user: 'root',
    password: '123',
    database: 'fiap'
}

exports.getIndicadores = async (id) => {
    const query = "SELECT * FROM ods WHERE codigo = '" + id + "';"
    console.log(query)
    
    return mysql2.createConnection(connectionData)
        .then(conn => conn.query(query))
        .then(([rows, fields]) => rows)
}

exports.getObjetivos = async (id) => {
    const query = "SELECT * FROM objetivos;"
    
    return mysql2.createConnection(connectionData)
        .then(conn => conn.query(query))
        .then(([rows, fields]) => rows)
}

exports.getDistictDescricoes = async () => {
    const query = "SELECT DISTINCT codigo, descricao FROM ods;"

    return mysql2.createConnection(connectionData)
        .then(conn => conn.query(query))
        .then(([rows, fields]) => rows)
}
