<template>
  <div class="blog-detail-container" v-if="!loading">
    <div v-if="blog" class="blog-detail">
      <h1 class="blog-title">
        <div v-if="isAdmin">
          <input v-model="editorDataTitle" class="title-input" placeholder="Nhập tiêu đề bài viết" />
        </div>
        <div v-else>
          {{ blog.title }}
        </div>
      </h1>
      <div class="blog-meta">
        <span class="blog-author">Tác giả: {{ blog.name }}</span> •
        <span class="blog-date">{{ formatDate(blog.created_at) }}</span>
      </div>
      <div class="blog-image" v-if="blog.image">
        <img :src="getImageUrl(blog.image)" alt="Blog image" />
      </div>

      <div class="blog-description">
        <Ckeditor v-if="isAdmin" :editor="editor" v-model="editorData" :config="editorConfig" />
        <div v-else v-html="editorData || ''"></div>
      </div>

      <div class="blog-actions" v-if="isAdmin">
        <button class="save-button" @click="saveBlog">Lưu bài viết</button>
        <router-link to="/blog-one"></router-link>
      </div>
    </div>
  
    <div v-else class="error-message">
      {{ error }}
    </div>
  </div>

  <div v-else class="loading-state">
    Loading bài viết...
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';
import { Ckeditor } from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BASE_API_URL, BASE_IMAGE_URL } from '@/main';


// Khai báo các biến reactive
const route = useRoute();
const router = useRouter();
const blog = ref(null);
const loading = ref(true);
const error = ref(null);
const editorData = ref('');
const editorDataTitle = ref('');
const isAdmin = ref(false);
const editor = ClassicEditor;

// Cấu hình CKEditor
const editorConfig = {
  toolbar: ['heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'undo', 'redo'],
  heading: {
    options: [
      { model: 'paragraph', title: 'Đoạn văn', class: 'ck-heading_paragraph' },
      { model: 'heading1', view: 'h1', title: 'Tiêu đề 1', class: 'ck-heading_heading1' },
      { model: 'heading2', view: 'h2', title: 'Tiêu đề 2', class: 'ck-heading_heading2' },
      { model: 'heading3', view: 'h3', title: 'Tiêu đề 3', class: 'ck-heading_heading3' },
    ]
  },
};

// Lấy URL ảnh
const getImageUrl = (image) => {
  return image ? `${BASE_IMAGE_URL}/blogs/${image}` : '';
};

// Lấy chi tiết bài viết
const fetchBlogDetail = async () => {
  try {
    const targetId = parseInt(route.params.id);
    const firstRes = await axios.get(`${BASE_API_URL}/blogs`);
    const lastPage = firstRes.data.data.last_page;
    let allBlogs = firstRes.data.data.data;

    const requests = [];
    for (let page = 2; page <= lastPage; page++) {
      requests.push(axios.get(`${BASE_API_URL}/blogs?page=${page}`));
    }

    const responses = await Promise.all(requests);
    responses.forEach(res => {
      allBlogs = allBlogs.concat(res.data.data.data);
    });

    blog.value = allBlogs.find(b => b.id === targetId);

    if (blog.value) {
      editorDataTitle.value = blog.value.title;
      editorData.value = blog.value.description;
    } else {
      error.value = "Không tìm thấy bài viết.";
    }
  } catch (err) {
    console.error(err);
    error.value = "Lỗi khi tải dữ liệu.";
  } finally {
    loading.value = false;
  }
};

// Lưu bài viết
const saveBlog = async () => {
  if (!blog.value) return;

  const token = localStorage.getItem("token");
  if (!token) {
    alert("Bạn cần phải đăng nhập để thực hiện thao tác này.");
    return;
  }
  try {
    await axios.put(`${BASE_API_URL}/blog/${blog.value.id}`, {
      name: blog.value.name,
      title: editorDataTitle.value,
      description: editorData.value,
    }, {
        headers: {
           Authorization: `Bearer ${token}`,
        }
    });
    alert('Đã lưu bài viết thành công!');
    router.push('/blog-one');
  } catch (err) {
    console.error('Lỗi khi lưu bài viết:', err.response?.data || err.message);
    alert('Lưu thất bại!');
  }
};

// Định dạng ngày
const formatDate = (dateStr) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateStr).toLocaleDateString('vi-VN', options);
};

// Kiểm tra quyền admin và fetch bài viết
onMounted(() => {
  const userRole = localStorage.getItem('role_id');
  if (userRole === '1') {
    isAdmin.value = true;
  }
  fetchBlogDetail();
});
</script>

<style scoped>
.blog-detail-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Helvetica Neue', sans-serif;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.blog-meta {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 30px;
}

.blog-image img {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
  border-radius: 10px;
}

.blog-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: #333;
}

.blog-actions {
  margin-top: 30px;
}

.save-button {
  background: #0f62fe;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.save-button:hover {
  background: #0353e9;
}

.loading-state,
.error-message {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: #555;
}

.title-input {
  width: 100%;
  font-size: 2.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  margin-bottom: 10px;
  padding: 5px;
  background: #f9f9f9;
  border-bottom: 2px solid #ccc;
  transition: border-color 0.3s;
}

.title-input:focus {
  border-color: #0f62fe;
}

</style>
