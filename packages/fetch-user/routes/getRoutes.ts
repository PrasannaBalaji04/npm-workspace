import express from 'express';
import { signUp } from 'create-user';
const router = express.Router();
const {
  fetchEmployee,
  fetchEmployees
} = require('../controllers/employeeController');
router.post('/register', signUp);
router.get('/getemployees', fetchEmployees);
router.get('/:id', fetchEmployee);
export default router;
