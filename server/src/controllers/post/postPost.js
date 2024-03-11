import Post from "../../models/Post.js";
import User from "../../models/User.js";

export const postPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const { userId } = req.user;

    /* don't forget to add await */

    const { username } = await User.findById(userId, { username: 1 });

    const newPost = await Post.create({
      title,
      author: username,
      content,
    });
    //create jwt token

    return res.status(201).json({
      newPost,
    });

    //send response
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};
