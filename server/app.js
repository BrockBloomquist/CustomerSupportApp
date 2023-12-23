import { getTickets, getTicket, createTicket } from "./database.js";
import express from "express";

const app = express();

app.use(express.json());
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong");
});

app.listen(8080, () => {
  console.log("server is running on port 8080");
});

app.get("/tickets", async (req, res) => {
  const tickets = await getTickets();
  res.send(tickets);
});

app.post("/createTicket", async (req, res) => {
  const { fullName, email, details } = req.body;
  const ticket = await createTicket(fullName, email, details);
  res.sendStatus(201).send(ticket);
});
