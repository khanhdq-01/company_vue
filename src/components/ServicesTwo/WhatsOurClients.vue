<template>
  <div class="testimonials-area pt-100 pb-70">
    <div class="container">
      <div class="section-title">
        <h2>Whats Our Clients Said About <span>Striki</span></h2>
      </div>

      <div class="testimonials-slides">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-testimonials-item">
              <div class="client-info">
                <img :src="slide.image" alt="image" />
                <h3>{{ slide.name }}</h3>
                <span>{{ slide.position }}</span>
              </div>

              <div class="testimonials-desc">
                <p>{{ slide.description }}</p>

                <div class="rating">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
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
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination } from "vue3-carousel";

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
        image: require("../../assets/img/author-image/6.jpg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
        name: "Michel John",
        position: "CEO at Envato",
      },
      {
        id: 2,
        image: require("../../assets/img/author-image/7.jpg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse.",
        name: "Olivar Lucy",
        position: "CEO at HiboTheme",
      },
      {
        id: 3,
        image: require("../../assets/img/author-image/8.jpg"),
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
