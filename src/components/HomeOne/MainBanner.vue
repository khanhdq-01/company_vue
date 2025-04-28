<template>
  <div class="main-banner main-banner-one">
    <div class="container-fluid">
      <div class="row" v-for="(slide, index) in slides" :key="index">
        <div class="col-lg-7 col-md-12">
          <div class="main-banner-content">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="content">
                  <div class="d-flex align-items-center">
                    <h1 v-if="!formData || formData?.id !== slide.id">
                      {{ slide.title }}
                    </h1>
                    <div v-else class="w-100">
                      <input
                        v-model="formData.title"
                        class="form-control mb-2"
                        placeholder="Nhập tiêu đề"
                      />
                    </div>
                    <button
                      v-if="
                        isLoggedIn &&
                        userRole === 1 &&
                        (!formData || formData?.id !== slide.id)
                      "
                      @click="startEditing(slide)"
                      class="btn btn-sm btn-outline-primary ms-2"
                    >
                      <i class="bx bx-edit"></i>
                    </button>
                  </div>

                  <div class="d-flex align-items-center">
                    <p v-if="!formData || formData?.id !== slide.id">
                      {{ slide.description }}
                    </p>
                    <div v-else class="w-100">
                      <textarea
                        v-model="formData.description"
                        class="form-control mb-2"
                        placeholder="Nhập mô tả"
                        rows="3"
                      ></textarea>
                    </div>
                    <button
                      v-if="
                        isLoggedIn &&
                        userRole === 1 &&
                        (!formData || formData?.id !== slide.id)
                      "
                      @click="startEditing(slide)"
                      class="btn btn-sm btn-outline-primary ms-2"
                    >
                      <i class="bx bx-edit"></i>
                    </button>
                  </div>

                  <div v-if="formData && formData.id === slide.id" class="mt-2">
                    <button @click="saveEdit" class="btn btn-success me-2">
                      <i class="bx bx-save"></i> Lưu
                    </button>
                    <button @click="cancelEdit" class="btn btn-secondary">
                      <i class="bx bx-x"></i> Hủy
                    </button>
                  </div>

                  <router-link to="/contact" class="default-btn">
                    <i class="bx bxs-hot"></i>Get Started<span></span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-5 col-md-12">
          <div class="banner-image mbanner-bg-one">
            <div class="d-table">
              <div class="d-table-cell">
                <div class="animate-banner-image">
                  <img
                    v-if="slide.image_path"
                    :src="url + slide.image_path"
                    alt="image"
                  />
                  <div v-if="isLoggedIn && userRole === 1" class="mt-2">
                    <button
                      @click="startEditing(slide)"
                      class="btn btn-sm btn-outline-primary"
                    >
                      <i class="bx bx-edit"></i> Chỉnh sửa ảnh
                    </button>
                  </div>
                  <div v-if="formData && formData.id === slide.id" class="mt-2">
                    <input
                      type="file"
                      @change="handleImageChange"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center text-muted mt-5" v-if="slides?.length === 0">
        No items to display
      </p>
      <div class="col-12 mt-4 text-center" v-if="isLoggedIn && userRole === 1">
        <router-link to="/slide-list" class="btn btn-primary">
          Manager Slide
        </router-link>
      </div>
    </div>

    <div class="shape20">
      <img src="../../assets/img/shape/19.png" alt="image" />
    </div>
    <div class="shape21">
      <img src="../../assets/img/shape/20.png" alt="image" />
    </div>
    <div class="shape19">
      <img src="../../assets/img/shape/18.png" alt="image" />
    </div>
    <div class="shape22">
      <img src="../../assets/img/shape/21.png" alt="image" />
    </div>
    <div class="shape23">
      <img src="../../assets/img/shape/22.svg" alt="image" />
    </div>
    <div class="shape24">
      <img src="../../assets/img/shape/23.png" alt="image" />
    </div>
    <div class="shape26">
      <img src="../../assets/img/shape/25.png" alt="image" />
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useAuthStore } from "../../stores/auth";
import { useSlideStore } from "../../stores/slide";

export default {
  name: "MainBanner",
  data() {
    return {
      formData: null,
      url: `${process.env.VUE_APP_FILE_URL}/slides/`,
    };
  },

  setup() {
    const { user } = useAuthStore();
    const { slideData, updateSlide } = useSlideStore();
    const slides = computed(() => slideData.value?.data || []);

    return {
      user,
      slides,
      updateSlide,
    };
  },
  methods: {
    startEditing(slide) {
    
      this.formData = {
        id: slide.id,
        title: slide.title,
        description: slide.description,
        image_path: slide.image_path,
      };
    },
    cancelEdit() {
      this.formData = null;
    },
    handleImageChange(event) {
      this.formData.image_path = event.target.files[0];
      console.log(this.formData)
    },
    async saveEdit() {
      let payload = new FormData();
      payload.append("title", this.formData.title);
      payload.append("description", this.formData.description);
      if (this.formData.image_path instanceof File) {
        payload.append("image_path", this.formData.image_path);
      }
      payload.append("_method", "PUT");

      try {
        this.updateSlide({id: this.formData.id, data: payload});
        this.formData = null;
      } catch (error) {
        console.error("Error updating slide:", error);
      }
    },
  },
  computed: {
    isLoggedIn() {
      return !!this.user;
    },
    userRole() {
      return this.user?.data?.role_id || null;
    },
  },
};
</script>
