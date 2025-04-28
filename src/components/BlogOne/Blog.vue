<template>
    <div class="blog-area ptb-100">
      <div class="container">
        <div class="row">
          <div
            class="col-lg-4 col-md-6"
            v-for="blog in blogs"
            :key="blog.id"
          >
            <div class="single-blog-post">
              <div class="post-image">
                <div class="date">
                  <i class="bx bx-calendar"></i>
                  {{ formatDate(blog.created_at) }}
                </div>
              </div>

              <div class="post-content">
                <h3>
                  <router-link :to="`/single-blog/${blog.id}`">
                    {{ blog.title }}
                  </router-link>
                </h3>

                <div class="post-info">
                  <div class="post-by">
                    <img src="../../assets/img/author-image/1.jpg" alt="author" />
                    <h6>{{ blog.user.name }}</h6>
                  </div>

                  <div class="details-btn">
                    <router-link :to="`/single-blog/${blog.id}`">
                      <i class="bx bx-right-arrow-alt"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 col-md-12">
            <div class="pagination-area">
              <button
                :disabled="!pagination.prev_page_url"
                @click="fetchBlogs(pagination.current_page - 1)"
              >
                &laquo;
              </button>

              <button
                v-for="page in pagination.last_page"
                :key="page"
                :class="{ active: page === pagination.current_page }"
                @click="fetchBlogs(page)"
              >
                {{ page }}
              </button>

              <button
                :disabled="!pagination.next_page_url"
                @click="fetchBlogs(pagination.current_page + 1)"
              >
                &raquo;
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
  import axios from 'axios'
  import { BASE_API_URL } from "@/main";

  
  export default {
    name: 'Blog',
    data() {
      return {
        blogs: [],
        pagination: {},
      }
    },
    created() {
      this.fetchBlogs(1)
    },
    methods: {
      async fetchBlogs(page = 1) {
        try {
          const token = localStorage.getItem("token");
          const response = await axios.get(`${BASE_API_URL}/blogs?page=${page}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
          })
          this.blogs = response.data.data.data
          this.pagination = {
            current_page: response.data.data.current_page,
            last_page: response.data.data.last_page,
            next_page_url: response.data.data.next_page_url,
            prev_page_url: response.data.data.prev_page_url,
          }
        } catch (error) {
          console.error('Failed to fetch blogs:', error)
        }
      },
      formatDate(dateStr) {
        if (!dateStr) return ''
            const options = { year: 'numeric', month: 'short', day: 'numeric' }
            return new Date(dateStr).toLocaleDateString(undefined, options)
        },
    },
  }
</script>
  
<style scoped>
  .pagination-area button {
    margin: 5px;
    padding: 5px 10px;
    border: none;
    width: 40px;
  }
  .pagination-area button.active {
    background-color: #007bff;
    color: white;
  }
</style>
  