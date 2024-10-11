import { axiosInstance } from ".";

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("/movies/getAllMovies");
    return response?.data;
  } catch (error) {
    return error;
  }
};
