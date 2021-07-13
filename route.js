const express = require('express')
const router = express.Router()

const db = require("./dbConnect")

router.get('/', (req, res) => {
    // one to many
    db.query("SELECT ps.firstName, ps.lastName, ps.age, p.phoneNumber FROM phone p INNER JOIN person ps ON  p.personId = ps.id;")
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log("e1", error)
            res.status(500).send("Server error")
        })
})

router.get('/many', (req, res) => {
    // many to many
    db.query("SELECT e.employeeName, e.employeeIdAge, p.positionName FROM employeeidpositions ep INNER JOIN employee e ON ep.employeeIdId = e.employeeId INNER JOIN position p ON ep.positionId = p.postionId;")
        .then(data => {
            res.status(200).json(data)
        })
        .catch(error => {
            console.log("e1", error)
            res.status(500).send("Server error")
        })
})

router.post("/addPeople", (req, res) => {

    const data = Object.values(req.body)

    db.query("INSERT INTO person (`firstName`, `lastName`, `age`) VALUES (?, ?, ?)", data)
        .then(data => {
            res.status(200).json("User is registered")
        })
        .catch(error => {
            console.log("e1", error)
            res.status(500).send("Server error")
    })

})


module.exports = router