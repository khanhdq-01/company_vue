import instanceApi, { handleApiError } from "./instanceApi";

export const getSlideData = async () => {
  try {
    const response = await instanceApi.get("/slide");
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updateSlide = async (id, data) => {
  try {
    const response = await instanceApi.post(
      `/slide/${id}`,
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deleteSlide = async (id) => {
  try {
    const response = await instanceApi.delete(`/slide/${id}`);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
