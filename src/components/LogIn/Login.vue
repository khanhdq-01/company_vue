<template>
    <div class="login-area">
      <div class="row m-0">
        <div class="col-lg-6 col-md-12 p-0">
          <div class="login-image">
            <img src="../../assets/img/login-bg.jpg" alt="image" />
          </div>
        </div>
  
        <div class="col-lg-6 col-md-12 p-0">
          <div class="login-content">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="login-form">
                  <div class="logo">
                    <router-link to="/">
                      <img src="../../assets/img/logo_kingsoft_login.png" alt="image" />
                    </router-link>
                  </div>
  
                  <!-- <h3>Welcome back</h3>
                  <p>
                    New to Kingsoft?
                    <router-link to="/sign-up">Sign up</router-link>
                  </p> -->
  
                  <form @submit.prevent="login">
                    <div class="form-group">
                      <input
                        type="email"
                        v-model="email"
                        placeholder="Your email address"
                        class="form-control"
                        required
                      />
                    </div>
  
                    <div class="form-group">
                      <input
                        type="password"
                        v-model="password"
                        placeholder="Your password"
                        class="form-control"
                        required
                      />
                    </div>
  
                    <button type="submit" class="default-btn">
                      <i class="bx bxs-hot"></i>Login<span></span>
                    </button>
  
                    <!-- <div class="forgot-password">
                      <a href="#">Forgot Password?</a>
                    </div> -->
                      
                    <div class="connect-with-social">
                      <button type="button">
                        <router-link to="/">Quay Lại Trang Chủ</router-link>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import router from "@/router";
  import { BASE_API_URL} from "@/main";
  
  export default {
    data() {
      return {
        email: "",
        password: "",
      };
    },
    methods: {
      async login() {
        try {
          const response = await axios.post(`${BASE_API_URL}/auth/login`, {
            email: this.email,
            password: this.password,
          });
          const user = response.data.data;
          localStorage.setItem("email", user.email);
          localStorage.setItem("name", user.name);
          localStorage.setItem("role_id", user.role_id);
          localStorage.setItem("token", user.token);
  
          router.push({ path: '/' });

        } catch (error) {
          console.error("Lỗi khi đăng nhập:", error);
          alert("Sai email hoặc mật khẩu.");
        }
      },
    },
  };
  </script>
  