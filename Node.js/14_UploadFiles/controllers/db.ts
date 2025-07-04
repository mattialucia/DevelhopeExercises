import { error } from "console";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
    try{
       await db.none(`
            DROP TABLE IF EXISTS planets;

            CREATE TABLE planets (
                id SERIAL NOT NULL PRIMARY KEY,
                name TEXT NOT NULL,
                image TEXT
            );
        `);

        await db.none(`
            INSERT INTO planets (name) VALUES ('Terra'), ('Marte'), ('Venere');
        `);

        const planets = await db.many(`
            SELECT * FROM planets;
            `);
            
        console.log("Lista pianeti:", planets);
        console.log("Query eseguite correttamente.");
    } catch {
        console.error("Errore nell'esecuzione della query di setup.", error)
    }

};

setupDB();

export { db };