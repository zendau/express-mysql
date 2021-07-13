const express = require('express')
const router = express.Router()

const db = require("./dbConnect")

router.get('/', function (req, res) {
    db.query("SELECT ps.firstName, ps.lastName, ps.age, p.phoneNumber FROM phone p INNER JOIN person ps ON  p.personId = ps.id;")
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log("e1", error)
            res.status(500).send("Server error")
        })
})


module.exports = router