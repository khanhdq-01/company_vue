<template>
    <div>
        <div class="video-presentation-area ptb-100">
            <div class="container">
                <div class="section-title">
                    <h2>Why choose us to watch this video know more</h2>
                </div>

                <div class="video-box">
                    <img src="../../assets/img/video-bg.jpg" class="main-image" alt="image">

                    <div 
                        class="video-btn popup-youtube"
                        v-on:click="isPopupMethod(isPopup)"
                        style="cursor: pointer"
                    >
                        <i class="bx bx-play"></i>
                    </div>

                    <div class="shape1"><img src="../../assets/img/shape/1.png" alt="image"></div>
                    <div class="shape2"><img src="../../assets/img/shape/2.png" alt="image"></div>
                    <div class="shape3"><img src="../../assets/img/shape/3.png" alt="image"></div>
                    <div class="shape4"><img src="../../assets/img/shape/4.png" alt="image"></div>
                    <div class="shape5"><img src="../../assets/img/shape/5.png" alt="image"></div>
                    <div class="shape6"><img src="../../assets/img/shape/6.png" alt="image"></div>
                </div>

                <Funfacts />

                <div class="contact-cta-box mwidth-1000">
                    <h3>Have any question about us?</h3>
                    <p>Don't hesitate to contact us.</p>
                    <router-link to="/contact" class="default-btn">
                        <i class="bx bxs-edit-alt"></i>
                        Contact Us
                        <span></span>
                    </router-link>
                </div>
            </div>

            <div class="shape-map1"><img src="../../assets/img/map1.png" alt="image"></div>
            <div class="shape7"><img src="../../assets/img/shape/7.png" alt="image"></div>
            <div class="shape8"><img src="../../assets/img/shape/8.png" alt="image"></div>
            <div class="shape9"><img src="../../assets/img/shape/9.png" alt="image"></div>
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
import Funfacts from './Funfacts'

export default {
    name: 'WhyChooseUs',
    components: {
        Funfacts,
    },
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