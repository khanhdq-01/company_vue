<template>
    <div>
        <div class="seo-marketing-banner">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="seo-marketing-banner-content">
                            <span>SEO Marketing</span>
                            <h1>
                                We Are Best SEO Service Provider
                            </h1>
                            <p>
                                Donec sollicitudin molestie malesuada mauris blandit aliquet elit eget tincidunt nibh pulvinar nulla quis lorem ut libero malesuada feugiat.
                            </p>
                            <ul class="banner-btn">
                                <li>
                                    <router-link to="/contact" class="default-btn">
                                        <i class="bx bxs-hot"></i>Get Started<span></span>
                                    </router-link>
                                </li>
                                <li>
                                    <div 
                                        class="video-btn"
                                        v-on:click="isPopupMethod(isPopup)"
                                        style="cursor: pointer"
                                    >
                                        <i class="bx bxs-right-arrow"></i>
                                        Watch Video
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="seo-marketing-banner-image">
                            <img src="../../assets/img/seo-marketing/banner/main.png" alt="image">
                        </div>
                    </div>
                </div>
            </div>

            <div class="seo-marketing-banner-shape-1">
                <img src="../../assets/img/seo-marketing/banner/shape1.png" alt="image">
            </div>
            <div class="seo-marketing-banner-shape-2">
                <img src="../../assets/img/seo-marketing/banner/shape2.png" alt="image">
            </div>
            <div class="seo-marketing-banner-shape-3">
                <img src="../../assets/img/seo-marketing/banner/shape3.png" alt="image">
            </div>
        </div>

        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
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
export default {
    name: 'MainBanner',
    data (){
        return {
            isPopup: false,
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
}
</script>