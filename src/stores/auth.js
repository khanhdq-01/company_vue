import { defineStore } from "pinia";
import { AuthService } from "../api/services";
import { toast } from "vue3-toastify";
import router from "../router";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    isLoading: false,
    error: null,
  }),
  actions: {
    async login(credentials) {
      this.isLoading = true;
      this.error = null;
      try {
        return await toast.promise(AuthService.login(credentials), {
          pending: "Đang đăng nhập",
          success: {
            render({ data }) {
              // Lưu thông tin token vào localStorage nếu cần
              if (data.data) {
                sessionStorage.setItem(
                  "token",
                  JSON.stringify(data.data?.data?.token)
                );
                this.user = data.data?.data
              }
              router.push({ path: "/" });
              return `Đăng nhập thành công`;
            },
          },
          error: {
            render({ data }) {
              return `${data.message || "Đăng nhập thất bại"}`;
            },
          },
        });
      } catch (error) {
        this.error = error.response?.data?.message || "Đăng nhập thất bại";
      } finally {
        this.loading = false;
      }
    },
    async logout() {
      this.isLoading = true;
      this.error = null;
      try {
        return await toast.promise(AuthService.logout(), {
          pending: "Đang đăng xuất",
          success: {
            render({ data }) {
              router.push({ path: "/log-in" });
              return `${data.message || "Đăng xuất thành công"}`;
            },
          },
        });
      } catch (error) {
        console.error("Logout error:", error);
      }
    },
  },
});
