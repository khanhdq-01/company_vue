import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import {
  getPricingData,
  createPricingPlan,
  updatePricingPlan,
  deletePricingPlan,
} from "../api/pricingServices";
import { toast } from "vue3-toastify";
import { handleApiError } from "../api/instanceApi";

export const usePricingPlansStore = () => {
  const queryClient = useQueryClient();
  const { data: pricingData } = useQuery({
    queryKey: ["pricing-plans"],
    queryFn: () => getPricingData(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 60000, // 1 phút
  });

  const createMutation = useMutation({
    mutationFn: async (data) => {
      return await toast.promise(createPricingPlan(data), {
        pending: "Đang tạo gói dịch vụ",
        success: {
          render() {
            return `Tạo gói dịch vụ thành công!`;
          },
        },
        error: {
          render(error) {
            return `Tạo gói dịch vụ thất bại! ${error}`;
          },
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
    },
    onError: (error) => handleApiError(error),
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      return await toast.promise(updatePricingPlan(id, data), {
        pending: "Đang cập nhật gói dịch vụ",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
    },
    onError: (error) => handleApiError(error),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await toast.promise(deletePricingPlan(id), {
        pending: "Đang xóa gói dịch vụ",
        success: {
          render() {
            return `Xóa gói dịch vụ thành công!`;
          },
        },
        error: {
          render(error) {
            return `Xóa gói dịch vụ thất bại! ${error}`;
          },
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pricing-plans"] });
    },
    onError: (error) => handleApiError(error),
  });

  return {
    pricingData,
    createPricingPlan: createMutation.mutate,
    updatePricingPlan: updateMutation.mutate,
    deletePricingPlan: deleteMutation.mutate,
  };
};
