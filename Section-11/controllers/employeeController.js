const Employee = require('../models/Employee')


//POST Method Code
const createEmployee = async(req,res) => {
    try{
        const {name, email, phone, city} = req.body

        const employee = new Employee({
            name,
            email,
            phone,
            city
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error){
        console.log(`Error: ${error}`)
        res.status(500).json({message:'Server Error' })
    }
}

//GET Method Code
const getEmployees = async(req,res) => {
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.log(`There is an error: ${error}`)
        res.status(500).json({message: "server error"})
    }
}

//GET Method To GET Single Employee Data With ID
const singleEmployee = async(req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)

        if(!employee){
            return res.status(404).json({message: "Employee not found"})
        }

        res.status(200).json(employee)
    }catch(error){
        console.error(`there is an error: ${error} `)
        res.status(500).json({message: `SERVER ERROR`})
    }
}

module.exports = {createEmployee, getEmployees, singleEmployee}