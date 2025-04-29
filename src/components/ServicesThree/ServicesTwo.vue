<template>
    <div class="services-area ptb-100">
        <div class="container">
            <div class="row">
                <div
                    class="col-lg-6 col-md-6 mb-4"
                    v-for="service in serviceData"
                    :key="service.id"
                >
                    <div class="single-services-box d-flex flex-column h-100">
                    <div class="row m-0 h-100">
                        <div class="col-6 p-0 d-flex align-items-center">
                        <div class="content px-3">
                            <h3>{{ service.title }}</h3>
                            <div v-html="service.long_description"></div>

                            <router-link :to="`/single-service/${service.id}`" class="read-more-btn">
                            Read More 
                            <i class="bx bx-right-arrow-alt"></i>
                            </router-link>
                        </div>
                        </div>

                        <div class="col-6 p-0">
                        <img
                            v-if="service.image"
                            :src="url + service.image"
                            alt="image"
                            class="img-fluid rounded object-fit-cover w-100 h-100"
                            style="object-fit: cover;"
                        />
                        </div>
                    </div>
                    </div>
                </div>
                <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
                    <router-link to="/add-service" class="btn btn-primary">
                        Add Service
                    </router-link>
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

<style scoped>
.single-services-box {
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}
.single-services-box:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
}
.read-more-btn {
  color: #007bff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
</style>