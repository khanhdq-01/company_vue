import instanceApi, { handleApiError } from "./instanceApi";

export const getPricingData = async () => {
  try {
    const response = await instanceApi.get("/pricing-plans");
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const createPricingPlan = async (data) => {
  try {
    const response = await instanceApi.post("/pricing-plans", data);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const updatePricingPlan = async (id, data) => {
  try {
    const response = await instanceApi.post(`/pricing-plans/${id}`, data);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const deletePricingPlan = async (id) => {
  try {
    const response = await instanceApi.delete(`/pricing-plans/${id}`);
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
