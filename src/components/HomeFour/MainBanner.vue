<template>
    <div>
        <div class="saas-banner">
            <div class="d-table">
                <div class="d-table-cell">
                    <div class="container max-width-1290">
                        <div class="row align-items-center pt-5">
                            <div class="col-lg-6 col-md-12">
                                <div class="saas-image mt-70">
                                    <img src="../../assets/img/saas-shape/arrow.png" alt="arrow">
                                    <img src="../../assets/img/saas-shape/box1.png" alt="box1">
                                    <img src="../../assets/img/saas-shape/boy1.png" alt="boy1">
                                    <img src="../../assets/img/saas-shape/boy2.png" alt="boy2">
                                    <img src="../../assets/img/saas-shape/boy3.png" alt="boy3">
                                    <img src="../../assets/img/saas-shape/digital-screen.png" alt="digital-screen">
                                    <img src="../../assets/img/saas-shape/filter1.png" alt="filter1">
                                    <img src="../../assets/img/saas-shape/filter2.png" alt="filter2">
                                    <img src="../../assets/img/saas-shape/filter3.png" alt="filter3">
                                    <img src="../../assets/img/saas-shape/girl1.png" alt="girl1">
                                    <img src="../../assets/img/saas-shape/girl2.png"  alt="girl2">
                                    <img src="../../assets/img/saas-shape/monitor.png" alt="monitor">

                                    <!-- Main image -->
                                    <img src="../../assets/img/saas-shape/main-image.png" alt="main-image.png">
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-12">
                                <div class="hero-content pl-4">
                                    <h1>Manage your business strategy in one placeholder</h1>
                                    <p>Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                                    
                                    <div class="banner-btn">
                                        <div class="d-flex">
                                            <a href="#" class="default-btn">
                                                <i class="bx bxs-hot"></i>
                                                Get Started 
                                                <span></span>
                                            </a>
                                            <div 
                                                class="video-btn popup-youtube"
                                                v-on:click="isPopupMethod(isPopup)"
                                                style="cursor: pointer"
                                            >
                                                <i class="bx bxs-right-arrow"></i>
                                                Watch Video
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="shape-rotate rotateme">
                <img src="../../assets/img/saas-shape/shape-rotate.png" alt="img">
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