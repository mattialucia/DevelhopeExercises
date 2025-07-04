import { error } from "console";
import pgPromise from "pg-promise";

const db = pgPromise()("postgres://postgres:postgres@localhost:5432/postgres");

const setupDB = async () => {
    try{
       await db.none(`
            DROP TABLE IF EXISTS students;

            CREATE TABLE students (
                id SERIAL PRIMARY KEY,
                name TEXT NOT NULL,
                surname TEXT NOT NULL,
                age INTEGER NOT NULL,
                classroom TEXT
            );
        `);

        await db.none(`
            INSERT INTO students (name, surname, age) VALUES ('Mario', 'Rossi', 23);
            INSERT INTO students (name, surname, age) VALUES ('Luigi', 'Verdi', 25);
        `);

        const students = await db.many(`
            SELECT * FROM students;
            `);
            
        console.log("Lista studenti:", students);
        console.log("Query eseguite correttamente.");
    } catch {
        console.error("Errore nell'esecuzione della query di setup.", error)
    }

};

setupDB();

export { db };