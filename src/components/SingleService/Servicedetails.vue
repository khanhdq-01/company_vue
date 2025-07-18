<template>
  <div class="service-detail-container" v-if="!loading">
    <div v-if="service" class="service-detail">
      <h1 class="service-title">
        <div v-if="isAdmin">
          <input v-model="editorDataTitle" class="title-input" placeholder="Nhập tiêu đề service" />
        </div>
        <div v-else>
          {{ service.title }}
        </div>
      </h1>

      <div class="service-meta">
        <span class="service-author">Người đăng: {{ service.user?.name || 'Không rõ' }}</span>
        <span class="service-date">{{ formatDate(service.created_at) }}</span>
      </div>

      <div class="service-image" v-if="isAdmin">
        <img :src="imagePreview || getImageUrl(service.image)" alt="Service image" />
        <input class="form-control" type="file" @change="onImageSelected" accept="image/*" />
      </div>

      <div class="service-description" style="margin-top: 30px;">
        <h2 v-if="isAdmin">Mô tả chính</h2>
        <div v-if="isAdmin">
          <input v-model="editorDataLong" class="form-control" placeholder="Nhập mô tả chính" />
        </div>
        <div v-else v-html="editorDataLong || ''"></div>
      </div>

      <div class="service-description">
        <h2 v-if="isAdmin">Mô tả chi tiết</h2>
        <div v-if="isAdmin">
          <textarea ref="editor" class="form-control" rows="10"></textarea>
        </div>
        <div v-else v-html="editorData || ''"></div>
      </div>

      <div class="service-actions" v-if="isAdmin">
        <button class="save-button" @click="saveService">Lưu dịch vụ</button>
        <button class="delete-button" @click="deleteService">Xóa service</button>
        <router-link to="/services-three" class="cancel-button">Hủy</router-link>
      </div>

    </div>

    <div v-else class="error-message">
      {{ error }}
    </div>
  </div>

  <div v-else class="loading-state">
    Đang tải dịch vụ...
  </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, onBeforeUnmount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { BASE_API_URL, BASE_IMAGE_URL } from '@/main';

export default {
  name: 'BlogDetail',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const service = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const editorDataTitle = ref('');
    const editorDataLong = ref('');
    const editorData = ref('');
    const isAdmin = ref(false);
    const editorInstance = ref(null);
    const selectedImage = ref(null);
    const imagePreview = ref(null);

    const onImageSelected = (event) => {
      const file = event.target.files[0];
      if (file) {
        selectedImage.value = file;
        imagePreview.value = URL.createObjectURL(file);
      }
    };

    const getImageUrl = (image) => {
      return image ? `${BASE_IMAGE_URL}/services/${image}` : '';
    };

    const formatDate = (dateStr) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('vi-VN', options);
    };

    const fetchServiceDetail = async () => {
      try {
        const targetId = parseInt(route.params.id);
        const firstRes = await axios.get(`${BASE_API_URL}/service`);
        const lastPage = firstRes.data.last_page || 1;
        let allServices = firstRes.data.data || [];

        const requests = [];
        for (let page = 2; page <= lastPage; page++) {
          requests.push(axios.get(`${BASE_API_URL}/service?page=${page}`));
        }

        const responses = await Promise.all(requests);
        responses.forEach(res => {
          const pageData = res.data.data || [];
          allServices = allServices.concat(pageData);
        });

        service.value = allServices.find(b => b.id === targetId);

        if (service.value) {
          editorDataTitle.value = service.value.title;
          editorDataLong.value = service.value.long_description;
          editorData.value = service.value.full_description;
        } else {
          error.value = "Không tìm thấy service.";
        }
      } catch (err) {
        console.error('Lỗi khi fetch service detail:', err);
        error.value = "Lỗi khi tải dữ liệu.";
      } finally {
        loading.value = false;
      }
    };
    const saveService = async () => {
      if (!service.value) return;

      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      try {
        const formData = new FormData();
        formData.append('_method', 'PUT');
        formData.append("name", service.value.name);
        formData.append("title", editorDataTitle.value);
        formData.append("long_description", editorDataLong.value);
        formData.append("full_description", editorData.value);

        if (selectedImage.value) {
          formData.append("image", selectedImage.value);
        }
        await axios.post(`${BASE_API_URL}/service/${service.value.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data"
          },
        });
        router.push('/services-three');
      } catch (err) {
        console.error('Lỗi khi lưu service:', err.response?.data || err.message);
      }
    };

    const deleteService = async () => {
      if (!service.value) return;

      const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa service "${service.value.title}"?`);
      if (!confirmDelete) return;

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Bạn cần phải đăng nhập để thực hiện thao tác này.");
        return;
      }

      try {
        await axios.delete(`${BASE_API_URL}/service/${service.value.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        router.push('/services-three');
      } catch (err) {
        console.error('Lỗi khi xóa service:', err.response?.data || err.message);
      }
    };

    onMounted(async () => {
      const role = localStorage.getItem('role_id');
      if (role === '1') isAdmin.value = true;

      await fetchServiceDetail();

      if (isAdmin.value && window.CKEDITOR && service.value) {
        editorInstance.value = CKEDITOR.replace(document.querySelector('textarea'), {
          filebrowserUploadUrl: `${BASE_API_URL}/upload-image`,
          filebrowserImageUploadUrl: `${BASE_API_URL}/upload-image`,
          filebrowserWindowWidth: '1000',
          filebrowserWindowHeight: '700'
        });

        editorInstance.value.setData(service.value.full_description || '');

        editorInstance.value.on('change', () => {
          editorData.value = editorInstance.value.getData();
        });

        editorInstance.value.on('instanceReady', () => {
          editorData.value = editorInstance.value.getData();
        });
      }
    });

    onBeforeUnmount(() => {
      if (editorInstance.value) {
        editorInstance.value.destroy();
      }
    });

    return {
      service,
      loading,
      error,
      editorDataTitle,
      editorDataLong,
      editorData,
      getImageUrl,
      isAdmin,
      saveService,
      deleteService,
      formatDate,
      onImageSelected,
      imagePreview,
    };
  },
};
</script>

<style scoped>
.service-detail-container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.service-title {
  margin-bottom: 15px;
}

.title-input {
  width: 100%;
  font-size: 1.5rem;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.service-meta {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
}

.service-image img {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
}

.service-description {
  margin-bottom: 25px;
  text-align: justify;
}

.service-description h2 {
  margin-bottom: 10px;
  color: #2c3e50;
}

.save-button {
  background-color: #007bff;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.delete-button {
  background-color: #c92f2f;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  margin-left: 8px;
  cursor: pointer;
}

.cancel-button {
  margin-left: 10px;
  padding: 10px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-decoration: none;
  color: #333;
}
</style>
