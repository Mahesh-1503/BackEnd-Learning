const Employee = require('../models/Employee')


//POST Method Code (CREATE)
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

//GET Method Code (READ)
const getEmployees = async(req,res) => {
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }catch(error){
        console.log(`There is an error: ${error}`)
        res.status(500).json({message: "server error"})
    }
}

//GET Method To GET Single Employee Data With ID (READ)
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

//PUT METHOD  (UPDATE)
const updateEmployee = async(req,res) => {
    try{

        const {name, email, phone, city} = req.body

        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            {name, email, phone, city},
            // { new: true, runValidators: true } // ✅ Returns updated doc & validates

        ) 
        if(!myEmployee){
            return res.status(404).json({message:'EMPLOYEE NOT FOUND'})
        }
        res.status(200).json(myEmployee)

    }catch(error){
        console.error(`There is an error:`, error)
        res.status(500).json({message:'SERVER ERROR'})
    }
}

//DELETE METHOD (DELETE)

const deleteEmployee = async(req, res) => {
    try{

        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.status(204).send()

    }catch(error){
        console.error(`There is an error:`, error)
        res.status(500).json({message:'SERVER ERROR'})
    }
}


module.exports = {createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee}