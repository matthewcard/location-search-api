const path = require('path')
const dbPath = path.resolve(__dirname, 'locationtsv.db')
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
});

module.exports = { db };