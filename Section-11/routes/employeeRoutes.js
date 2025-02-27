const express = require('express')

const router = express.Router()

const employeeController = require('../controllers/employeeController')

const Employee = require('../models/Employee')

//get post put/patch delete

router.post('/add-emp', employeeController.createEmployee)//POST
router.get('/allemployees', employeeController.getEmployees)//GET all emp DATA
router.get('/employee/:id',employeeController.singleEmployee )//GET single emp DATA
router.put('/update/:id', employeeController.updateEmployee)//PUT
router.delete('/delete/:id', employeeController.deleteEmployee) //DELETE

module.exports = router