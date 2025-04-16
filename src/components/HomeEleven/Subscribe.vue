<template>
    <div class="sm-subscribe-area me-subscribe">
        <div class="container">
            <div class="sm-subscribe-inner-box with-linear-gradient-color ptb-100">
                <div class="section-title-with-large-box">
                    <h2>Join our growing community for all the privacy of the industry!</h2>
                </div>

                <form @submit.prevent class="newsletter-form">
                    <div class="form-group">
                        <input type="email" class="input-newsletter" placeholder="hello@striki.com" name="EMAIL" required>
                    </div>
                    <button type="submit" class="disabled" style="pointer-events: all; cursor: pointer;">
                        <i class='bx bx-send'></i>
                    </button>
                </form>

                <div class="sm-subscribe-shape-1">
                    <img src="../../assets/img/seo-marketing/subscribe-shape1.png" alt="image">
                </div>
                <div class="sm-subscribe-shape-2">
                    <img src="../../assets/img/seo-marketing/subscribe-shape2.png" alt="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Subscribe'
}
</script>