const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("req", req);
  res.send("Hello World");
});

let userInfo = [
  {
    username: "Annu",
    email: "AnnuRanjan@scaler.com",
  },
];

/**
 * GET /getUserDetails
 * Returns the list of users.
 */
app.get("/getUserDetails", (req, res) => {
  res.status(200).json(userInfo);
});

/**
 * POST /addNewUser
 * Adds a new user to the system.
 * Expects a JSON body with 'username' and 'email' properties.
 */
app.post("/addNewUser", (req, res) => {
  const newUser = req.body;

  if (!newUser?.username || !newUser?.email) {
    return res.status(400).json({ message: "username and email are required" });
  }

  const exisitingUser = userInfo.find(
    (user) => user?.username.toLowerCase() === newUser?.username?.toLowerCase()
  );

  if (exisitingUser) {
    return res.status(409).json({ message: "user already exists" });
  }
  userInfo.push(newUser);
  res.status(201).json({ message: "User has been created", user: newUser });
});

app.patch("/updateUserInfo", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ message: "username and email are required" });
  }

  const userIndex = userInfo.findIndex(
    (user) => user?.username.toLowerCase() === username?.toLowerCase()
  );

  if (userIndex === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  userInfo[userIndex].email = email;
  res.status(200).json({ message: "user info has been updated" });
});

app.delete("/deleteUser", (req, res) => {
  const { username, email } = req.body;

  if (!username || !email) {
    return res.status(400).json({ message: "username and email are required" });
  }
  const intialLength = userInfo.length;
  userInfo = userInfo.filter(
    (user) => user.username.toLowerCase() !== username.toLowerCase()
  );

  if (userInfo.length === intialLength) {
    return res.status(404).json({ message: "user not found" });
  }
  res.status(200).json({ message: "user has been deleted" });
});

app.listen(port, () => {
  console.log(`Express app is listening on post ${port}`);
});
