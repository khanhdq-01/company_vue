<template>
    <div class="subscribe-area bg-f4f5fe">
        <div class="container">
            <div class="subscribe-content">
                <h2>We always try to be the best support to you as possible</h2>

                <form @submit.prevent class="newsletter-form">
                    <div class="row align-items-center">
                        <div class="col-lg-8 col-md-8">
                            <input type="email" class="input-newsletter" placeholder="hello@striki.com">
                        </div>

                        <div class="col-lg-4 col-md-4">
                            <button type="submit" class="disabled" style="pointer-events: all; cursor: pointer;"><i class="bx bxs-hot"></i> Subscribe Now</button>
                        </div>
                    </div>
                </form>

                <div class="shape14"><img src="../../assets/img/shape/13.png" alt="image"></div>
                <div class="shape15"><img src="../../assets/img/shape/14.png" alt="image"></div>
                <div class="shape16"><img src="../../assets/img/shape/15.png" alt="image"></div>
                <div class="shape17"><img src="../../assets/img/shape/16.png" alt="image"></div>
                <div class="shape18"><img src="../../assets/img/shape/17.png" alt="image"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BestSupport'
}
</script>