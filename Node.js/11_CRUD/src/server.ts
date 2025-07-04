import express from "express";
import morgan from "morgan";
require('dotenv/config')

const app = express();
const PORT = process.env.port || 3000;

// Middleware
app.use(express.json()); // Accept JSON from the client
app.use(morgan('dev')); // Log client requests

// Dummy database
type Planet = {
    id: number,
    name: string,
  };

type Planets = Planet[];

let planets: Planets = [
{
    id: 1,
    name: "Earth",
},
{
    id: 2,
    name: "Mars",
},
];

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Planet API!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});