<template>
    <div class="blog-detail-area ptb-100">
        <div class="container" v-if="blog">
        <div class="blog-detail">
            <h1 class="blog-title">{{ blog.title }}</h1>
            <div class="blog-image">
                <img :src="getImageUrl(blog.image)" alt="blog image" />
            </div>
            <div class="blog-description" v-html="blog.description"></div>
        </div>
        </div>
        <div v-else class="loading">
        Loading blog details...
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { BASE_API_URL } from "@/main";
import { BASE_IMAGE_URL } from "@/main";


export default {
  name: 'BlogDetail',
  data() {
    return {
      blog: null,
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchBlogDetail();
  },
  methods: {
    async fetchBlogDetail() {
    try 
        {
            const targetId = parseInt(this.$route.params.id);
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

            this.blog = allBlogs.find(b => b.id === targetId);

            if (!this.blog) {
            this.error = "Không tìm thấy bài viết.";
            }
        } catch (err) {
            console.error(err);
            this.error = "Lỗi khi tải dữ liệu.";
        } finally {
            this.loading = false;
        }
    },
    getImageUrl(image) {
    return image
        ? `${BASE_IMAGE_URL}/blogs/${image}`
        : '';
    }
  }
}
</script>


<style scoped>
    .blog-title {
    font-size: 2rem;
    margin-bottom: 20px;
    }

    .blog-image img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    }

    .blog-description {
    font-size: 1.1rem;
    line-height: 1.6;
    }
</style>
