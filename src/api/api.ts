import axiosInstance from "../config/axios";

export const getRepositories = async (username: string) => {
  try {
    return await axiosInstance.get(
      `https://api.github.com/users/${username}/repos`
    );
  } catch {
    return "";
  }
};

export const getUsers = async (username: string) => {
  try {
    return await axiosInstance.get(
      `https://api.github.com/search/users?q=${username}&per_page=5`
    );
  } catch {
    return "";
  }
};
