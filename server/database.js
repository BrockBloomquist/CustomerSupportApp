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
export async function getDeletedTickets() {
  const [rows] = await pool.query("SELECT * FROM removed_tickets");
  return rows;
}

export async function createTicket(id, fullname, email, details, type) {
  await pool.query(
    `
  INSERT INTO tickets (id, fullname, email, details, ticketType)
  VALUES (?, ?, ?, ?, ?)`,
    [id, fullname, email, details, type]
  );
}
export async function pseudoDeleteTicket(id) {
  await pool.query(
    `
  INSERT INTO removed_tickets 
  SELECT * 
  FROM tickets 
  WHERE id = ? 
  `,
    [id]
  );
  await pool.query(
    `
  DELETE FROM tickets
  WHERE id = ? 
  `,
    [id]
  );
}

export async function deleteTicket(id) {
  await pool.query(
    `
    DELETE FROM removed_tickets
    WHERE id = ?
    `,
    [id]
  );
}
