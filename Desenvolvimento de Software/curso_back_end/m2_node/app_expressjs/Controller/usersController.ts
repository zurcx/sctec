import { Request, Response } from 'express'
import { Iuser } from '../models/user'
import userModel from '../models/userModel'


async function login(req: Request, res: Response, next: any) {
  res.render('login')
}

export default { login }
