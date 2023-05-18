const express = require("express");
const employeeController = require("../controllers/employeecontroller");
const router = express.Router();

router.route("/").post(employeeController.createEmployees);
router.route("/").get(employeeController.getEmployees);
router.route("/:id").get(employeeController.getEmployee);
router.route("/:id").patch(employeeController.updateEmployee);
router.route("/:id").delete(employeeController.deleteEmployee);

module.exports = router;
