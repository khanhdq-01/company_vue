<template>
  <div class="case-studies-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-left">
        <span class="sub-title">Case Studies</span>
        <h2>Check of our some recent works & case studies</h2>
      </div>
    </div>

    <div class="container-fluid">
      <div class="case-studies-slides">
        <carousel
          :autoplay="5000"
          :wrap-around="true"
          :settings="settings"
          :breakpoints="breakpoints"
        >
          <slide v-for="slide in carouselItems" :key="slide.id">
            <div class="single-case-studies-item">
              <a href="#" class="image d-block">
                <img :src="slide.image" alt="image" />
              </a>

              <div class="content">
                <h3>
                  <a href="#">{{ slide.title }}</a>
                </h3>
                <a href="#" class="link-btn"
                  ><i class="bx bx-right-arrow-alt"></i
                ></a>
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
  name: "CaseStudies",
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
        image: require("../../assets/img/case-studies/case-studies-img1.jpg"),
        title: "Customer Satisfaction for a Digital Marketing Agency",
      },
      {
        id: 2,
        image: require("../../assets/img/case-studies/case-studies-img2.jpg"),
        title: "Return on Investment for Various Digital Marketing",
      },
      {
        id: 3,
        image: require("../../assets/img/case-studies/case-studies-img3.jpg"),
        title: "Google Search Engine Marketing Case Study",
      },
      {
        id: 4,
        image: require("../../assets/img/case-studies/case-studies-img4.jpg"),
        title: "Analysis of New Product Launch Using Google",
      },
      {
        id: 5,
        image: require("../../assets/img/case-studies/case-studies-img5.jpg"),
        title: "Social Media Strategies for Online Shopping Cart",
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
