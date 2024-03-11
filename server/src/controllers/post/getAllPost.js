import Post from "../../models/Post.js";

export const getAllPost = async (_, res) => {
  try {
    const posts = await Post.find({}).populate("comments");

    return res.json({
      posts,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("Something went wrong");
  }
};
