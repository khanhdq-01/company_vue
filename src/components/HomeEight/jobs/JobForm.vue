<template>
  <div class="container mt-5">
    <h2>{{ isEdit ? "Sửa" : "Thêm mới" }}</h2>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Tiêu đề công việc *</label>
        <input
          type="text"
          id="title"
          class="form-control"
          v-model="form.title"
          :class="{ 'is-invalid': errors.title }"
        />
        <div class="invalid-feedback" v-if="errors.title">
          {{ errors.title }}
        </div>
      </div>

      <div class="mb-3">
        <label for="description" class="form-label">Mô tả *</label>
        <textarea
          id="description"
          class="form-control"
          v-model="form.description"
          :class="{ 'is-invalid': errors.description }"
        ></textarea>
        <div class="invalid-feedback" v-if="errors.description">
          {{ errors.description }}
        </div>
      </div>

      <div class="mb-3">
        <label for="location" class="form-label">Địa điểm</label>
        <input
          type="text"
          id="location"
          class="form-control"
          v-model="form.location"
          :class="{ 'is-invalid': errors.location }"
        />
        <div class="invalid-feedback" v-if="errors.location">
          {{ errors.location }}
        </div>
      </div>

      <div class="mb-3">
        <label for="salary" class="form-label">Mức lương (VNĐ)</label>
        <input
          type="number"
          id="salary"
          class="form-control"
          v-model="form.salary"
          :class="{ 'is-invalid': errors.salary }"
          min="0"
        />
        <div class="invalid-feedback" v-if="errors.salary">
          {{ errors.salary }}
        </div>
      </div>

      <button type="submit" class="btn btn-success">
        {{ isEdit ? "Cập nhật" : "Tạo mới" }}
      </button>
      <router-link to="/job-list" class="btn btn-secondary ms-2">Quay lại</router-link>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { BASE_API_URL } from "@/main";

export default {
  name: "JobForm",
  props: {
    isEdit: Boolean,
    jobId: Number,
  },
  data() {
    return {
      form: {
        title: "",
        description: "",
        location: "",
        salary: null,
      },
      errors: {},
    };
  },
  mounted() {
    if (this.isEdit && this.jobId) {
      this.fetchJob();
    }
  },
  methods: {
    async fetchJob() {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${BASE_API_URL}/jobs/${this.jobId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        this.form = res.data;
      } catch (error) {
        console.error("Lỗi khi tải job:", error);
      }
    },

    async submitForm() {
      const token = localStorage.getItem("token");
      this.errors = {};
      try {
        if (this.isEdit && this.jobId) {
          await axios.put(`${BASE_API_URL}/jobs/${this.jobId}`, this.form, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        } else {
          await axios.post(`${BASE_API_URL}/jobs`, this.form, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        }
        this.$router.push("/job-list");
      } catch (error) {
        if (error.response && error.response.status === 422) {
          this.errors = error.response.data.errors || {};
        } else {
          console.error("Lỗi khi gửi form:", error);
        }
      }
    },
  },
};
</script>

<style scoped>
.invalid-feedback {
  font-size: 0.9em;
}
</style>
