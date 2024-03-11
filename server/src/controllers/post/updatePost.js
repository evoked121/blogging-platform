import Post from "../../models/Post.js";

export const updatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { title, content } = req.body;

    const postData = await Post.findByIdAndUpdate(
      postId,
      {
        title,
        content,
      },
      { new: true }
    );

    return res.status(200).json({
      postId,
      title: postData.title,
      content: postData.content,
    });
  } catch (err) {
    return res.status(500).send("failed to update post");
  }
};
