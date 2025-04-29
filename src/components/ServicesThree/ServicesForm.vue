<template>
    <div class="container ptb-100">
      <h2>Add New Service</h2>
  
      <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
        <div class="form-group mb-3">
          <label>Title</label>
          <input v-model="title" type="text" class="form-control" required />
        </div>
  
        <div class="form-group mb-3">
          <label>Long_description</label>
          <input v-model="long_description" type="text" class="form-control" maxlength="100" required />
        </div>
  
        <div class="form-group mb-3">
          <label>Full_description</label>
          <div v-if="isAdmin">
            <Ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
          </div>
          <div v-else>
            <textarea v-model="editorData" class="form-control" rows="5" required></textarea>
          </div>
        </div>
  
        <div class="form-group mb-3">
          <label>Image</label>
          <input type="file" @change="handleFileChange" class="form-control" accept="image/*" />
        </div>
  
        <input type="hidden" v-model="user_id" />
  
        <div class="d-flex gap-2">
          <button type="submit" class="btn btn-success">
            Create
          </button>
          <router-link to="/services-three" class="btn btn-secondary ms-2">Back Service</router-link>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import { BASE_API_URL } from '@/main'
  import CKEditor from '@ckeditor/ckeditor5-vue'
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
  export default {
    name: 'ServiceForm',
    components: {
      ckeditor: CKEditor,
    },
    data() {
      return {
        title: '',
        long_description: '',
        full_description: '',
        editorData: '',
        image: null,
        user_id: '',
        editor: ClassicEditor,
        editorConfig: {
          toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote'],
        },
      }
    },
    created() {
      this.user_id = localStorage.getItem('id')
    },
    methods: {
      handleFileChange(event) {
        this.image = event.target.files[0]
      },
      async handleSubmit() {
        try {
          const token = localStorage.getItem('token')
          const formData = new FormData()
          formData.append('title', this.title)
          formData.append('long_description', this.long_description)
          formData.append('full_description', this.editorData)
          console.log('user_id:', this.user_id);

          formData.append('role_id', this.user_id)
          if (this.image) formData.append('image', this.image)
          await axios.post(`${BASE_API_URL}/service`, formData, {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'multipart/form-data',
            },
          })
          this.$router.push('/services-three')
        } catch (error) {
          console.error('Submit failed:', error)
        }
      },
    }
  }
  </script>
  
  <style scoped>
  .container {
    max-width: 700px;
    margin: auto;
  }
  .ck-editor__editable {
    min-height: 200px;
  }
  </style>