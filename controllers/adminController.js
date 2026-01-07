import db from "../config/db.js";

// CREATE GAME
export const addGame = async (req, res) => {
  try {
    const { name, type, reward } = req.body;

    await db.query(
      "INSERT INTO games (name, type, reward) VALUES (?, ?, ?)",
      [name, type, reward]
    );

    res.status(201).json({ message: "Game added" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE GAME
export const deleteGame = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query("DELETE FROM games WHERE id = ?", [id]);

    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
