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
                    <img src="../../assets/img/logo.png" alt="image" />
                  </router-link>
                </div>

                <h3>Welcome back</h3>
                <p>
                  New to Striki?
                  <router-link to="/sign-up">Sign up</router-link>
                </p>

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

                  <div class="forgot-password">
                    <a href="#">Forgot Password?</a>
                  </div>

                  <div class="connect-with-social">
                    <button type="button" class="facebook">
                      <i class="bx bxl-facebook"></i> Connect with Facebook
                    </button>
                    <button type="button" class="google">
                      <i class="bx bxl-google"></i> Connect with Google
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
import { useAuthStore } from "../../stores/auth";

export default {
  setup() {
    const { user, isAuthLoading, login } = useAuthStore();
    return {
      user,
      isAuthLoading,
      login,
    };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.login({ email: this.email, password: this.password });
    },
    // mounted() {
    //   const userName = localStorage.getItem("name");
    //   if (userName && userName !== "null" && userName.trim() !== "") {
    //     router.push({ path: '/' });
    //   }
    // },
  },
};
</script>
