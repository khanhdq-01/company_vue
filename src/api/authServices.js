import instanceApi, { handleApiError } from "./instanceApi";

export const login = async (credentials) => {
  try {
    const response = await instanceApi.post("/auth/login", credentials);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const logout = async () => {
  try {
    const response = await instanceApi.get("/auth/logout");
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const getInfo = async () => {
  try {
    const response = await instanceApi.get("auth/me");
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
