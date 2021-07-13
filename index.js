const express = require('express')
const app = express()
const port = 3000

const mainRoute = require("./route")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use("/api", mainRoute)



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})