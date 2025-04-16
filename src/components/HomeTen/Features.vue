<template>
    <div class="is-features-area pt-100 pb-70">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-4 col-sm-6">
                    <div class="is-features-card">
                        <div class="number">
                            <span>01</span>
                        </div>
                        <h3>
                            <router-link to="/single-service">Data Analysis</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus praesent sapien massa convallis a pellentesque.</p>
                        <div class="icon">
                            <i class="bx bx-customize"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="is-features-card">
                        <div class="number">
                            <span>02</span>
                        </div>
                        <h3>
                            <router-link to="/single-service">PPC Marketing</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus praesent sapien massa convallis a pellentesque.</p>
                        <div class="icon">
                            <i class="bx bx-slider-alt"></i>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-sm-6">
                    <div class="is-features-card">
                        <div class="number">
                            <span>03</span>
                        </div>
                        <h3>
                            <router-link to="/single-service">Business Analytics</router-link>
                        </h3>
                        <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus praesent sapien massa convallis a pellentesque.</p>
                        <div class="icon">
                            <i class="bx bx-reset"></i>
                        </div>
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