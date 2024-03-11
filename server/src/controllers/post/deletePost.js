import Post from "../../models/Post.js";

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    await Post.findByIdAndDelete(postId);

    /* don't forget to add await */

    return res
      .status(200)
      .json({ success: true, message: "Post Deleted Successfully" });

    //send response
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};
