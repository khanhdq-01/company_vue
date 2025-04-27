<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div v-for="(about, index) in aboutData" :key="about.id" class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">{{ about.subtitle }}</span>
                        <h2>{{ about.title }}</h2>
                        <p>{{ about.content }}</p>
                        <p>{{ about.description }}</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                  <div class="about-image">
                    <img
                        v-if="about.image_path"
                        :src="url + about.image_path"
                        alt="image"
                        class="img-fluid rounded-4 shadow-lg border border-light"
                      />
                  </div>
                </div>
            </div>
            <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/about-header-list" class="btn btn-primary">
                        Manage About
                    </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

export default {
    name: 'TakeYourBusiness',

  data() {
    return {
      aboutData: [],
      url: BASE_IMAGE_URL + 'abouts/',
      isLoggedIn: !!localStorage.getItem("token"),
      userRole: parseInt(localStorage.getItem("role_id")) || null,
    };
  },
  mounted() {
    this.fetchaboutData();
  },
  methods: {
    async fetchaboutData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(`${BASE_API_URL}/about`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.aboutData = response.data.data;
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    },
  },
};
</script>