import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashPwd = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashPwd });
    await newUser.save(); // Save the new user to the database

    const token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);

    return res.status(201).json({
      message: "User created successfully",
      token,
      newUser,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const userLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  // Check if user exists
  let user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  if (user && (await bcrypt.compare(password, user.password))) {
    //generate token
    let token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .json({ message: "User logged in successfully", token, user });
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json({ email: user.email });
};

export { userSignup, userLogin, getUser };
