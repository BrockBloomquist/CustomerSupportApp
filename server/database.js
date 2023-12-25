import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export async function getTickets() {
  const [rows] = await pool.query("SELECT * FROM tickets");
  return rows;
}

export async function getTicket(id) {
  const [rows] = await pool.query(
    `SELECT * 
    FROM tickets 
    WHERE id = ?`,
    [id]
  );
  return rows[0];
}

export async function createTicket(id, fullname, email, details, type) {
  await pool.query(
    `
  INSERT INTO tickets (id, fullname, email, details, ticketType)
  VALUES (?, ?, ?, ?, ?)`,
    [id, fullname, email, details, type]
  );
}

async function clearTable(tableName) {
  await pool.query(
    `
  DELETE FROM ?`,
    [tableName]
  );
}
