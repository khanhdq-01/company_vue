<template>
    <div class="me-about-area pb-100">
        <div class="container pt-100">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div class="me-about-image">
                        <img src="../../assets/img/marketing-experts/about/about.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="me-about-content">
                        <span>What We Do</span>
                        <h3>Striki is a leading web and app development company</h3>
                        <p>Nulla quis lorem ut libero malesuada feugiat quisque velit nisi pretium ut lacinia in elementum id enim curabitur arcu erat accumsan id imperdiet et porttitor at sem curabitur aliquet quam id dui posuere blandit.</p>
                        <div class="row justify-content-center">
                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li><i class='bx bx-check'></i> First Step Planing</li>
                                    <li class="color-two"><i class='bx bx-check'></i> Third Step Optimizing</li>
                                </ul>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <ul class="list">
                                    <li class="color-three"><i class='bx bx-check'></i> Second Step Research</li>
                                    <li class="color-four"><i class='bx bx-check'></i> Final Step Results</li>
                                </ul>
                            </div>
                        </div>
                        <div class="about-btn">
                            <router-link to="/about" class="default-btn">Learn More</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="me-about-shape1">
            <img src="../../assets/img/marketing-experts/about/shape1.png" alt="image">
        </div>
        <div class="me-about-shape2">
            <img src="../../assets/img/marketing-experts/about/shape2.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'WhatWeDo'
}
</script>