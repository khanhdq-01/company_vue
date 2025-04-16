<template>
  <div class="is-testimonials-area ptb-100">
    <div class="container">
      <div class="section-title-with-large-box">
        <span>Testimonials</span>
        <h2>Our Customer Valuable Feedback</h2>
      </div>

      <div class="is-testimonials-slides">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="is-testimonials-card">
              <p>{{ slide.desc }}</p>

              <div class="client-info d-flex align-items-center">
                <img :src="slide.image" alt="image" />

                <div class="title">
                  <h3>{{ slide.name }}</h3>
                  <span>{{ slide.position }}</span>
                </div>
              </div>
            </div>
          </slide>

          <template #addons> </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Testimonials",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    isPopup: false,
    carouselItems: [
      {
        id: 1,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/1.jpg"),
        name: "George Stewart",
        position: "Web Designer",
      },
      {
        id: 2,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/2.jpg"),
        name: "Jose Covert",
        position: "CEO & Founder",
      },
      {
        id: 3,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/3.jpg"),
        name: "Karen Wilson",
        position: "Web Developer",
      },
      {
        id: 4,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/1.jpg"),
        name: "George Stewart",
        position: "Web Designer",
      },
      {
        id: 5,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/2.jpg"),
        name: "Jose Covert",
        position: "CEO & Founder",
      },
      {
        id: 6,
        desc: "“Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim. curabitur arcu erat accumsan id imperdiet et porttitor. curabitur aliquet quam id dui posuere blandit.”",
        image: require("../../assets/img/author-image/3.jpg"),
        name: "Karen Wilson",
        position: "Web Developer",
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
      992: {
        itemsToShow: 3,
        snapAlign: "center",
      },
      1200: {
        itemsToShow: 3,
        snapAlign: "center",
      },
    },
  }),
});
</script>
