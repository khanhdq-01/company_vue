<template>
  <div class="partner-area pt-100 pb-70 bg-f8fbfa">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-12">
          <div class="partner-title">
            <h3>Được giới thiệu bởi:</h3>
          </div>
        </div>

        <div class="col-lg-9 col-md-12">
          <div class="partner-slides">
            <carousel
              :autoplay="5000"
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <slide  v-for="(memberOther, index) in memberOtherData "  :key="memberOther.id">
                <div class="single-partner-item">
                  <a href="#"
                  class="text-decoration-none"
                  style="font-family: 'Great Vibes', cursive; font-size: 2rem; letter-spacing: 1px;">
                  {{ memberOther.name }}
                  </a>
                </div>
              </slide>

              <template #addons> </template>
            </carousel>
          </div>
        </div>
        <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/member-other-list" class="btn btn-primary">
                        Manage name
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
import { BASE_API_URL} from "@/main";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Partner",
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      memberOtherData: [],
      isLoggedIn: !!localStorage.getItem("token"),
      userRole: parseInt(localStorage.getItem("role_id")) || null,
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      breakpoints: {
        0: {
          itemsToShow: 1,
          snapAlign: "center",
        },
        576: {
          itemsToShow: 2,
          snapAlign: "left",
        },
        768: {
          itemsToShow: 3,
          snapAlign: "center",
        },
        1200: {
          itemsToShow: 4,
          snapAlign: "left",
        },
      },
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
<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

</style>
