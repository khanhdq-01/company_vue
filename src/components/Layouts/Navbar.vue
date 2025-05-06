<template>
    <div :class="['navbar-area', {'is-sticky': isSticky}]">
        <div class="striki-nav">
            <div class="container">
                <nav class="navbar navbar-expand-lg navbar-light">
                    <router-link class="navbar-brand custom-logo" to="/">
                        <img src="../../assets/img/logo_kingsoft_header.png" alt="logo" />
                    </router-link>
                    <div 
                        class="navbar-toggler"
                        @click="active = !active" :aria-pressed="active ? 'true' : 'false'"
                        v-bind:class="{ 'active': button_active_state }"
                        v-on:click="button_active_state = !button_active_state"
                    >
                        <span class="icon-bar top-bar"></span>
                        <span class="icon-bar middle-bar"></span>
                        <span class="icon-bar bottom-bar"></span>
                    </div>

                    <div class="collapse navbar-collapse" :class="{ show: active }" is-nav>
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link">Trang chủ</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/about" class="nav-link">Giới thiệu</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a href="#" class="nav-link">
                                    Dịch vụ <i class='bx bx-chevron-down'></i>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="nav-item">
                                        <router-link to="/services-three" class="nav-link">Dịch vụ</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/team" class="nav-link">Đội ngũ</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/log-in" class="nav-link">Đăng nhập</router-link>
                                    </li>

                                    <li class="nav-item">
                                        <router-link to="/faq" class="nav-link">Câu hỏi thường gặp</router-link>
                                    </li>
                                </ul>
                            </li>

                            <li class="nav-item">
                                <router-link to="/blog-one" class="nav-link">Bài viết</router-link>
                            </li>

                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link">Liên hệ</router-link>
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
import { BASE_API_URL} from "@/main";

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
                    await axios.post(`${BASE_API_URL}/auth/logout`, {}, {
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
            localStorage.clear();
            this.isLoggedIn = false;
        },
    },
}
</script>