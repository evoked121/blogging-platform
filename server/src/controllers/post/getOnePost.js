import Post from "../../models/Post.js";

export const getOnePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    /* don't forget to add await */

    return res
      .status(200)
      .json({ post: { title: post.title, content: post.content } });

    //send response
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};
