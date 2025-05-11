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

      <div class="blog-description">
        <div v-if="isAdmin">
          <textarea ref="editor" class="form-control" rows="10"></textarea>
        </div>
        <div v-else v-html="editorData || ''"></div>
      </div>

      <div class="blog-actions" v-if="isAdmin">
        <button class="btn btn-primary" @click="saveBlog">Lưu bài viết</button>
        <router-link to="/blog-one" class="btn btn-secondary ms-2">Cancel</router-link>
        <button class="btn btn-danger ms-2" @click="deleteBlog">Xóa bài viết</button>
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

    const blog = ref(null);
    const loading = ref(true);
    const error = ref(null);
    const editorData = ref('');
    const editorDataTitle = ref('');
    const isAdmin = ref(false);
    const editorInstance = ref(null);

    const formatDate = (dateStr) => {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateStr).toLocaleDateString('vi-VN', options);
    };

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
          },
        });

        alert('Đã lưu bài viết thành công!');
        router.push('/blog-one');
      } catch (err) {
        console.error('Lỗi khi lưu bài viết:', err.response?.data || err.message);
        alert('Lưu thất bại!');
      }
    };

    const deleteBlog = async () => {
      if (!blog.value) return;

      const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa bài viết "${blog.value.title}"?`);
      if (!confirmDelete) return;

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Bạn cần phải đăng nhập để thực hiện thao tác này.");
        return;
      }

      try {
        await axios.delete(`${BASE_API_URL}/blog/${blog.value.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        alert('Đã xóa bài viết thành công!');
        router.push('/blog-one');
      } catch (err) {
        console.error('Lỗi khi xóa bài viết:', err.response?.data || err.message);
        alert('Xóa thất bại!');
      }
    };

    onMounted(async () => {
      const role = localStorage.getItem('role_id');
      if (role === '1') isAdmin.value = true;

      await fetchBlogDetail();

      if (isAdmin.value && window.CKEDITOR && blog.value) {
        editorInstance.value = CKEDITOR.replace(document.querySelector('textarea'), {
          filebrowserUploadUrl: `${BASE_API_URL}/ckeditor/upload`,
          filebrowserImageUploadUrl: `${BASE_API_URL}/ckeditor/upload`,
          filebrowserWindowWidth: '1000',
          filebrowserWindowHeight: '700'
        });

        editorInstance.value.setData(blog.value.description || '');

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
      blog,
      loading,
      error,
      editorData,
      editorDataTitle,
      isAdmin,
      saveBlog,
      deleteBlog,
      formatDate,
    };
  },
};
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
}
.title-input:focus {
  border-color: #0f62fe;
}
.loading-state,
.error-message {
  text-align: center;
  margin-top: 50px;
  font-size: 1.2rem;
  color: #555;
}
</style>
