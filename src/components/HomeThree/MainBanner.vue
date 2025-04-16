<template>
  <div>
    <div class="banner-section">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <div class="banner-content">
              <div class="content">
                <div class="banner-content-slides">
                  <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                    :settings="settings"
                  >
                    <slide v-for="slide in carouselItems" :key="slide.id">
                      <div class="inner-content plr-15">
                        <h1>{{ slide.heading }}</h1>
                        <p>{{ slide.description }}</p>

                        <router-link :to="slide.btnLink" class="default-btn">
                          <i class="bx bxs-hot"></i>
                          {{ slide.btnText }}
                          <span></span>
                        </router-link>
                      </div>
                    </slide>

                    <template #addons>
                      <Navigation />
                    </template>
                  </carousel>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-5 col-md-12">
            <div class="banner-img banner-video">
              <div class="d-table">
                <div class="d-table-cell">
                  <div class="video-box">
                    <div
                      class="video-btn popup-youtube"
                      v-on:click="isPopupMethod(isPopup)"
                      style="cursor: pointer"
                    >
                      <i class="bx bx-play"></i>
                    </div>

                    <div class="shape1">
                      <img src="../../assets/img/shape/1.png" alt="image" />
                    </div>
                    <div class="shape2">
                      <img src="../../assets/img/shape/2.png" alt="image" />
                    </div>
                    <div class="shape3">
                      <img src="../../assets/img/shape/3.png" alt="image" />
                    </div>
                    <div class="shape4">
                      <img src="../../assets/img/shape/4.png" alt="image" />
                    </div>
                    <div class="shape5">
                      <img src="../../assets/img/shape/5.png" alt="image" />
                    </div>
                    <div class="shape6">
                      <img src="../../assets/img/shape/6.png" alt="image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="shape19">
        <img src="../../assets/img/shape/18.png" alt="image" />
      </div>
      <div class="shape22">
        <img src="../../assets/img/shape/21.png" alt="image" />
      </div>
      <div class="shape23">
        <img src="../../assets/img/shape/22.svg" alt="image" />
      </div>
      <div class="shape24">
        <img src="../../assets/img/shape/23.png" alt="image" />
      </div>
      <div class="shape25">
        <img src="../../assets/img/shape/24.png" alt="image" />
      </div>
      <div class="shape26">
        <img src="../../assets/img/shape/25.png" alt="image" />
      </div>
      <div class="shape20">
        <img src="../../assets/img/shape/19.png" alt="image" />
      </div>
    </div>
    <div class="popup-video" v-if="isPopup">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="popup-overlay-close" v-on:click="isPopupMethod(isPopup)">
            <div class="popup-overlay-close-line"></div>
            <div class="popup-overlay-close-line"></div>
          </div>
          <div class="play-video">
            <iframe src="https://www.youtube.com/embed/bk7McNUjWgw"></iframe>
          </div>
        </div>
      </div>
    </div>
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
        heading: "Web And Mobile App Development",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        btnText: "Contact Us",
        btnLink: "/contact",
      },
      {
        id: 2,
        heading: "Solve Business Challenges With IT",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
        btnText: "Contact Us",
        btnLink: "/contact",
      },
    ],
  }),
  methods: {
    isPopupMethod(isPopup) {
      return (this.isPopup = !isPopup);
    },
  },
});
</script>
