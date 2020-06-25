const express = require("express");
const cors = require("cors");
const app = express();
const users = require("./users.json");


app.use(cors())
app.use(express.json())

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username == username);

  if (user == null) {
    return res.status(400).json({
      type: 'error',
      error: 'No user or wrong pass'
    });
  }

  try {
    if (user.password === password) {
      res.status(200).json({
      type: 'sucess',
      error: 'No user or wrong pass',
      userId: `${user.id}`
    });

    } else {
      res.status(400).json({
      type: 'error',
      error: 'No user or wrong pass'
    });
    }
  } catch {
    return res.status(500).json({
      type: 'error',
      error: 'No user or wrong pass'
    });;
  }
});

const port = 5000;
app.listen(port, () => console.log(`Server started on ${port}`));
