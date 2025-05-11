<template>
  <div class="container mt-5">
    <h2>Management Slides</h2>
    <router-link v-if="slides.length === 0" to="/slide/add" class="btn btn-primary mb-3"
      >Add New Slide</router-link
    >
    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Desctiption</th>
          <th>Image</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(slide, index) in slides" :key="index">
          <td>{{ slide.id }}</td>
          <td>{{ slide.title }}</td>
          <td>{{ slide.description }}</td>
          <td>
            <img
              :src="url + slide.image_path"
              class="img-thumbnail"
              style="max-width: 100px"
            />
          </td>
          <td>
            <button
              @click="deleteSlides(slide.id)"
              class="btn btn-sm btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mb-3">
      <router-link to="/" class="btn btn-secondary ms-2">Back Home</router-link>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useSlideStore } from "../../../stores/slide";

export default {
  name: "slideList",
  setup() {
    const { slideData, deleteSlide } = useSlideStore();
    const slides = computed(() => slideData.value?.data || []);
    return {
      slides,
      deleteSlide,
    };
  },
  data() {
    return {
      url: `${process.env.VUE_APP_FILE_URL}/slides/`,
    };
  },
  methods: {
    deleteSlides(id) {
      if (confirm("Are you sure you want to delete this slide?")) {
        this.deleteSlide(id);
      }
    },
  },
};
</script>
