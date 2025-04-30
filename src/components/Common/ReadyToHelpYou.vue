<template>
    <div class="team-area pt-100 pb-70">
        <div class="container">
            <!-- <div class="section-title">
                <h2>Gặp gỡ các chuyên gia của chúng tôi, luôn sẵn sàng giúp đỡ bạn.</h2>
            </div> -->
            <div class="row">
                <div
                    class="col-lg-3 col-sm-6"
                    v-for="(member, index) in memberData"
                    :key="member.id"
                >
                    <div class="single-team-box">
                        <div class="image position-relative text-center mb-3">
                        <img
                            v-if="member.image_path"
                            :src="url + member.image_path"
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
                            <h5 class="fw-bold text-dark mb-1">{{ member.name }}</h5>
                            <p class="text-muted mb-0">{{ member.position }}</p>
                            <!-- <p class="text-secondary small">{{ member.description }}</p> -->
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/member-list" class="btn btn-primary">
                        Manage members
                    </router-link>
                </div>
              </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

export default {
  name: "ReadyToHelpYou",
  data() {
    return {
      memberData: [],
      url: BASE_IMAGE_URL + 'members/',
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
        const response = await axios.get(`${BASE_API_URL}/member`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.memberData = response.data.data;
      } catch (error) {
        console.error("Error fetching member data:", error);
      }
    },
  },
};

</script>