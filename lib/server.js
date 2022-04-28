const express = require('express');
const ExplorerController = require('./controllers/ExplorerController');

const app = express();
app.use(express.json());
const port = 3000;

app.get('/', (request, response) => {
  response.json({ message: 'FizzBuzz Api welcome!' });
});

app.get('/v1/explorers/:mission', (request, response) => {
  const { mission } = request.params;
  const explorersInMission = ExplorerController.getExplorersByMission(mission);
  response.json(explorersInMission);
});

app.get('/v1/explorers/amount/:mission', (request, response) => {
  const { mission } = request.params;
  const amountInMission = ExplorerController.getExplorersAmountByMission(mission);
  response.json({ mission: request.params.mission, quantity: amountInMission });
});

app.get('/v1/explorers/usernames/:mission', (request, response) => {
  const { mission } = request.params;
  const usernamesInMission = ExplorerController.getExplorersUsernamesByMission(mission);
  response.json({ mission, usernamesInMission });
});

app.get('/v1/fizzbuzz/:score', (request, response) => {
  const score = request.params.score;
  const trick = ExplorerController.validationFizzbuzz(score);
  response.json({ score, trick });
});

app.listen(port, () => {
  console.log(`FizzBuzz API in localhost:${port}`);
});
