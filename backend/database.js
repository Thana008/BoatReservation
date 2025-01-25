require('dotenv').config();
const sql = require('mssql');

// กำหนดค่าการเชื่อมต่อ
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false, // ถ้าต่อผ่าน localhost ให้ตั้งเป็น false
        trustServerCertificate: true // ต้องใช้ถ้าต่อกับ SQL Server เวอร์ชันใหม่
    }
};

// ฟังก์ชันเชื่อมต่อกับ Database
async function connectDB() {
    try {
        let pool = await sql.connect(dbConfig);
        console.log('✅ Connected to SQL Server');
        return pool;
    } catch (err) {
        console.error('❌ Database Connection Failed!', err);
        process.exit(1);
    }
}

module.exports = { connectDB, sql };
