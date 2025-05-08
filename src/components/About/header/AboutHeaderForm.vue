<template>
    <div class="container mt-5">
      <h2 v-if="isEdit">Edit About</h2>
      <h2 v-else>Add New About</h2>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="Subtitle" class="form-label">Subtitle</label>
          <input type="text" class="form-control" v-model="formData.subtitle" id="subtitle" required>
        </div>
        <div class="mb-3">
          <label for="Title" class="form-label">Title</label>
          <input type="text" class="form-control" v-model="formData.title" id="title" required>
        </div>
        <div class="mb-3">
          <label for="Content" class="form-label">Content</label>
          <input type="text" class="form-control" v-model="formData.content" id="content" required>
        </div>
        <div class="mb-3">
          <label for="Description" class="form-label">Description</label>
          <input type="text" class="form-control" v-model="formData.description" id="description" required>
        </div>
        
        <div class="mb-3">
          <label for="Image" class="form-label">Image</label>
          <input type="file" class="form-control" @change="handleImageChange" id="image" :required="!isEdit">
          <small v-if="isEdit" class="text-muted">Leave empty to keep current image</small>
        </div>
        
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
          <router-link to="/about-header-list" class="btn btn-secondary ms-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "aboutForm",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      aboutHeadId: {
        type: [String, Number],
        default: null
      }
    },
    data() {
      return {
        formData: {
          subtitle: '',
          title: '',
          content: '',
          description:'',
          image_path: null
        },
        url: 'http://localhost/company_2025/company_api/storage/app/public/abouts/',
      };
    },
    mounted() {
      if (this.isEdit) {
        this.fetchabout();
      }
    },
    methods: {
      async fetchabout() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/about/${this.aboutHeadId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.formData.subtitle = response.data.subtitle;
          this.formData.title = response.data.title;
          this.formData.content = response.data.content;
          this.formData.description = response.data.description;
        } catch (error) {
          console.error("Error fetching about:", error);
        }
      },
      handleImageChange(event) {
        this.formData.image_path = event.target.files[0];
      },
      async submitForm() {
        const token = localStorage.getItem("token");
        let formData = new FormData();
        formData.append('subtitle', this.formData.subtitle);
        formData.append('title', this.formData.title);
        formData.append('content', this.formData.content);
        formData.append('description', this.formData.description);
        if (this.formData.image_path instanceof File) {
          formData.append('image_path', this.formData.image_path);
        }
        
        try {
          if (this.isEdit) {
            formData.append('_method', 'PUT');
            await axios.post(`http://127.0.0.1:8000/api/about/${this.aboutHeadId}`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          } else {
            await axios.post("http://127.0.0.1:8000/api/about", formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          }
          this.$router.push('/about-header-list');
        } catch (error) {
          console.error("Error saving about:", error);
        }
      }
    }
  };
  </script>