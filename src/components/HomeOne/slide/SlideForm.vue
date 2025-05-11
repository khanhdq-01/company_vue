<template>
  <div class="container mt-5">
    <h2>Add New slide</h2>

    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="title" class="form-label">Title</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.title"
          id="title"
          required
        />
      </div>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.description"
          id="description"
          required
        />
      </div>

      <div class="mb-3">
        <label for="image" class="form-label">Image</label>
        <input
          type="file"
          class="form-control"
          @change="handleImageChange"
          id="image"
          accept="image/*"
          required
        />
      </div>

      <div class="mb-3" v-if="imagePreview">
        <label class="form-label">Image Preview</label>
        <div class="image-preview-container">
          <img :src="imagePreview" alt="Preview" class="img-thumbnail" />
        </div>
      </div>

      <div class="mb-3">
        <button type="submit" class="btn btn-primary">Save</button>
        <router-link to="/slide-list" class="btn btn-secondary ms-2">Cancel</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { useSlideStore } from "../../../stores/slide";
import { computed } from "vue";

export default {
  name: "slideForm",
  data() {
    return {
      formData: {
        title: '',
        description: '',
        image_path: null
      },
      imagePreview: null,
      url: `${process.env.VUE_APP_FILE_URL}/slides/`,
    };
  },
  setup() {
    const { slideData, createSlide } = useSlideStore();
    const slides = computed(() => slideData.value?.data || []);

    return {
      slides,
      createSlide,
    };
  },
  methods: {
    handleImageChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.formData.image_path = file;
        // Tạo URL để preview ảnh
        this.imagePreview = URL.createObjectURL(file);
      }
    },
    async submitForm() {
      let payload = new FormData();
      payload.append("title", this.formData.title);
      payload.append("description", this.formData.description);
      payload.append("image_path", this.formData.image_path);

      try {
        this.createSlide(payload);
        this.$router.push("/slide-list");
      } catch (error) {
        console.error("Error saving slide:", error);
      }
    },
  },
};
</script>
