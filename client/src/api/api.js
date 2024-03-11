import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:5003/api",
  timeout: 1000,
});

apiClient.interceptors.request.use(
  (config) => {
    const userDetails = localStorage.getItem("user");

    if (userDetails) {
      const token = JSON.parse(userDetails).token;
      config.headers.Authorization = `Bear ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const login = async (data) => {
  try {
    return await apiClient.post("/auth/login", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const register = async (data) => {
  try {
    return await apiClient.post("/auth/register", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getBlogs = async () => {
  try {
    return await apiClient.get("/blog/blogs");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const getUserBlogs = async () => {
  try {
    return await apiClient.get("/blog/userBlogs");
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const createBlog = async (data) => {
  try {
    return await apiClient.post("/blog/createBlog", data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const deleteBlog = async (postId) => {
  try {
    return await apiClient.delete(`/blog/deleteBlog/${postId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const OneBlog = async (postId) => {
  try {
    return await apiClient.get(`/blog/oneBlog/${postId}`);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const updateBlog = async (postId, data) => {
  try {
    return await apiClient.put(`/blog/updateBlog/${postId}`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};

export const commentBlog = async (postId, data) => {
  try {
    return await apiClient.post(`/comment/postComment/${postId}`, data);
  } catch (exception) {
    return {
      error: true,
      exception,
    };
  }
};
