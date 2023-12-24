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

app.listen(3005, () => {
  console.log("server is running on port 3005");
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
