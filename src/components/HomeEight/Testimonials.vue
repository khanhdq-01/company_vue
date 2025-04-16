<template>
  <div class="feedback-area ptb-100">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="section-title text-left">
            <span class="sub-title">Testimonials</span>
            <h2>Our Customer Valuable Feedback</h2>
          </div>
        </div>

        <div class="col-lg-6 col-md-12">
          <div class="testimonials-slides-two">
            <carousel :autoplay="5000" :settings="settings" :wrap-around="true">
              <slide v-for="slide in carouselItems" :key="slide.id">
                <div class="single-testimonials-box">
                  <p>{{ slide.description }}</p>

                  <div class="client-info">
                    <div class="d-flex align-items-center">
                      <img :src="slide.image" alt="image" />
                      <div class="title">
                        <h3>{{ slide.name }}</h3>
                        <span>{{ slide.position }}</span>
                      </div>
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
        image: require("../../assets/img/user1.jpg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        name: "John Smith",
        position: "CEO at Envato",
      },
      {
        id: 2,
        image: require("../../assets/img/user2.jpg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        name: "Olivar Lucy",
        position: "CEO at HiboTheme",
      },
      {
        id: 3,
        image: require("../../assets/img/user3.jpg"),
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
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
