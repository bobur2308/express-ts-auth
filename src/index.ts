import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import sequelize from './config/database';
import authRouter from './routes/auth.router'

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.use('/api/users', authRouter)



const port = process.env.PORT || 5000;
app.listen(port, () => {
  // Sync database
  sequelize.sync({ force: false }) // Change to 'true' to drop and recreate tables
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Database connection error:', err));


  console.log(`Server is running on port ${port}`);
});
