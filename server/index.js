import express from 'express';
import data from './data.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/user/:pin', (req, res) => {
  const { pin } = req.params;
  const user = getUserWithPin(pin);
  res.json(user);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const getUserWithPin = (pin) => {
  return data.find(user => user.pin === pin);
}
