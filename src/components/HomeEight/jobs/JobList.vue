<template>
    <div class="container mt-5">
      <h2>Quản lý công việc</h2>
      <router-link to="/job/add" class="btn btn-primary mb-3">Thêm mới</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Mô tả</th>
            <th>Địa chỉ</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.id">
            <td>{{ job.id }}</td>
            <td>{{ job.title }}</td>
            <td>{{ job.description }}</td>
            <td>{{ job.location }}</td>
            <td>{{ job.salary }}</td>
            <td>
              <router-link :to="'/job/edit/' + job.id" class="btn btn-sm btn-warning me-2">Sửa</router-link>
              <button @click="deleteJobs(job.id)" class="btn btn-sm btn-danger">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-3">
          <router-link to="/recruitment" class="btn btn-secondary ms-2">Quay lại</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL} from "@/main";
  
  export default {
    name: "jobList",
    data() {
      return {
        jobs: [],
      };
    },
    mounted() {
      this.fetchJobs();
    },
    methods: {
      async fetchJobs() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/jobs`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.jobs = response.data;
          console.log("Jobs fetched successfully:", this.jobs);
        } catch (error) {
          console.error("Error fetching job:", error);
        }
      },
      async deleteJobs(id) {
        if (confirm("Are you sure you want to delete this job?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`${BASE_API_URL}/jobs/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchJobs(); // Refresh the list
          } catch (error) {
            console.error("Error deleting job:", error);
          }
        }
      }
    }
  };
  </script>