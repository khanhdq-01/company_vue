<template>
    <div class="container mt-5">
      <h2 v-if="isEdit">Edit video</h2>
      <h2 v-else>Add New video</h2>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="video_url" class="form-label">video_url</label>
          <input type="text" class="form-control" v-model="formData.video_url" id="video_url" required>
        </div> 
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
          <router-link to="/video-list" class="btn btn-secondary ms-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL } from "@/main";
  
  export default {
    name: "videoForm",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      videoId: {
        type: [String, Number],
        default: null
      }
    },
    data() {
      return {
        formData: {
          video_url: '',
        },
      };
    },
    mounted() {
      if (this.isEdit) {
        this.fetchVideo();
      }
    },
    methods: {
      async fetchVideo() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/video/${this.videoId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.formData.video_url = response.data.video_url;
        } catch (error) {
          console.error("Error fetching video:", error);
        }
      },
      async submitForm() {
      const token = localStorage.getItem("token");
      try {
        const videoData = {
          video_url: this.formData.video_url,
        };
        if (this.isEdit) {
          await axios.put(`${BASE_API_URL}/video/${this.videoId}`, videoData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        } else {
          await axios.post(`${BASE_API_URL}/video`, videoData, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
        }
        this.$router.push('/video-list');
      } catch (error) {
        console.error("Error saving video:", error);
      }
    }

    }
  };
  </script>