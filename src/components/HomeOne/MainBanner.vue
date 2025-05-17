<template>
    <div class="main-banner main-banner-one">
        <div class="container-fluid">
            <div class="row"
                    v-for="(slide, index) in slideData"
                    :key="slide.id">
                <div class="col-lg-7 col-md-12">
                    <div class="main-banner-content">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="content">
                                    <h1>{{ slide.title }}</h1>
                                    <p>{{ slide.description }}</p>
                                    <router-link to="/contact" class="default-btn">
                                        <i class="bx bxs-hot"></i>Get Started<span></span>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-5 col-md-12">
                    <div class="banner-image mbanner-bg-one">
                        <div class="d-table">
                            <div class="d-table-cell">
                                <div class="animate-banner-image">
                                    <img  v-if="slide.image_path"
                                    :src="url + slide.image_path"
                                    alt="image">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="text-center text-muted mt-5" v-if="slideData.length === 0">
              No items to display
            </p>
            <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/slide-list" class="btn btn-primary">
                      Manager Slide
                    </router-link>
                </div>
        </div>
    
        <div class="shape20"><img src="../../assets/img/shape/19.png" alt="image"></div>
        <div class="shape21"><img src="../../assets/img/shape/20.png" alt="image"></div>
        <div class="shape19"><img src="../../assets/img/shape/18.png" alt="image"></div>
        <div class="shape22"><img src="../../assets/img/shape/21.png" alt="image"></div>
        <div class="shape23"><img src="../../assets/img/shape/22.svg" alt="image"></div>
        <div class="shape24"><img src="../../assets/img/shape/23.png" alt="image"></div>
        <div class="shape26"><img src="../../assets/img/shape/25.png" alt="image"></div>
    </div>
</template>

<script>
import axios from "axios"
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

export default {
  name: "MainBanner",
  data() {
    return {
      slideData: [],
      url: BASE_IMAGE_URL + 'slides/',
      isLoggedIn: !!localStorage.getItem("token"),
      userRole: parseInt(localStorage.getItem("role_id")) || null,
    };
  },
  mounted() {
    this.fetchSlideData();
  },
  methods: {
    async fetchSlideData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${BASE_API_URL}/slide`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.slideData = response.data.data;
      } catch (error) {
        console.error("Error fetching slide data:", error);
      }
    },
  },
};

</script>