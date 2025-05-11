import { getInfo, login } from "../api/authServices";
import { toast } from "vue3-toastify";
import router from "../router";
import { logout } from "../api/authServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/vue-query";
import { handleApiError } from "../api/instanceApi";

export const useAuthStore = () => {
  const queryClient = useQueryClient();
  const {
    data: user,
    isError: isUserError,
    isLoading: isUserLoading,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () => getInfo(),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    staleTime: 6000,
  });

  const loginMutation = useMutation({
    mutationFn: async (credentials) => {
      return await toast.promise(login(credentials), {
        pending: "Đang đăng nhập...",
        success: {
          render() {
            return  `Đăng nhập thành công!`;
          },
        },
        error: {
          render() {
            return `Đăng nhập thất bại!`;
          },
        },
      });
    },
    onSuccess: ({ data }) => {
      const { token } = data;
      const user = {
        id: data?.id,
        name: data?.name,
        email: data?.email,
        role_id: data?.role_id,
      };
      sessionStorage.setItem("token", token);
      queryClient.setQueryData(["user"], user);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      router.push({ path: "/" });
    },
    onError:(error) => handleApiError(error),
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      return await toast.promise(logout(), {
        pending: "Đang đăng xuất",
        success: {
          render() {
            return  "Đăng xuất thành công!";
          },
        },
        error: {
          render() {
            return "Đăng xuất thất bại!";
          },
        },
      });
    },
    onSuccess: () => {
      sessionStorage.removeItem("token");
      queryClient.setQueryData(["user"], null);
      router.push({ path: "/log-in" });
    },
    onError:(error) => handleApiError(error),
  });
  return {
    user,
    isUserError,
    isUserLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate,
    isAuthLoading: loginMutation.isPending || logoutMutation.isPending
  }
};
