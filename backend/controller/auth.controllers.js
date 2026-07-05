import User from "../model/user.model.js";
import bcrypt from "bcryptjs";
import getToken from "../config/token.js";
export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
      
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "password must be at least 6 characters long!",
      });
    }

    // THEN check DB
    const existEmail = await User.findOne({ email });

    if (existEmail) {
      return res.status(401).json({ message: "email already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    
    const token = await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false,
    });
    res.status(201).json({ message: "User created successfully",user });
  } catch (error) {
    console.error("Error in signUp controller:", error);
  }
};

//login
export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "email does not exists! " });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    const token = await getToken(user._id);
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 10 * 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false,
    });
    res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: `login error: ${error.message}` });
  }
};

export const logOut = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ message: `logout error: ${error.message}` });
  }
};
