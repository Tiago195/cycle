const express = require("express")
const mysql = require('mysql2/promise');
const random = require('random-name')

const connection = mysql.createPool({
  host: 'db',
  user: 'root',
  database: 'nodedb',
  password: 'tutu'
});

(async () => {
  await connection.query(`
    CREATE TABLE IF NOT EXISTS
      people (
        id int unsigned NOT NULL AUTO_INCREMENT,
        name varchar(255) NOT NULL,
        PRIMARY KEY (id)
      )
  `)
})()

const app = express()

app.get("/", async (req, res) => {
  const name = `${random.first()} ${random.last()}`

  const insertQuery = 'insert into people (name) values (?)'

  const selectQuery = 'select * from people'

  await connection.query(insertQuery, [name])

  const [allNames] = await connection.query(selectQuery)

  const response = `
    <h1>Full Cycle Rocks!</h1>
    <ul>
      ${allNames.map(({name}) => `<li>${name}</li>`).join('')}
    </ul>
  `

  res.send(response)
})

app.listen(3000, () => console.log("rodando na porta 3000"))
