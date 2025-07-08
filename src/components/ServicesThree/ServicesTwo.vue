<template>
  <div class="services-area ptb-100">
    <div class="container">
      <div class="section-title">
          <h2>Dịch vụ của chúng tôi</h2>
      </div>
      <div class="row">
        <div class="text-end mb-4" v-if="isAdmin">
            <router-link to="/add-service" class="btn btn-primary" >
              Add New Service
            </router-link>
          </div>
        <div
          class="col-lg-4 col-md-6 mb-3"
          v-for="service in serviceData"
          :key="service.id"
        >
          <div class="custom-service-box">
            <div class="custom-text">
              <h3>{{ service.title }}</h3>
              <div v-html="service.long_description"></div>
              <router-link :to="`/single-service/${service.id}`" class="read-more-btn">
                Xem thêm
                <i class="bx bx-right-arrow-alt"></i>
              </router-link>
            </div>
            <div class="custom-image-wrapper">
              <img
                v-if="service.image"
                :src="url + service.image"
                alt="image"
                class="custom-image"
              />
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
.read-more-btn {
  color: #007bff;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 5px;
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

.custom-service-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eaeaea;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  gap: 20px;
  flex-wrap: wrap;
  height: 100%;
}

.custom-service-box:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.custom-text {
  flex: 1 1 50%;
  min-width: 280px;
}

.custom-text h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.custom-text div {
  font-size: 14px;
  line-height: 1.5;
  max-height: 150px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
}

.custom-image-wrapper {
  flex: 1 1 40%;
  min-width: 260px;
  transform: rotate(0deg);
  transition: transform 0.4s ease;
}

.custom-service-box:hover .custom-image-wrapper {
  transform: rotate(-3deg) scale(1.03);
}

.custom-image {
  width: 100%;
  border-radius: 8px;
  object-fit: fill;
  max-height: 290px;
}

@media (max-width: 768px) {
  .custom-service-box {
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
  }
  .custom-image-wrapper {
    transform: none;
  }
}
</style>