import express from "express";
import cors from 'cors';
import cookie from 'cookie-parser';
import { connectDB } from "create-user";
import getRoutes from './routes/getRoutes';

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
app.use('/', getRoutes);

// // Start the server
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

export { }