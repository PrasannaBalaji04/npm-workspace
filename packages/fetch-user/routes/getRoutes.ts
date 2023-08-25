import express from 'express';
import { employeeRoutes } from 'create-user';
import { signUp } from 'create-user';
const router = express.Router();
const {
  fetchEmployee,
  fetchEmployees
} = require('../controllers/employeeController');
employeeRoutes.post('/register', signUp);
router.get('/getemployees', fetchEmployees);
router.get('/:id', fetchEmployee);
export default router;
