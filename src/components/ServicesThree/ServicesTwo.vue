<template>
  <div class="services-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="text-end mb-4" v-if="isAdmin">
            <router-link to="/add-service" class="btn btn-primary" >
              Add New Service
            </router-link>
          </div>
        <div
          class="col-lg-4 col-md-6"
          v-for="service in serviceData"
          :key="service.id"
        >
          <div class="single-services-box">
            <div class="row m-0">
              <div class="col-6 p-0">
                <div class="content px-3">
                  <h3>{{ service.title }}</h3>
                  <div v-html="service.long_description"></div>
                  <router-link :to="`/single-service/${service.id}`" class="read-more-btn">
                    Xem thêm
                    <i class="bx bx-right-arrow-alt"></i>
                  </router-link>
                </div>
              </div>

              <div class="col-6 p-0">
                <img
                  v-if="service.image"
                  :src="url + service.image"
                  alt="image"
                  class="service-img"
                  style="object-fit: fill;"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-12 col-md-12">
          <div class="pagination-area">
            <button
              :disabled="!pagination.prev_page_url"
              @click="fetchServices(pagination.current_page - 1)"
            >
              &laquo;
            </button>

            <button
              v-for="page in pagination.last_page"
              :key="page"
              :class="{ active: page === pagination.current_page }"
              @click="fetchServices(page)"
            >
              {{ page }}
            </button>

            <button
              :disabled="!pagination.next_page_url"
              @click="fetchServices(pagination.current_page + 1)"
            >
              &raquo;
            </button>
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
      pagination: {},
      isAdmin: false,
    };
    },
    created() {
      const role = localStorage.getItem('role_id')
      this.isAdmin = role === '1'
      this.fetchServices(1)
    },
    methods: {
        async fetchServices(page = 1)  {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(`${BASE_API_URL}/service?page=${page}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          this.serviceData = response.data.data;
          this.pagination = {
            current_page: response.data.current_page,
            last_page: response.data.last_page,
            next_page_url: response.data.next_page_url,
            prev_page_url: response.data.prev_page_url,
          }
        } catch (error) {
          console.error("Error fetching member data:", error);
        }
      },
      async onImageChange(event, serviceId) {
        const file = event.target.files[0];
        if (!file) return;

        const formData = new FormData();
        formData.append("image", file);

        const token = localStorage.getItem("token");

        try {
          await axios.post(`${BASE_API_URL}/service/${serviceId}`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          });

          this.fetchServices(this.pagination.current_page);
        } catch (err) {
          console.error("Image update failed:", err);
        }
      },
      formatDate(dateStr) {
        if (!dateStr) return ''
            const options = { year: 'numeric', month: 'short', day: 'numeric' }
            return new Date(dateStr).toLocaleDateString(undefined, options)
      },
  },
};
</script>

<style scoped>
.single-services-box {
  height: 90%;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: row;
}

.single-services-box:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.single-services-box .content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 15px;
  max-width: 100%;
}

.single-services-box .content h3 {
  font-size: 12px;
  padding-right: 10px;
  font-weight: bold;
  line-height: 1.4;
  overflow: hidden;
  margin-bottom: 10px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
}

.single-services-box .content div {
  max-height: 150px;
  overflow: hidden;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  font-size: 14px;
}

.read-more-btn {
  color: #007bff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 5px;
}

.single-services-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-left: 1px solid #eaeaea;
  border-radius: 0 10px 10px 0;
  max-height: 300px;
}

.pagination-area button {
  margin: 5px;
  padding: 5px 10px;
  border: none;
  width: 40px;
}

.pagination-area button.active {
  background-color: #007bff;
  color: white;
}
</style>