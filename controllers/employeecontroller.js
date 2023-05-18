const express = require("express");
const router = express.Router();
const Employee = require("../models/employeeModel");
const mongoose = require("mongoose");

// Create an employee
exports.createEmployees = async (req, res) => {
  try {
    const { id, name, title, department } = req.body;
    const employee = new Employee({ id, name, title, department });
    await employee.save();
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all employees from db
exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    if (!employees) {
      res.status(200).json({ message: "No Registred employess" });
    }
    res.json({ data: employees });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get one employee by id
exports.getEmployee = async (req, res) => {
  try {
    const employeeId = req.params.id;
    console.log("id =" + employeeId);
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ data: employee });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const { name, title, department } = req.body;
    const employee = await Employee.findOne({ _id: req.params.id });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    employee.name = name;
    employee.title = title;
    employee.department = department;
    await employee.save();
    res.json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Remove an employee
exports.deleteEmployee = async (req, res) => {
  try {
    const employee = await Employee.findOneAndRemove({ _id: req.params.id });
    //const employee = await Employee.findOneAndRemove({ id: req.params.id });
    if (!employee) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee removed successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// module.exports = router;
