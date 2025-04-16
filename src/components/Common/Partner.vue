<template>
  <div class="partner-area pt-100 pb-70 bg-f8fbfa">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-3 col-md-12">
          <div class="partner-title">
            <h3>Featured by:</h3>
          </div>
        </div>

        <div class="col-lg-9 col-md-12">
          <div class="partner-slides">
            <carousel
              :autoplay="5000"
              :wrap-around="true"
              :settings="settings"
              :breakpoints="breakpoints"
            >
              <slide v-for="slide in carouselItems" :key="slide.id">
                <div class="single-partner-item">
                  <a href="#">
                    <img :src="slide.image" alt="image" />
                  </a>
                </div>
              </slide>

              <template #addons> </template>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "Partner",
  components: {
    Carousel,
    Slide,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/img/partner-image/1.png"),
      },
      {
        id: 2,
        image: require("../../assets/img/partner-image/2.png"),
      },
      {
        id: 3,
        image: require("../../assets/img/partner-image/3.png"),
      },
      {
        id: 4,
        image: require("../../assets/img/partner-image/4.png"),
      },
      {
        id: 1,
        image: require("../../assets/img/partner-image/1.png"),
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      576: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      768: {
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
