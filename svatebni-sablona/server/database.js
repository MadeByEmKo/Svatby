const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'svatba.db');

const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create Guests table (RSVP)
        db.run(`CREATE TABLE IF NOT EXISTS guests (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT,
            phone TEXT,
            adults INTEGER DEFAULT 1,
            children INTEGER DEFAULT 0,
            special_requirements TEXT,
            accommodation TEXT,
            confirmed BOOLEAN DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Create Messages table
        db.run(`CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            author TEXT NOT NULL,
            text TEXT NOT NULL,
            approved BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )`);

        // Create Gifts table
        db.run(`CREATE TABLE IF NOT EXISTS gifts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            reserved_by TEXT,
            reserved BOOLEAN DEFAULT 0
        )`);

        // Create FAQ table
        db.run(`CREATE TABLE IF NOT EXISTS faqs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            question TEXT NOT NULL,
            answer TEXT NOT NULL,
            approved BOOLEAN DEFAULT 1
        )`);

        // Insert some sample FAQ and Gifts if table is empty
        db.get('SELECT count(*) as count FROM faqs', (err, row) => {
            if (row && row.count === 0) {
                db.run(`INSERT INTO faqs (question, answer) VALUES 
                    ('Dress code?', 'Preferujeme formální oblečení v pastelových barvách, případně earth tones. Prosíme, vyvarujte se bílé barvy.'),
                    ('Kde mohu zaparkovat?', 'Parkování je zajištěno přímo u areálu zámku na vyznačeném parkovišti zdarma.'),
                    ('Budou na místě vegetariánské možnosti?', 'Ano, v rámci rautu i servírovaného menu pamatujeme na všechny diety. Uveďte své preference prosím do RSVP formuláře.')
                `);
            }
        });

        db.get('SELECT count(*) as count FROM gifts', (err, row) => {
            if (row && row.count === 0) {
                db.run(`INSERT INTO gifts (title, description) VALUES 
                    ('Příspěvek na svatební cestu - letenky', 'Chceme letět na Maledivy a každá koruna se počítá.'),
                    ('Kuchyňský robot KitchenAid', 'Náš vysněný doplněk do kuchyně v mentolové barvě.'),
                    ('Sada ručníků', 'Kvalitní bavlněné ručníky se vždy hodí.'),
                    ('Večeře pro dva', 'Zážitek v luxusní restauraci jako první rande novomanželů.')
                `);
            }
        });

        db.get('SELECT count(*) as count FROM messages', (err, row) => {
            if (row && row.count === 0) {
                db.run(`INSERT INTO messages (author, text) VALUES 
                    ('Karel a Eva', 'Přejeme vám hodně štěstí, lásky a trpělivosti na společné cestě životem!'),
                    ('Babička Jarmila', 'Ať vám to klape aspoň tak dobře jako mně a dědovi. Mám vás ráda!')
                `);
            }
        });
    }
});

module.exports = db;
