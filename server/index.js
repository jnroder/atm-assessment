import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import editJsonFile from 'edit-json-file';

const app = express();
const port = process.env.PORT || 3000;

// can't just use relative path, so resolving the path using native node.js modules 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataFilePath = path.join(__dirname, 'data.json');
const file = editJsonFile(dataFilePath);

app.use(express.json());

app.get('/', (req, res) => {
  res.send(file.get())
})

app.get('/user/:pin', (req, res) => {
  const { pin } = req.params;
  const user = getUserWithPin(pin);
  res.json(user);
})

app.post('/user/:pin/deposit', (req, res) => {
  const { pin } = req.params;
  const { amount } = req.body;
  const users = file.get("users");

  users[pin].balance += amount;

  file.set("users", users);
  file.save();

  res.json(users[pin]);
});

app.post('/user/:pin/withdraw', (req, res) => {
  const { pin } = req.params;
  const { amount } = req.body;
  const users = file.get("users");

  users[pin].balance -= amount;

  file.set("users", users);
  file.save();

  res.json(users[pin]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const getUserWithPin = (pin) => {
  return file.get(`users.${pin}`);
}
