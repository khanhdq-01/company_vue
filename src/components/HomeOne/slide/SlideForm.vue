<template>
    <div class="container mt-5">
      <h2 v-if="isEdit">Edit Slide</h2>
      <h2 v-else>Add New slide</h2>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" class="form-control" v-model="formData.title" id="title" required>
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <input type="text" class="form-control" v-model="formData.description" id="description" required>
        </div>
        
        <div class="mb-3">
          <label for="image" class="form-label">Image</label>
          <input type="file" class="form-control" @change="handleImageChange" id="image" :required="!isEdit">
          <small v-if="isEdit" class="text-muted">Leave empty to keep current image</small>
        </div>
        
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
          <router-link to="/slide-list" class="btn btn-secondary ms-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";
  
  export default {
    name: "slideForm",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      slideId: {
        type: [String, Number],
        default: null
      }
    },
    data() {
      return {
        formData: {
          title: '',
          description: '',
          image_path: null
        },
        url: BASE_IMAGE_URL + 'slides/',
      };
    },
    mounted() {
      if (this.isEdit) {
        this.fetchslide();
      }
    },
    methods: {
      async fetchslide() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/slide/${this.slideId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.formData.title = response.data.title;
          this.formData.description = response.data.description;
        } catch (error) {
          console.error("Error fetching slide:", error);
        }
      },
      handleImageChange(event) {
        this.formData.image_path = event.target.files[0];
      },
      async submitForm() {
        const token = localStorage.getItem("token");
        let formData = new FormData();
        formData.append('title', this.formData.title);
        formData.append('description', this.formData.description);
        if (this.formData.image_path instanceof File) {
          formData.append('image_path', this.formData.image_path);
        }
        
        try {
          if (this.isEdit) {
            formData.append('_method', 'PUT');
            await axios.post(`${BASE_API_URL}/slide/${this.slideId}`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          } else {
            await axios.post(`${BASE_API_URL}/slide`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          }
          this.$router.push('/slide-list');
        } catch (error) {
          console.error("Error saving slide:", error);
        }
      }
    }
  };
  </script>