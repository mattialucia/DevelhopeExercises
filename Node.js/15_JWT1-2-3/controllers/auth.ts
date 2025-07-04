import { Request, Response } from "express";
import { db } from "./db";
import Joi from "joi";
import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

dotenv.config();

type UserI = {
  userId: number;
  userid: number;
  username: string;
  password: string;
  token?: string;
}

type RequestWithUserI = Request & {
  user: UserI;
}

// POST /users/signup
const signup = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        // validare dati con JOI
        // controllo nel db se esiste gia la username con una SELECT * from users where username = 
        const user = await db.one(`
            INSERT INTO users (username, password) VALUES ($1, $2) RETURNING userId
            `, [ username, password ])

        res.status(201).json(user)
    } catch(error) {
        res.status(500).json(error)
    }
}
// POST /users/login

const login = async (req: Request, res: Response) => {
    try{
        const { username, password } = req.body;
        
        const user = await db.one(`
            SELECT * FROM users WHERE username = $1
            `, username)
        
        if ( password === user.password){
            const token = jwt.sign({ userId: user.userId || user.userid }, process.env.SECRETKEY as string)
            await db.none(`
            UPDATE users SET token=$2 WHERE userId=$1
            `, [user.userId || user.userid, token])
            res.status(200).json(token);
        } else {
            res.status(401).send("Credenziali errate");
        }
    } catch(error) {
        res.status(500).json(error)
    }
}

// GET /users/logout

const logout = async (req: RequestWithUserI, res: Response) => {
    try{
        const { userId, userid } = req.user;
        
        await db.none(`
            UPDATE users SET token=$2 WHERE userId=$1
            `, [userId || userid, "ciao"])
            res.status(200).send("Logout effettuato con successo");
    } catch(error) {
        res.status(500).json(error)
    }
}

export { signup, login, logout }