<template>
    <div>
        <div class="me-banner-area">
            <div class="container-fluid">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="me-banner-content">
                            <span>Welcome To Striki</span>
                            <h1>
                                We are Creative Marketing Experts
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
                        <div class="me-banner-image">
                            <img src="../../assets/img/marketing-experts/banner/main.png" alt="image">

                            <div class="circle-shape">
                                <img src="../../assets/img/marketing-experts/banner/circle.png" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="me-banner-shape">
                <img src="../../assets/img/marketing-experts/banner/shape.png" alt="image">
            </div>

            <div class="me-lines">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
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