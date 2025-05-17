<template>
    <div class="container mt-5">
      <h2>About Management</h2>
      <router-link to="/about-header/add" class="btn btn-primary mb-3">Add New About</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Subtitle</th>
            <th>Title</th>
            <th>Content</th>
            <th>Desctiption</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="about in abouts" :key="about.id">
            <td>{{ about.id }}</td>
            <td>{{ about.subtitle }}</td>
            <td>{{ about.title }}</td>
            <td>{{ about.content }}</td>
            <td>{{ about.desctiption }}</td>
            <td><img :src="url + about.image_path" class="img-thumbnail" style="max-width: 100px;"></td>
            <td>
              <router-link :to="'/about-header/edit/' + about.id" class="btn btn-sm btn-warning me-2">Edit</router-link>
              <button @click="deleteabout(about.id)" class="btn btn-sm btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="mb-3">
          <router-link to="/about" class="btn btn-secondary ms-2">Back Home</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";
  
  export default {
    name: "aboutList",
    data() {
      return {
        abouts: [],
        url: BASE_IMAGE_URL + 'abouts/',
      };
    },
    mounted() {
      this.fetchabouts();
    },
    methods: {
      async fetchabouts() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/about`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.abouts = response.data.data;
        } catch (error) {
          console.error("Error fetching abouts:", error);
        }
      },
      async deleteabout(id) {
        if (confirm("Are you sure you want to delete this about?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`${BASE_API_URL}/about/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchabouts(); // Refresh the list
          } catch (error) {
            console.error("Error deleting about:", error);
          }
        }
      }
    }
  };
  </script>