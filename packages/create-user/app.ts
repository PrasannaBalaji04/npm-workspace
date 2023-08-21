import express from "express";
import cors from 'cors';
import connectDB from "./config/db";
import Employee from "./models/employee"
import { validateEmail, validatePassword } from "./services/validators";
import cookie from 'cookie-parser';
import employeeRoutes from './routes/employeeRoutes';

const app = express();

app.use(cors(
  {
    origin: true,
    credentials: true
  }
));
app.use(cookie());

app.use(express.json());

// Routes
app.use('/', employeeRoutes);

export { connectDB, employeeRoutes, Employee, validateEmail, validatePassword }