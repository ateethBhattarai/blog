const User = require("../Models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).send("All Field required.");
    return;
  }

  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(401).send("User already exist");
    return;
  }

  const hashedPass = await bcrypt.hash(password, 10);

  const userDetails = await User.create({
    username,
    email,
    password: hashedPass,
  });
  res.json({
    message: `User ${userDetails.email}, registered.`,
    email: userDetails.email,
    username: userDetails.username,
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).send("All Field required.");
    return;
  }

  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).send("No user found.");
    return;
  }

  const checkPass = await bcrypt.compare(password, user.password);
  if (!checkPass) {
    res.status(401).send("Invalid credentials.");
    return;
  }

  const token = jwt.sign(
    {
      email: user.email,
      password: user.password,
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET_KEY
  );
  res.cookie("token", token).json({
    message: "logged in",
    email: user.email,
    id: user._id,
    password: user.password,
    username: user.username,
  });
};

const logout = (req, res) => {
  res.cookie("token", "").json({ message: "logged_out" });
};

const current = (req, res) => {
  const { token } = req.cookies;
  // if (token) {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.json(data);
  } catch (error) {
    res.send(error);
  }
  // }
};

module.exports = { register, login, logout, current };
