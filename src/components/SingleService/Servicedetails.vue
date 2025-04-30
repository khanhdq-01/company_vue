<template>
  <div class="service-detail-container" v-if="!loading">
    <div v-if="service" class="service-detail">
      <h1 class="service-title">
        <template v-if="isAdmin">
          <input v-model="editorDataTitle" class="title-input" placeholder="Nhập tiêu đề dịch vụ" />
        </template>
        <template v-else>
          {{ service.title }}
        </template>
      </h1>

      <div class="service-meta">
        <span class="service-author">Người đăng: {{ service.user?.name || 'Không rõ' }}</span>
        <span class="service-date">{{ formatDate(service.created_at) }}</span>
      </div>

      <div class="service-image" v-if="service.image">
        <img :src="getImageUrl(service.image)" alt="Service image" />
      </div>

      <!-- LONG DESCRIPTION -->
      <div class="service-description" style="margin-top: 30px;">
      <h2>Mô tả chính</h2>
      <div v-if="isAdmin">
        <Ckeditor :editor="editor" v-model="editorDataLong" :config="editorConfig" />
      </div>
      <div v-else v-html="cleanHtml(editorDataLong)" />
    </div>


      <!-- FULL DESCRIPTION -->
      <div class="service-description">
        <h2>Mô tả chi tiết</h2>
        <div v-if="isAdmin">
          <Ckeditor :editor="editor" v-model="editorDataFull" :config="editorConfig" />
        </div>
        <div v-else v-html="cleanHtml(editorDataFull)" />
      </div>


      <!-- ACTION BUTTONS -->
      <div class="service-actions" v-if="isAdmin">
        <button class="save-button" @click="saveService">Lưu dịch vụ</button>
        <button class="delete-button" @click="deleteService">Xóa bài viết</button>
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

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BASE_API_URL, BASE_IMAGE_URL } from '@/main';

const route = useRoute();
const router = useRouter();

const service = ref(null);
const loading = ref(true);
const error = ref(null);

const editorDataTitle = ref('');
const editorDataFull = ref('');
const editorDataLong = ref('');

const isAdmin = ref(false);
const editor = ClassicEditor;

const editorConfig = {
  toolbar: [
    'heading', '|',
    'bold', 'italic', 'link', 
    'bulletedList', 'numberedList', 'blockQuote', '|', 
    'undo', 'redo'
  ],
  heading: {
    options: [
      { model: 'paragraph', title: 'Đoạn văn', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Tiêu đề 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Tiêu đề 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Tiêu đề 3', class: 'ck-heading_heading3' },
    ]
  }
};

const cleanHtml = (html) => {
  return html ? html.replace(/<p[^>]*>/g, '').replace(/<\/p>/g, '') : '';
};

const getImageUrl = (image) => {
  return image ? `${BASE_IMAGE_URL}/services/${image}` : '';
};

const fetchServiceDetail = async () => {
  try {
    const targetId = route.params.id;
    const res = await axios.get(`${BASE_API_URL}/service/${targetId}`);
    service.value = res.data.data;

    if (service.value) {
      editorDataTitle.value = service.value.title || '';
      editorDataFull.value = service.value.full_description || '';
      editorDataLong.value = service.value.long_description || '';
    } else {
      error.value = "Không tìm thấy dịch vụ.";
    }
  } catch (err) {
    console.error(err);
    error.value = "Lỗi khi tải dữ liệu.";
  } finally {
    loading.value = false;
  }
};

const saveService = async () => {
  if (!service.value) return;
  const token = localStorage.getItem("token");
  if (!token) {
    alert("Bạn cần phải đăng nhập để thực hiện thao tác này.");
    return;
  }

  try {
    const payload = {
      _method: 'PUT',
      title: editorDataTitle.value,
      full_description: editorDataFull.value,
      long_description: editorDataLong.value
    };

    await axios.post(`${BASE_API_URL}/service/${service.value.id}`, payload, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    });

    router.push('/services-three');
  } catch (err) {
    console.error('Lỗi khi lưu dịch vụ:', err.response?.data || err.message);
    alert('Lưu thất bại!');
  }
};

const deleteService = async () => {
  if (!service.value) return;
  const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa bài viết "${service.value.title}"?`);
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
    alert('Đã xóa bài viết thành công!');
    router.push('/services-three');
  } catch (err) {
    console.error('Lỗi khi xóa bài viết:', err.response?.data || err.message);
    alert('Xóa thất bại!');
  }
};

const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('vi-VN', options);
};

onMounted(() => {
  const userRole = localStorage.getItem('role_id');
  isAdmin.value = userRole === '1';
  fetchServiceDetail();
});
</script>

<style scoped>
.service-detail-container {
  max-width: 1000px;
  margin: auto;
  padding: 20px;
}

.service-title {
  font-size: 2rem;
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
