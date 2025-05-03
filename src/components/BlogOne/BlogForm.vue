<template>
  <div class="container ptb-100">
    <h2>Add New Blog</h2>

    <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
      <div class="form-group mb-3">
        <label>Title</label>
        <input v-model="title" type="text" class="form-control" required />
      </div>

      <div class="form-group mb-3">
        <label>Name</label>
        <input v-model="name" type="text" class="form-control" maxlength="100" required />
      </div>

      <div class="form-group mb-3">
        <label>Description</label>
        <textarea v-model="description" class="form-control" rows="5" required></textarea>
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
        <router-link to="/blog-one" class="btn btn-secondary ms-2">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import { BASE_API_URL } from '@/main'

export default {
  name: 'BlogForm',
  data() {
    return {
      title: '',
      name: '',
      description: '',
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
        formData.append('name', this.name)
        formData.append('description', this.description)
        formData.append('user_id', this.user_id)
        if (this.image) formData.append('image', this.image)

        await axios.post(`${BASE_API_URL}/blog`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })

        alert('Blog created successfully')
        this.$router.push('/blog-one')
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
