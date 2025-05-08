<template>
    <div :class="['navbar-area', { 'is-sticky': isSticky }]">
      <div class="striki-nav">
        <div class="container">
          <nav class="navbar navbar-expand-lg navbar-light">
            <router-link class="navbar-brand" to="/">
              <img
                src="../../assets/img/logo_company.png"
                alt="logo"
                style="height: 30px; width: auto"
              />
            </router-link>
  
            <div
              class="navbar-toggler"
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              v-bind:class="{ active: button_active_state }"
              v-on:click="button_active_state = !button_active_state"
            >
              <span class="icon-bar top-bar"></span>
              <span class="icon-bar middle-bar"></span>
              <span class="icon-bar bottom-bar"></span>
            </div>
  
            <div
              class="collapse navbar-collapse"
              :class="{ show: active }"
              is-nav
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <router-link href="#" class="nav-link" to="/">
                    Trang chủ
                  </router-link>
                  <!-- home list menu -->
                  <!-- <ul class="dropdown-menu">
                                      <li class="nav-item">
                                          <router-link to="/" class="nav-link">
                                              Home
                                          </router-link>
                                      </li>
                            
                                       <li class="nav-item">
                                          <router-link to="/home-four" class="nav-link">
                                              Home four
                                          </router-link>
                                      </li>
                                      <li class="nav-item">
                                          <router-link to="/home-six" class="nav-link">
                                              Home six
                                          </router-link>
                                      </li>
                                      <li class="nav-item">
                                          <router-link to="/home-eight" class="nav-link">
                                              Home eight
                                          </router-link>
                                      </li>
                                      <li class="nav-item">
                                          <router-link to="/home-nine" class="nav-link">
                                             Home nine
                                          </router-link>
                                      </li> 
                                  </ul> -->
                </li>
  
                <li class="nav-item">
                  <router-link to="/about" class="nav-link"
                    >Về chúng tôi</router-link
                  >
                </li>
  
                <li class="nav-item">
                  <router-link to="/pricing" class="nav-link"
                    >Pricing</router-link
                  >
                </li>
  
                <li class="nav-item">
                  <a href="#" class="nav-link">
                    Pages <i class="bx bx-chevron-down"></i>
                  </a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <a href="#" class="nav-link">
                        Dịch vụ
                        <i class="bx bx-chevron-down"></i>
                      </a>
                      <ul class="dropdown-menu">
                        <li class="nav-item">
                          <router-link to="/services-three" class="nav-link"
                            >Dịch vụ</router-link
                          >
                        </li>
  
                        <li class="nav-item">
                          <router-link to="/single-service" class="nav-link"
                            >Chi tiết dịch vụ</router-link
                          >
                        </li>
                      </ul>
                    </li>
  
                    <li class="nav-item">
                      <router-link to="/features-one" class="nav-link"
                        >Tính năng</router-link
                      >
                    </li>
  
                    <li class="nav-item">
                      <router-link to="/team" class="nav-link">Đội ngũ</router-link>
                    </li>
  
                    <li class="nav-item">
                      <router-link to="/log-in" class="nav-link"
                        >Đăng nhập</router-link
                      >
                    </li>
  
                    <li class="nav-item">
                      <router-link to="/sign-up" class="nav-link"
                        >Đăng ký</router-link
                      >
                    </li>
  
                    <li class="nav-item">
                      <router-link to="/faq" class="nav-link">FAQ</router-link>
                    </li>
                  </ul>
                </li>
  
                <li class="nav-item">
                  <a href="#" class="nav-link"
                    >Blog <i class="bx bx-chevron-down"></i
                  ></a>
                  <ul class="dropdown-menu">
                    <li class="nav-item">
                      <router-link to="/blog-one" class="nav-link"
                        >Blog</router-link
                      >
                    </li>
                    <!-- <li class="nav-item">
                      <router-link to="/blog-two" class="nav-link"
                        >Blog Right Sidebar</router-link
                      >
                    </li> -->
                    <li class="nav-item">
                      <router-link to="/single-blog" class="nav-link"
                        >Nội dung Blog</router-link
                      >
                    </li>
                  </ul>
                </li>
  
                <li class="nav-item">
                  <router-link to="/contact" class="nav-link"
                    >Liên hệ</router-link
                  >
                </li>
              </ul>
              <div class="others-options">
                <router-link v-if="!isLoggedIn" to="/log-in" class="optional-btn">
                  <i class="bx bx-log-in"></i>Đăng nhập<span></span>
                </router-link>
                <button v-else class="optional-btn" @click="logout">
                  <i class="bx bx-log-out"></i>Đăng xuất<span></span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from 'axios'
import router from '@/router'

export default {
    name: 'Navbar',

    data() {
        return {
            isSticky: false,
            active: false,
            button_active_state: false,
            isLoggedIn: false,
        }
    },

    mounted() {
        this.checkAuthStatus();

        window.addEventListener('scroll', () => {
            this.isSticky = window.scrollY >= 100;
        });
    },

    methods: {
        checkAuthStatus() {
            const token = localStorage.getItem('token');
            this.isLoggedIn = !!token;
        },

        async logout() {
            try {
                const token = localStorage.getItem('token');

                if (token) {
                    await axios.post("http://127.0.0.1:8000/api/auth/logout", {}, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    this.clearLocalStorage();
                    router.push({ path: '/log-in' });
                } else {
                    this.clearLocalStorage();
                    router.push({ path: '/log-in' });
                }
            } catch (error) {
                console.error("Logout error:", error);
                this.clearLocalStorage();
                router.push({ path: '/log-in' });
            }
        },

        clearLocalStorage() {
            localStorage.removeItem('token');
            this.isLoggedIn = false;
        },
    },
}
</script>