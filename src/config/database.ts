import { Sequelize } from 'sequelize-typescript';
import dotenv from 'dotenv';
import { UserModel } from '../models/user.model'; // ✅ Explicitly import models

dotenv.config();

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  logging: false,
  models: [UserModel], // ✅ Explicitly define models here
});

export default sequelize;
