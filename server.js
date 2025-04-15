const express = require('express');
const cors = require('cors');
const app = express();

let command = "";

app.use(cors());
app.use(express.json());

app.get('/getCommand', (req, res) => {
  res.json({ command });  // Send the current command as JSON
  command = "";           // Clear it so Unity doesn't repeat
});

app.post('/sendCommand', (req, res) => {
  command = req.body.command;
  res.send("OK");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
