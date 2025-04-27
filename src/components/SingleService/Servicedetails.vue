<template>
  <div class="container ptb-100">
    <div v-if="service" class="service-detail">
      <!-- Chế độ xem -->
<!-- Chế độ xem -->
<div v-if="!editing">
  <div v-html="service.full_description" class="mb-4"></div> <!-- Dùng trực tiếp full_description -->
  <img :src="url + service.image" v-if="service.image" class="img-fluid mb-4" style="max-width: 300px;" />
  <button v-if="canEdit" class="btn btn-primary" @click="startEditing">Chỉnh sửa</button>
</div>


      <!-- Chế độ chỉnh sửa -->
      <div v-else>
        <ckeditor :editor="editor" v-model="editorContent" :config="editorConfig" />

        <div class="form-group mt-3">
          <label>Ảnh mới (tuỳ chọn):</label>
          <input type="file" @change="onImageChange" class="form-control-file" />
          <div v-if="service.image" class="mt-2">
            <strong>Ảnh hiện tại:</strong><br />
            <img :src="url + service.image" class="img-fluid" style="max-width: 300px;" />
          </div>
        </div>

        <button class="btn btn-success mt-3" @click="updateService">Cập nhật</button>
        <button class="btn btn-secondary mt-3 ml-2" @click="cancelEditing">Hủy</button>
      </div>
    </div>
    <div v-else>Đang tải...</div>
  </div>
</template>

<script>
import axios from "axios";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-vue";
import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";

export default {
  name: "ServiceDetail",
  components: {
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      service: null,
      editor: ClassicEditor,
      editorContent: '',
      selectedImage: null,
      editing: false,
      url: BASE_IMAGE_URL + "services/",
      canEdit: parseInt(localStorage.getItem("role_id")) === 1,
      editorConfig: {
      ckfinder: {
        uploadUrl: `${BASE_API_URL}/upload-image`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      },
    },
    };
  },
  mounted() {
    this.fetchService();
  },
  methods: {
  async fetchService() {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${BASE_API_URL}/service/${this.$route.params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.service = response.data;
      this.editorContent = this.service.full_description || ""; // Không dùng buildHtmlFromService nữa
    } catch (error) {
      console.error("Không thể tải dữ liệu dịch vụ:", error);
    }
  },

  startEditing() {
    this.editing = true;
  },

  cancelEditing() {
    this.editing = false;
    this.editorContent = this.service.full_description || "";
    this.selectedImage = null;
  },

  onImageChange(event) {
    this.selectedImage = event.target.files[0];
  },

  async updateService() {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("_method", "PUT");
    formData.append("full_description", this.editorContent); // Lưu nội dung HTML vào trường này
    if (this.selectedImage) {
      formData.append("image", this.selectedImage);
    }

    try {
      await axios.post(`${BASE_API_URL}/service/${this.$route.params.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Cập nhật thành công!");
      this.editing = false;
      this.selectedImage = null;
      await this.fetchService();
    } catch (error) {
      console.error("Cập nhật thất bại:", error);
      alert("Cập nhật thất bại!");
    }
  }
}
  };

</script>
