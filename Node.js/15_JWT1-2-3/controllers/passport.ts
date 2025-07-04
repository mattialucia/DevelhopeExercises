import passport from "passport";
import passportJWT from "passport-jwt";
import * as dotenv from "dotenv";
import { db } from "./db";

dotenv.config();

// Middleware
passport.use(new passportJWT.Strategy({
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRETKEY as string
}, async (payload, done) => {
    try {
        const { userId } = payload
        
        const user = await db.oneOrNone(`
            SELECT * FROM users WHERE userId=$1
            `, userId)
        
        if ( user ){
            done(null, user);           
        } else {
            done(new Error( "Utente non trovato"))
        }
    } catch (error){
        done(error);
    }
}))
