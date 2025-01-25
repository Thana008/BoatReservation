const express = require('express');
const { connectDB, sql } = require('./database');

const app = express();
const port = 3000;

// เชื่อมต่อ Database
connectDB();

// ทดสอบดึงข้อมูลจาก Database
app.get('/users', async (req, res) => {
    try {
        let pool = await sql.connect();
        let result = await pool.request().query('SELECT * FROM Users'); // เปลี่ยน Users เป็นตารางที่มีอยู่จริง
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
