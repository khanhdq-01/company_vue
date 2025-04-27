<template>
    <div class="p-6">
      <h1 class="text-2xl font-bold mb-4">{{ service.title }}</h1>
  
      <CKEditor :editor="editor" v-model="service.full_description" :config="editorConfig" />
  
      <button @click="updateService" class="bg-blue-600 text-white px-4 py-2 mt-4 rounded">Lưu thay đổi</button>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { BASE_API_URL } from "@/main";
  import CKEditor from '@ckeditor/ckeditor5-vue';
  import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
  
  export default {
    name: "ServiceDetail",
    components: {
      CKEditor
    },
    data() {
      return {
        service: {
          title: '',
          full_description: '',
        },
        editor: ClassicEditor,
        editorConfig: {},
      };
    },
    mounted() {
      this.fetchService();
    },
    methods: {
      async fetchService() {
        const response = await axios.get(`${BASE_API_URL}/service`);
        const services = response.data;
        const service = services.find(s => s.id == this.$route.params.id);
        if (service) {
          this.service = service;
        }
      },
      async updateService() {
        await axios.put(`${BASE_API_URL}/service/${this.$route.params.id}`, {
          full_description: this.service.full_description
        });
        alert("Cập nhật thành công!");
      }
    }
  };
  </script>
  