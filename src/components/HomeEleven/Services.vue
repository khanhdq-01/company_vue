<template>
  <div class="is-services-area ptb-100">
    <div class="container-fluid">
      <div class="section-title-with-large-box">
        <span>Introduce our services</span>
        <h2>Why your Businesses need Our Best services</h2>
      </div>

      <div class="is-services-slides">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="is-services-card">
              <h3>
                <router-link to="/single-service">{{
                  slide.title
                }}</router-link>
              </h3>
              <div class="is-services-image">
                <router-link to="/single-service">
                  <img :src="slide.image" alt="image" />
                </router-link>
              </div>
              <p>{{ slide.desc }}</p>
              <router-link to="/single-service" class="default-btn"
                >Learn More <span></span
              ></router-link>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>

    <div class="me-services-shape1">
      <img
        src="../../assets/img/marketing-experts/services/services-shape1.png"
        alt="image"
      />
    </div>
    <div class="me-services-shape2">
      <img
        src="../../assets/img/marketing-experts/services/services-shape2.png"
        alt="image"
      />
    </div>
    <div class="me-services-shape3">
      <img
        src="../../assets/img/marketing-experts/services/services-shape3.png"
        alt="image"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Services",
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
        title: "Web Development",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services1.jpg"),
      },
      {
        id: 2,
        title: "App Development",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services2.jpg"),
      },
      {
        id: 3,
        title: "Blockchain Development",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services3.jpg"),
      },
      {
        id: 4,
        title: "Branding and Marketing",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services4.jpg"),
      },
      {
        id: 5,
        title: "Web Development",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services1.jpg"),
      },
      {
        id: 6,
        title: "App Development",
        desc: "Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.",
        image: require("../../assets/img/it-solution/services/services2.jpg"),
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
        itemsToShow: 4,
        snapAlign: "left",
      },
    },
  }),
});
</script>
