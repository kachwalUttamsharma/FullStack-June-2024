import { axiosInstance } from ".";

export const addTheatre = async (payload) => {
  try {
    const response = await axiosInstance.post("/theatres/addTheatre", payload);
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const updateTheatre = async (payload) => {
  try {
    const response = await axiosInstance.patch(
      "/theatres/updateTheatre",
      payload
    );
    return response.data;
  } catch (err) {
    return err.resposne;
  }
};

export const getAllTheatres = async (payload) => {
  try {
    const response = await axiosInstance.get("/theatres/getAllTheatresByOwner");
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const getAllTheatresForAdmin = async () => {
  try {
    const response = await axiosInstance.get("/theatres/getAllTheatres");
    return response.data;
  } catch (err) {
    return err.response;
  }
};

export const deleteTheatre = async (payload) => {
  try {
    const response = await axiosInstance.delete(
      `/theatres/deleteTheatre/${payload?.theatreId}`
    );
    return response.data;
  } catch (err) {
    return err.response;
  }
};
