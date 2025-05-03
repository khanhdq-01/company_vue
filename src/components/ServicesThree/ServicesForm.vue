<template>
  <div class="container ptb-100">
    <h2>Add New Service</h2>

    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <div class="form-group mb-3">
        <label>Title</label>
        <input v-model="title" type="text" class="form-control" required />
      </div>

      <div class="form-group mb-3">
        <label>Long Description</label>
        <input v-model="long_description" type="text" class="form-control" maxlength="100" required />
      </div>
      <div class="form-group mb-3">
        <label>Full Description</label>
        <textarea v-model="full_description" class="form-control" rows="5" required></textarea>
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
        <router-link to="/services-three" class="btn btn-secondary ms-2">Back to Service</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_API_URL } from '@/main'

export default {
  name: 'ServiceForm',
  data() {
    return {
      title: '',
      long_description: '',
      full_description: '',
      image: null,
      user_id: '',
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
        formData.append('full_description', this.full_description) // Use full_description instead of editorData
        console.log('user_id:', this.user_id)

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
</style>
