import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const postRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userExists = await User.exists({ email });
    if (userExists) {
      return res.status(409).send("E-mail already in use");
    }

    const usernameExists = await User.exists({ username });
    if (usernameExists) {
      return res.status(409).send("Username already in use");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email: email,
      password: encryptedPassword,
    });
    //create jwt token
    const token = jwt.sign(
      {
        userId: user._id,
        email,
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "48h",
      }
    );
    return res.status(201).json({
      userDetails: {
        email,
        username,
        token,
      },
    });

    //send response
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};
