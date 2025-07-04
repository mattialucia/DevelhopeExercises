import { NextFunction, Request, Response } from "express";
import passport from "passport";

const authorize = (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate("jwt", { session: false }, (error: any, user: any) => {
        if (error || !user){
            res.status(401).send("Unauthorized")
        } else {
            req.user = user;
            next()
        }
    })(req, res, next)
}

export default authorize;