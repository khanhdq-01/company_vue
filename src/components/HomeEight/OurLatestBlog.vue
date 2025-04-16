<template>
  <div class="blog-area pt-100 pb-70 bg-f4e9da">
    <div class="container">
      <div class="section-title text-left">
        <span class="sub-title">Our News</span>
        <h2>Check Out Our Latest Blog</h2>
      </div>

      <div class="blog-slides">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-blog-post-item">
              <div class="post-image">
                <a href="#" class="d-block">
                  <img :src="slide.image" alt="image" />
                </a>
              </div>

              <div class="post-content">
                <a href="#" class="category">{{ slide.category }}</a>
                <h3>
                  <a href="#">{{ slide.title }}</a>
                </h3>
                <ul
                  class="post-content-footer d-flex justify-content-between align-items-center"
                >
                  <li>
                    <div class="post-author d-flex align-items-center">
                      <img
                        :src="slide.authorImage"
                        class="rounded-circle"
                        alt="image"
                      />
                      <span>{{ slide.name }}</span>
                    </div>
                  </li>
                  <li><i class="bx bx-calendar"></i> {{ slide.date }}</li>
                </ul>
              </div>
            </div>
          </slide>

          <template #addons>
            <Navigation />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "OurLatestBlog",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/img/blog-image/6.jpg"),
        category: "EDUCATION",
        title: "Customer Satisfaction for a Digital Marketing Agency",
        authorImage: require("../../assets/img/author-image/9.jpg"),
        name: "Alex Morgan",
        date: "April 30, 2022",
      },
      {
        id: 2,
        image: require("../../assets/img/blog-image/9.jpg"),
        category: "SEO",
        title: "Customer Satisfaction for a Digital Marketing Agency",
        authorImage: require("../../assets/img/author-image/8.jpg"),
        name: "James Smith",
        date: "April 29, 2022",
      },
      {
        id: 3,
        image: require("../../assets/img/blog-image/8.jpg"),
        category: "Business",
        title: "Customer Satisfaction for a Digital Marketing Agency",
        authorImage: require("../../assets/img/author-image/7.jpg"),
        name: "Sarah Taylor",
        date: "April 28, 2022",
      },
      {
        id: 4,
        image: require("../../assets/img/blog-image/7.jpg"),
        category: "Business",
        title: "Customer Satisfaction for a Digital Marketing Agency",
        authorImage: require("../../assets/img/author-image/6.jpg"),
        name: "Andro Lucy",
        date: "April 27, 2022",
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      1200: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
});
</script>
