import  bcrypt  from 'bcryptjs';
import { Request, Response } from "express";
import { handleError } from "../helpers/error.handler";
import { UserModel } from "../models/user.model";


class UserController{
  async GetAllUsers(req:Request,res:Response):Promise<void>{
    try {
      const users = await UserModel.findAll()

      res.status(200).json({
        success:true,
        status:200,
        data:{
          message:"Success",
          users
        }
      })
    } catch (error) {
      handleError(res,500,'Internal server error!',error  )
    }
  }
  async RegisterUser(req: Request, res: Response): Promise<void> {
    try {
      const { user_name, email, password } = req.body;
      console.log('reqBody ->',req.body)
  
      
      const hashedPassword = await bcrypt.hash(password, 10);
  
      
      const user = await UserModel.create({
        user_name,
        email,
        password: hashedPassword, 
      });
  
      res.status(200).json({
        success: true,
        status: 200,
        data: {
          user,
        },
      });
    } catch (error) {
      handleError(res, 500, 'Internal server error!', error);
    }
  }
}

export default new UserController()