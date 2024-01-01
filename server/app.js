import { getTickets, getTicket, createTicket } from "./database.js";
import express from "express";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

/**
 * Allows the backend to listen on the local host port 3005
 */
app.listen(3005, () => {
  console.log("server is running on port 3005");
});

/**
 * Creates a GET HTTP request to get all the tickets that exist in the database or
 * each row/record in the database.
 */
app.get("/tickets", async (req, res) => {
  getTickets()
    .then((tickets) => {
      res.json(tickets);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

/**
 * Creates a Post HTTP request on a specific server which creates a new ticket
 * in the database endpoint table in AWS. If theres an error a 500 is sent to the
 * server/client that made the request.
 */
app.post("/createTicket", async (req, res) => {
  const { id, fullName, email, details, ticketType } = req.body;
  createTicket(id, fullName, email, details, ticketType)
    .then((ticket) => {
      res.sendStatus(201).send(ticket);
    })
    .catch((err) => {
      res.sendStatus(500).send(err);
    });
});
