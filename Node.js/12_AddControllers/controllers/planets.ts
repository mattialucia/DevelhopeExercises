import { Request, Response } from "express";
import { db } from "./db";

type Planet = {
  id: number;
  name: string;
};

// GET /api/planets
export const getAll = async (req: Request, res: Response) => {
  try {
    const planets = await db.manyOrNone("SELECT * FROM planets;");
    res.status(200).json(planets);
  } catch (error) {
    res.status(500).json({ msg: "Errore nel recupero dei pianeti" });
  }
};

// GET /api/planets/:id
export const getOneById = async (req: Request, res: Response) => {
  try {
    const planet = await db.oneOrNone(
      "SELECT * FROM planets WHERE id = $1;",
      Number(req.params.id)
    );
    if (planet) {
      res.status(200).json(planet);
    } else {
      res.status(404).json({ msg: "Pianeta non trovato" });
    }
  } catch (error) {
    res.status(500).json({ msg: "Errore nel recupero del pianeta" });
  }
};

// POST /api/planets
export const create = async (req: Request, res: Response) => {
    const { name } = req.body;
    if (!name) res.status(400).json({ msg: "Nome mancante" });

    try {
        await db.none("INSERT INTO planets (name) VALUES ($1);", [name]);
        res.status(201).json({ msg: "Pianeta aggiunto" });
    } catch (error) {
        res.status(500).json({ msg: "Errore durante l'inserimento" });
    }
};

// PUT /api/planets/:id
export const updateById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    if (!name) res.status(400).json({ msg: "Nome mancante" });

    try {
        const result = await db.result(
            "UPDATE planets SET name = $2 WHERE id = $1;",
            [parseInt(id), name]
        );
        if (result.rowCount === 0) {
            res.status(404).json({ msg: "Pianeta non trovato" });
        } else {
            res.status(200).json({ msg: "Pianeta aggiornato" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Errore durante l'aggiornamento" });
    }
};

// DELETE /api/planets/:id
export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        const result = await db.result(
            "DELETE FROM planets WHERE id = $1;",
            [parseInt(id)]
        );
        if (result.rowCount === 0) {
            res.status(404).json({ msg: "Pianeta non trovato" });
        } else {
            res.status(200).json({ msg: "Pianeta eliminato" });
        }
    } catch (error) {
        res.status(500).json({ msg: "Errore durante l'eliminazione" });
    }
};
