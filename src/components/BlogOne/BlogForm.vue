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
          <textarea ref="editor" class="form-control" rows="10"></textarea>
        </div>
        <div v-else>
          <textarea v-model="editorData" class="form-control" rows="5" required></textarea>
        </div>
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
      editorData: '',
      user_id: '',
      isAdmin: true,
      editorInstance: null,
    }
  },
  mounted() {
    this.user_id = localStorage.getItem('id')

    if (this.isAdmin && window.CKEDITOR) {
      this.editorInstance = CKEDITOR.replace(this.$refs.editor, {
        filebrowserUploadUrl:`${BASE_API_URL}/ckeditor/upload`,
        filebrowserImageUploadUrl: `${BASE_API_URL}/ckeditor/upload`,
        filebrowserWindowWidth: '1000',
        filebrowserWindowHeight: '700'
      });

      // Lắng nghe sự kiện upload file
      this.editorInstance.on('fileUploadResponse', function(evt) {
        const data = evt.data;
        const xhr = data.fileLoader.xhr;

        try {
          const response = JSON.parse(xhr.responseText);

          if (response.uploaded === 1) {
            data.url = response.url;
            
            // Cập nhật nội dung editor với ảnh mới
            this.editorInstance.insertHtml(`<img src="${response.url}" alt="${response.fileName}">`);
          } else {
            evt.cancel();
          }
        } catch (error) {
          console.error('Error parsing response:', error);
        }
      });

      this.editorInstance.on('change', () => {
        this.editorData = this.editorInstance.getData();
      });

      this.editorInstance.on('instanceReady', () => {
        this.editorData = this.editorInstance.getData();
      });
    }
  },
  unmounted() {
    if (this.editorInstance) {
      this.editorInstance.destroy()
    }
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

        await axios.post(`${BASE_API_URL}/blog`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        })
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

