<template>
  <div class="feedback-area pt-100 pb-70">
    <div class="container">
      <div class="section-title">
        <h2>Whats Our Clients Said About <span>Striki</span></h2>
      </div>

      <div class="feedback-slides">
        <carousel
          :settings="settings"
          :wrap-around="true"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-feedback-item">
              <img :src="slide.image" alt="image" />

              <div class="feedback-desc">
                <p>{{ slide.description }}</p>

                <div class="rating">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </div>

                <div class="client-info">
                  <h3>{{ slide.name }}</h3>
                  <span>{{ slide.position }}</span>
                </div>
              </div>
            </div>
          </slide>

          <template #addons>
            <Pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WhatsOurClients",
  components: {
    Carousel,
    Slide,
    Pagination,
  },
  data: () => ({
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    carouselItems: [
      {
        id: 1,
        image: require("../../assets/img/woman1.png"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
        name: "Sarah Taylor",
        position: "CEO at Envato",
      },
      {
        id: 2,
        image: require("../../assets/img/woman2.png"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
        name: "Olivar Lucy",
        position: "CEO at HiboTheme",
      },
      {
        id: 3,
        image: require("../../assets/img/woman1.png"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
        name: "Steven Smith",
        position: "CEO at Envato",
      },
    ],
    breakpoints: {
      0: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      768: {
        itemsToShow: 1,
        snapAlign: "center",
      },
      1024: {
        itemsToShow: 2,
        snapAlign: "left",
      },
      1200: {
        itemsToShow: 2,
        snapAlign: "left",
      },
    },
  }),
});
</script>
