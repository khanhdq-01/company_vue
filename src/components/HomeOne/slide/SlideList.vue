<template>
    <div class="container mt-5">
      <h2>Management Slides</h2>
      <router-link to="/slide/add" class="btn btn-primary mb-3">Add New Slide</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Desctiption</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="slide in slides" :key="slide.id">
            <td>{{ slide.id }}</td>
            <td>{{ slide.title }}</td>
            <td>{{ slide.description }}</td>
            <td><img :src="url + slide.image_path" class="img-thumbnail" style="max-width: 100px;"></td>
            <td>
              <router-link :to="'/slide/edit/' + slide.id" class="btn btn-sm btn-warning me-2">Edit</router-link>
              <button @click="deleteSlides(slide.id)" class="btn btn-sm btn-danger">Delete</button>
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
  import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";
  
  export default {
    name: "slideList",
    data() {
      return {
        slides: [],
        url: BASE_IMAGE_URL + 'slides/',
      };
    },
    mounted() {
      this.fetchSlides();
    },
    methods: {
      async fetchSlides() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/slide`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.slides = response.data.data;
        } catch (error) {
          console.error("Error fetching slides:", error);
        }
      },
      async deleteSlides(id) {
        if (confirm("Are you sure you want to delete this slide?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`${BASE_API_URL}/slide/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchSlides(); // Refresh the list
          } catch (error) {
            console.error("Error deleting slide:", error);
          }
        }
      }
    }
  };
  </script>