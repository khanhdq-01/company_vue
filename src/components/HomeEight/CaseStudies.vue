<template>
  <div class="recruitment-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-left">
        <span class="sub-title">Tuyển dụng</span>
        <h2>Cơ hội nghề nghiệp tại KodingSoft</h2>
        <p>
          Cùng KodingSoft xây dựng sự nghiệp vững chắc! Chúng tôi luôn tìm kiếm
          những tài năng đam mê công nghệ để đồng hành và phát triển lâu dài.
        </p>
      </div>
    </div>

    <div class="container-fluid">
      <div class="recruitment-carousel">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="job in jobs" :key="job.id">
            <div class="single-job-item">
              <div class="content">
                <h3>{{ job.title }}</h3>
                <p class="desc">{{ job.description }}</p>
                <p v-if="job.location" class="info">
                  📍 <strong>Địa điểm:</strong> {{ job.location }}
                </p>
                <p v-if="job.salary" class="info">
                  💰 <strong>Mức lương:</strong> {{ formatSalary(job.salary) }}
                </p>
                <router-link :to="`/apply/${job.id}`" class="apply-btn">
                  Ứng tuyển ngay <i class="bx bx-right-arrow-alt"></i>
                </router-link>
              </div>
            </div>
          </slide>

          <template #addons>
            <Navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";
import axios from "axios";
import { BASE_API_URL} from "@/main";

export default defineComponent({
  name: "RecruitmentCarousel",
  components: { Carousel, Slide, Navigation },
  data() {
    return {
      settings: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      jobs: [],
      breakpoints: {
        0: { itemsToShow: 1 },
        576: { itemsToShow: 2 },
        992: { itemsToShow: 3 },
        1200: { itemsToShow: 4 },
      },
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await axios.get(`${BASE_API_URL}/jobs`);
        this.jobs = response.data;
      } catch (error) {
        console.error("Lỗi khi tải danh sách tuyển dụng:", error);
      }
    },
    formatSalary(salary) {
      return new Intl.NumberFormat("vi-VN", {
        style: "currency",
        currency: "VND",
        minimumFractionDigits: 0,
      }).format(salary);
    },
  },
});
</script>

<style scoped>
.recruitment-area .section-title p {
  font-size: 16px;
  color: #555;
  max-width: 700px;
  margin-top: 10px;
  line-height: 1.6;
}

.recruitment-carousel {
  margin-top: 30px;
}

.single-job-item {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
  padding: 25px 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease-in-out;
}

.single-job-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 18px 30px rgba(0, 0, 0, 0.1);
}

.single-job-item .content h3 {
  font-size: 20px;
  font-weight: 700;
  color: #222;
  margin-bottom: 10px;
}

.single-job-item .desc {
  font-size: 14px;
  color: #555;
  margin-bottom: 12px;
  line-height: 1.6;
  max-height: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.single-job-item .info {
  font-size: 14px;
  color: #333;
  margin-bottom: 6px;
}

.apply-btn {
  margin-top: 12px;
  font-weight: 600;
  color: #ffffff;
  background-color: #007bff;
  padding: 10px 18px;
  border-radius: 6px;
  display: inline-block;
  transition: background 0.3s ease;
  text-align: center;
}

.apply-btn:hover {
  background-color: #0056b3;
  color: #fff;
  text-decoration: none;
}
</style>
