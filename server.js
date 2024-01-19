const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// connect backend server to SQL database

const { Pool } = require('pg');

const pool = new Pool({
  user: 'thejordanbautista', 
  host: 'localhost',         
  database: 'postgres', 
  password: 'Pentagames00*', 
  port: 5432,               
});

app.use(cors());
app.use(bodyParser.json());

// PUT

app.post('/api/items', (req, res) => {
    const { itemName, itemDetails } = req.body;

    pool.query(
        'INSERT INTO items (item_name, description) VALUES ($1, $2) RETURNING *',
        [itemName, itemDetails],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(201).json(results.rows[0]);
            }
        }
    );
});

// GET

app.get('/api/items', (req, res) => {
    pool.query('SELECT * FROM items', (error, results) => {
        if (error) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(200).json(results.rows);
        }
    });
});

// PUT (EDIT)

app.put('/api/items/:id', (req, res) => {
    const { id } = req.params;
    const { itemName, itemDetails } = req.body;

    pool.query(
        'UPDATE items SET item_name = $1, description = $2 WHERE item_id = $3 RETURNING *',
        [itemName, itemDetails, id],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(200).json(results.rows[0]);
            }
        }
    );
});


// DELETE

app.delete('/api/items/:id', (req, res) => {
    const { id } = req.params;

    pool.query(
        'DELETE FROM items WHERE item_id = $1',
        [id],
        (error, results) => {
            if (error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(204).send(); // 204 No Content
                }
            }
            );
        });


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
