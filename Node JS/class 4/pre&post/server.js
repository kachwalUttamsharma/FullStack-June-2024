const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

app.use(express.json());

// pre and post

// pre - earlier than validation or save or remove or updating into database
// post - after saving or removing or updating

mongoose
  .connect(
    "mongodb+srv://kachwalsharma1:ff3wY5oq14KpudAM@cluster0.mki9h.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Database is connected successfully"))
  .catch((err) => console.log("Database connection error ", err));

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  console.log("Pre-save hook: Hashing password before saving the user");
  this.password = `hashed_${this.password}`;
  next();
});

userSchema.post("save", function (doc, next) {
  console.log(`Post-save hook: User ${doc.name} has been saved`);
  next();
});

userSchema.pre("findOneAndDelete", async function (next) {
  const user = await this.model.findOne(this.getQuery());
  console.log(
    `Pre-findOneAndDelete hook: Preparing to remove user ${user.name}`
  );
  next();
});

userSchema.post("findOneAndDelete", function (doc, next) {
  console.log(`Post-remove hook: User ${doc.name} has been removed`);
  next();
});

const User = mongoose.model("user", userSchema);

app.post("/users", async (req, res) => {
  try {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    await newUser.save();
    res.status(201).send(`user ${newUser.name} has been created successfully`);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).send("User not found");
    }
    await User.findOneAndDelete(req.params.id);
    res.send(`User ${user.name} deleted successfully`);
  } catch (error) {
    console.error(error);
    res.status(400).send("Error deleting user");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
