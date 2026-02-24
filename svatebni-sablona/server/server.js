const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./database');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Test route
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'API is running' });
});

// API pro Vzkazy (Messages)
app.get('/api/messages', (req, res) => {
    db.all('SELECT * FROM messages WHERE approved = 1 ORDER BY created_at DESC', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});
app.post('/api/messages', (req, res) => {
    const { author, text } = req.body;
    db.run('INSERT INTO messages (author, text) VALUES (?, ?)', [author, text], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID, author, text, approved: 1 });
    });
});

// API pro RSVP (Guests)
app.post('/api/rsvp', (req, res) => {
    const { name, email, phone, adults, children, special_requirements, accommodation } = req.body;
    db.run(
        `INSERT INTO guests (name, email, phone, adults, children, special_requirements, accommodation, confirmed) 
         VALUES (?, ?, ?, ?, ?, ?, ?, 1)`,
        [name, email, phone, adults, children, special_requirements, accommodation],
        function (err) {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json({ message: 'RSVP přijato', id: this.lastID });
        }
    );
});

// API pro Dary (Gifts)
app.get('/api/gifts', (req, res) => {
    db.all('SELECT * FROM gifts', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});
app.put('/api/gifts/:id/reserve', (req, res) => {
    const { reserved_by } = req.body;
    const { id } = req.params;
    db.run('UPDATE gifts SET reserved = 1, reserved_by = ? WHERE id = ?', [reserved_by, id], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Dar rezervován' });
    });
});

// API pro FAQ
app.get('/api/faqs', (req, res) => {
    db.all('SELECT * FROM faqs WHERE approved = 1', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
