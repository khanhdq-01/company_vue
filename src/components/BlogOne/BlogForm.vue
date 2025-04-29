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
        <div v-if="isAdmin">
          <ckeditor :editor="editor" v-model="editorData" :config="editorConfig" />
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
        <router-link to="/blog-one" class="btn btn-secondary ms-2">Cancel</router-link>
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
  name: 'BlogForm',
  components: {
    Ckeditor: CKEditor
  },
  data() {
    return {
      title: '',
      name: '',
      description: '',
      editorData: '',
      image: null,
      user_id: '',
      editor: ClassicEditor,
      editorConfig: {
        toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo'],
        heading: {
          options: [
            { model: 'paragraph', title: 'Đoạn văn', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Tiêu đề 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Tiêu đề 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Tiêu đề 3', class: 'ck-heading_heading3' },
          ]
        },
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
        formData.append('name', this.name)
        formData.append('description', this.editorData)
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
.ck-editor__editable {
  min-height: 200px;
}
</style>
