<template>
    <div class="services-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="single-services-box">
                        <div class="row m-0" v-for="service in serviceData" :key="service.id">
                            <div class="col-lg-6 col-md-12 p-0">
                                <div class="content">
                                    <h3>
                                        {{ service.title }}
                                    </h3>
                                    <p>{{ service.long_description }}</p>
                                    <router-link :to="`/single-service/${service.id}`" class="read-more-btn">
                                        Read More 
                                        <i class='bx bx-right-arrow-alt'></i>
                                    </router-link>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12 p-0">
                                <div>
                                    <img
                                    v-if="service.image"
                                    :src="url + service.image"
                                    alt="image"
                                    class="img-fluid rounded object-fit-cover member-img"
                                    />
                                </div>
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
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

export default{
  name: "ServicesTwo",
  data() {
    return {
      serviceData: [],
      url: BASE_IMAGE_URL + 'services/',
      isLoggedIn: !!localStorage.getItem("token"),
      userRole: parseInt(localStorage.getItem("role_id")) || null,
    };
    },
    mounted() {
        this.fetchServices();
    },
    methods: {
        async fetchServices()  {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/service`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.serviceData = response.data;
          console.log(this.serviceData);
        } catch (error) {
          console.error("Error fetching member data:", error);
        }
      },
  },
};
</script>