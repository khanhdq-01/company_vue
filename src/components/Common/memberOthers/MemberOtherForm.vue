<template>
    <div class="container mt-5">
      <h2 v-if="isEdit">Edit member-other</h2>
      <h2 v-else>Add New member-other</h2>
      
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control" v-model="formData.name" id="name" required>
        </div>
        <div class="mb-3">
          <label for="position" class="form-label">Position</label>
          <input type="text" class="form-control" v-model="formData.position" id="position" required>
        </div>
        
        <div class="mb-3">
          <label for="image" class="form-label">Image</label>
          <input type="file" class="form-control" @change="handleImageChange" id="image" :required="!isEdit">
          <small v-if="isEdit" class="text-muted">Leave empty to keep current image</small>
        </div>
        
        <div class="mb-3">
          <button type="submit" class="btn btn-primary">{{ isEdit ? 'Update' : 'Save' }}</button>
          <router-link to="/member-other-list" class="btn btn-secondary ms-2">Cancel</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";
  
  export default {
    name: "memberOtherForm",
    props: {
      isEdit: {
        type: Boolean,
        default: false
      },
      memberOtherId: {
        type: [String, Number],
        default: null
      }
    },
    data() {
      return {
        formData: {
          name: '',
          position: '',
          image_path: null
        },
        url: BASE_IMAGE_URL + 'member_others/',
      };
    },
    mounted() {
      if (this.isEdit) {
        this.fetchmemberOther();
      }
    },
    methods: {
      async fetchmemberOther() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/member_other/${this.memberOtherId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.formData.name = response.data.name;
          this.formData.position = response.data.position;


        } catch (error) {
          console.error("Error fetching member-other:", error);
        }
      },
      handleImageChange(event) {
        this.formData.image_path = event.target.files[0];
      },
      async submitForm() {
        const token = localStorage.getItem("token");
        let formData = new FormData();
        formData.append('name', this.formData.name);
        formData.append('position', this.formData.position);
        if (this.formData.image_path instanceof File) {
          formData.append('image_path', this.formData.image_path);
        }
        
        try {
          if (this.isEdit) {
            formData.append('_method', 'PUT');
            await axios.post(`${BASE_API_URL}/member_other/${this.memberOtherId}`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          } else {
            await axios.post(`${BASE_API_URL}/member_other`, formData, {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "multipart/form-data",
              },
            });
          }
          this.$router.push('/member-other-list');
        } catch (error) {
          console.error("Error saving member-other:", error);
        }
      }
    }
  };
  </script>