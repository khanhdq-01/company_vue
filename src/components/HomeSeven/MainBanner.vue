<template>
  <div class="banner-section chatbot-main-banner">
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
          <div class="banner-img bg-3">
            <div class="chat-wrapper">
              <div class="chat">
                <div class="chat-container">
                  <div class="chat-listcontainer">
                    <ul class="chat-message-list">
                      <li class="message-right ms1">
                        <div class="messageinner-ms1">
                          <img
                            src="../../assets/img/author-image/6.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            👋 Hi! I'm a Striki. Let me know if you have any
                            questions regarding our tool or set up a demo to
                            learn more!
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-left ms2">
                        <div class="messageinner-ms2">
                          <img
                            src="../../assets/img/author-image/7.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            I have a Question
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-right ms3">
                        <div class="messageinner-ms3">
                          <img
                            src="../../assets/img/author-image/6.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            Sure! Ask me anything!
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-left ms4">
                        <div class="messageinner-ms4">
                          <img
                            src="../../assets/img/author-image/7.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            What are you doing?
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-right ms5">
                        <div class="messageinner-ms5">
                          <img
                            src="../../assets/img/author-image/6.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            I'm great! I would love to get to better understand
                            how you're doing and your needs, so I can best tell
                            you how I can help you. Let me get some contact
                            details.
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-left ms6">
                        <div class="messageinner-ms6">
                          <img
                            src="../../assets/img/author-image/7.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            Could you describe HiboTheme in one sentence?
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                      <li class="message-right ms7">
                        <div class="messageinner-ms7">
                          <img
                            src="../../assets/img/author-image/6.jpg"
                            alt="Image"
                          />
                          <span class="message-text">
                            HiboTheme.com | Premium High-Quality Items
                            Design+Dev! Buy all exciting premium templates and
                            themes from HiboTheme!, Thank You!❤️
                            <span class="message-time"> 19:58 </span>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <img src="../../assets/img/banner-img3.jpg" alt="image" />
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
        heading: "Jump with us to build your brand",
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
