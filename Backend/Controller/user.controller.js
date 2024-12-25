import User from "../Models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function signUp(req, res) {
  try {
    const data = req.body;
    const { name: fullName, email, password } = data;

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ Error: "Email already used" });
    }

    const hashed_pswd = await bcrypt.hash(password, 10);
    const newUser = new User({ name: fullName, email, password: hashed_pswd });

    await newUser.save();

    const skey = process.env.SECRET_KEY;
    const token = jwt.sign({ user_id: newUser._id }, skey);

    const { pswd, ...res_data } = newUser.toObject();
    res
      .status(201)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600 * 1000,
        path: "/",
      })
      .json({
        status: "success",
        user: res_data,
      });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ Error: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ Error: "Wrong Password" });
    }

    const skey = process.env.SECRET_KEY;
    const token = jwt.sign({ user_id: user._id }, skey);
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        maxAge: 3600 * 1000,
        path: "/",
      })
      .json({
        status: "Login Succesful",
        user: { id: user._id, name: user.name, email: user.email },
      });
    console.log("Cookie set:", req.cookies);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("access_token");
    res.status(200).json({ message: "Logout success" });
  } catch (error) {
    res.status(500).json({ Error: "Error logging out" });
  }
};
