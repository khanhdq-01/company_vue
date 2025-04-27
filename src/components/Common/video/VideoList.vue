<template>
    <div class="container mt-5">
      <h2>Management video</h2>
      <router-link to="/video/add" class="btn btn-primary mb-3">Add New video</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Url</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="video in videos" :key="video.id">
            <td>{{ video.id }}</td>
            <td>{{ video.video_url }}</td>
            <td>
              <button @click="deletevideo(video.id)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-3">
          <router-link to="/" class="btn btn-secondary ms-2">Back Home</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL } from "@/main";
  
  export default {
    name: "videoList",
    data() {
      return {
        videos: [],
      };
    },
    mounted() {
      this.fetchvideos();
    },
    methods: {
      async fetchvideos() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/video`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.videos = response.data;
        } catch (error) {
          console.error("Error fetching videos:", error);
        }
      },
      async deletevideo(id) {
        if (confirm("Are you sure you want to delete this video?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`${BASE_API_URL}/video/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchvideos(); // Refresh the list
          } catch (error) {
            console.error("Error deleting video:", error);
          }
        }
      }
    }
  };
  </script>