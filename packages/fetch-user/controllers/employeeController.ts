import { log } from 'console';
import { Employee } from 'create-user';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import fetch from 'node-fetch';

async function fetchEmployees(req: Request, res: Response): Promise<Response | void> {
  try {
    const employees = await Employee.find();
    res.json({ success: true, data: employees });
  } catch (err) {
    if (err instanceof Error) {
      console.error('An error occurred:', err.message);
      res.status(500).json({ success: false, err: err.message });
    } else {
      console.error('An unknown error occurred:', err);
    }
  }
}

async function fetchEmployee(req: Request, res: Response): Promise<Response | void> {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).json({ success: false, error: "Id field is invalid" });
    } else {
      const employee = await Employee.findById(req.params.id);
      res.json({ success: true, data: employee });

    }
  } catch (err) {
    if (err instanceof Error) {
      console.error('An error occurred:', err.message);
      res.status(500).json({ success: false, err: err.message });
    } else {
      console.error('An unknown error occurred:', err);
    }
  }
}

// interface UserDetails {
//   name: String,
//   email: String,
//   password: String,
//   DoB: Date,
//   token: String,
//   mobile: String
// }

module.exports = {
  fetchEmployees,
  fetchEmployee
}