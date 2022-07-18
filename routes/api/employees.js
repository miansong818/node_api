/* eslint-disable new-cap */
const express = require('express');
const router = express.Router();
const employeeController = require('../../controller/employeesController');

router.route('/employees')
    .get(employeeController.getAllEmployees)
    .post(employeeController.createEmployee)
    .put(employeeController.updateEmployee)
    .delete(employeeController.deleteEmployee);

router.route('/employee/:id')
    .get(employeeController.getAllEmployeeById);

module.exports = router;
