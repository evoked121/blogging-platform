import Post from "../../models/Post.js";
import User from "../../models/User.js";
import Comment from "../../models/Comment.js";

export const postComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    const { content } = req.body;

    const { userId } = req.user;

    /* don't forget to add await */
    const { username } = await User.findById(userId, { username: 1 });

    const newComment = await Comment.create({
      author: username,
      content,
    });

    post.comments.push(newComment._id);
    await post.save();

    return res.status(201).json({
      newComment,
    });

    //send response
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};
