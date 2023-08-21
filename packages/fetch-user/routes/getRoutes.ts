import express from 'express';
import { authenticateToken } from "../middlewares/authenticate"
const router = express.Router();
const {
  fetchEmployee,
  fetchEmployees
} = require('../controllers/employeeController');

router.get('/getemployees', fetchEmployees);
router.get('/:id', fetchEmployee);
export default router;
