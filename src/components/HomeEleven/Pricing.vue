<template>
    <div class="sm-pricing-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-5 col-md-12">
                    <div class="sm-pricing-section-content">
                        <span>Pricing Plan</span>
                        <h3>Choose Transparent pricing Plan</h3>
                        <p>Pellentesque in ipsum id orci porta dapibus nulla quis lorem ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                        <router-link to="/contact" class="default-btn">Ask A Quote <span></span></router-link>
                    </div>
                </div>

                <div class="col-lg-7 col-md-12">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="sm-pricing-card with-black-color">
                                <div class="pricing-header">
                                    <h3>Platinum Plan</h3>
                                </div>
                                <div class="price">
                                    $49 <span>/Per Month</span>
                                </div>
                                <ul class="pricing-features">
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        10 Pages responsive website
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Audience research
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Management & optimisation
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        50 SEO keywords
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Google analytics tracking
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Consultancy
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        24x7 Great support
                                    </li>
                                </ul>
                                <div class="price-btn">
                                    <router-link to="/contact" class="default-btn">Select Plan<span></span></router-link>
                                </div>
                            </div>
                        </div>
    
                        <div class="col-lg-6 col-md-6">
                            <div class="sm-pricing-card with-black-color">
                                <div class="pricing-header">
                                    <h3>Advance Plan</h3>
                                </div>
                                <div class="price">
                                    $99 <span>/Per Month</span>
                                </div>
                                <ul class="pricing-features">
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        10 Pages responsive website
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Audience research
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Management & optimisation
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        50 SEO keywords
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Google analytics tracking
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        Consultancy
                                    </li>
                                    <li>
                                        <i class='bx bx-check-circle'></i>
                                        24x7 Great support
                                    </li>
                                </ul>
                                <div class="price-btn">
                                    <router-link to="/contact" class="default-btn">Select Plan<span></span></router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="me-pricing-shape1">
            <img src="../../assets/img/marketing-experts/pricing-shape1.png" alt="image">
        </div>
        <div class="me-pricing-shape2">
            <img src="../../assets/img/marketing-experts/pricing-shape2.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Pricing'
}
</script>