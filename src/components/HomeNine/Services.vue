<template>
    <div class="sm-services-area pt-100 pb-70">
        <div class="container">
            <div class="section-title-with-large-box">
                <span>Introduce our services</span>
                <h2>Why your Businesses need Our Best SEO services</h2>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-lg-4 col-md-12">
                    <div class="sm-services-card wow">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-conversation"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">Web Analytics</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>

                    <div class="sm-services-card some-left">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-customize"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">Link Building</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>

                    <div class="sm-services-card">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-slider-alt"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">Site Migrations</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="sm-services-card-image">
                        <img src="../../assets/img/seo-marketing/services.png" alt="image">
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <div class="sm-services-card wow">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-reset"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">SEO Optimization</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>

                    <div class="sm-services-card some-right">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-bell"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">Content Marketing</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>

                    <div class="sm-services-card">
                        <div class="content">
                            <div class="icon">
                                <i class="bx bx-shape-circle"></i>
                            </div>
                            <h3>
                                <router-link to="/single-service">Lead Magnet Creation</router-link>
                            </h3>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt mauris.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="sm-services-shape">
            <img src="../../assets/img/seo-marketing/services-shape.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services'
}
</script>