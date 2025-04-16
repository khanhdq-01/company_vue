<template>
    <div class="me-features-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-3 col-sm-6">
                    <div class="me-features-card">
                        <i class="bx bx-customize"></i>
                        <h3>
                            <router-link to="/single-service">Data Analysis</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus sed porttitor lectus nibh.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="me-features-card bg-two">
                        <i class="bx bx-slider-alt"></i>
                        <h3>
                            <router-link to="/single-service">PPC Marketing</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus sed porttitor lectus nibh.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="me-features-card bg-three">
                        <i class="bx bx-reset"></i>
                        <h3>
                            <router-link to="/single-service">Business Analytics</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus sed porttitor lectus nibh.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="me-features-card bg-four">
                        <i class="bx bx-shape-circle"></i>
                        <h3>
                            <router-link to="/single-service">Digital Marketing</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus sed porttitor lectus nibh.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features'
}
</script>