<template>
  <div class="is-banner-slides">
    <carousel :autoplay="5000" :wrap-around="true" :settings="settings">
      <slide v-for="slide in carouselItems" :key="slide.id">
        <div class="is-banner-item">
          <div class="container">
            <div class="is-banner-content">
              <span>{{ slide.subTitle }}</span>
              <h1>{{ slide.heading }}</h1>
              <p>{{ slide.desc }}</p>
              <div class="banner-btn">
                <router-link :to="slide.btnLink" class="default-btn">
                  <i class="bx bxs-hot"></i>{{ slide.btnText }}<span></span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </slide>

      <template #addons>
        <navigation>
          <template #prev>
            <i class="bx bx-left-arrow-alt"></i>
          </template>
          <template #next>
            <i class="bx bx-right-arrow-alt"></i>
          </template>
        </navigation>
      </template>
    </carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MainBanner",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    isPopup: false,
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        subTitle: "Welcome To Striki",
        heading: "Get IT Solution for your Business",
        desc: "Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.",
        btnText: "Get Started",
        btnLink: "/contact",
      },
      {
        id: 1,
        subTitle: "Welcome To Striki",
        heading: "We Are Best SEO Service Provider",
        desc: "Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.",
        btnText: "Get Started",
        btnLink: "/contact",
      },
    ],
  }),
});
</script>
