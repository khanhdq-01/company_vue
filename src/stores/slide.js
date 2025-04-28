import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { deleteSlide, getSlideData, updateSlide } from "../api/sildeServices";
import { handleApiError } from "../api/instanceApi";
import { toast } from "vue3-toastify";

export const useSlideStore = () => {
  const queryClient = useQueryClient();
  const { data: slideData } = useQuery({
    queryKey: ["slide-data"],
    queryFn: () => getSlideData(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 60000, // 1 phút
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }) => {
      return await toast.promise(updateSlide(id, data), {
        pending: "Đang cập nhật nội dung slide",
        success: {
          render() {
            return `Cập nhật thành công!`;
          },
        },
        error: {
          render(error) {
            return `${error?.message}` || "cập nhật thất bại!";
          },
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slide-data"] });
    },
    onError: (error) => handleApiError(error),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      return await toast.promise(deleteSlide(id), {
        pending: `Đang xoá Slide ${id}`,
        success: {
          render() {
            return `Xoá slide ${id} thành công!`;
          },
        },
        error: {
          render() {
            return `Xoá slide ${id} thất bại!`;
          },
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["slide-data"] });
    },
    onError: (error) => handleApiError(error),
  });
  return {
    slideData,
    deleteSlide: deleteMutation.mutate,
    updateSlide: updateMutation.mutate,
  };
};
