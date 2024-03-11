import Post from "../../models/Post.js";
import User from "../../models/User.js";

export const getUserPost = async (req, res) => {
  try {
    const { userId } = req.user;

    /* don't forget to add await */

    const { username } = await User.findById(userId, { username: 1 });
    const posts = await Post.find({ author: username }).populate("comments");

    return res.json({
      posts,
    });
  } catch (err) {
    return res.status(500).send("Something went wrong");
  }
};
