<template>
    <div class="team-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-3 col-sm-6"
                    v-for="(memberOther, index) in memberOtherData"
                    :key="memberOther.id"
                >
                    <div class="single-team-box">
                        <div class="image position-relative text-center mb-3">
                        <img
                            v-if="memberOther.image_path"
                            :src="url + memberOther.image_path"
                            alt="image"
                            class="img-fluid rounded object-fit-cover member-img"
                        />
                        <ul class="social list-inline mt-2">
                            <li class="list-inline-item"><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                            <li class="list-inline-item"><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                        </ul>
                        </div>
                        <div class="content text-center">
                            <h5 class="fw-bold text-dark mb-1">{{ memberOther.name }}</h5>
                            <p class="text-muted mb-0">{{ memberOther.position }}</p>
                            <!-- <p class="text-secondary small">{{ member.description }}</p> -->
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/member-other-list" class="btn btn-primary">
                        Manage Teams
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Team",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      memberOtherData: [],
      url: BASE_IMAGE_URL + 'member_others/',
      isLoggedIn: !!localStorage.getItem("token"),
      userRole: parseInt(localStorage.getItem("role_id")) || null,
    };
    },
    mounted() {
      this.fetchMemberData();
    },
    methods: {
      async fetchMemberData() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/member_other`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.memberOtherData = response.data.data;
        } catch (error) {
          console.error("Error fetching member data:", error);
        }
      },
  },
});
</script>