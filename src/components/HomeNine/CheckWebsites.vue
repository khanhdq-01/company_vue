<template>
    <div class="sm-websites-area">
        <div class="container">
            <div class="sm-websites-inner-area ptb-100">
                <div class="row align-items-center justify-content-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="sm-websites-content">
                            <h3>Check your websites SEO</h3>
                            <p>Quisque velit nisi pretium ut lacinia in elementum id enim donec rutrum congue leo eget malesuada nulla porttitor accumsan.</p>

                            <form @submit.prevent>
                                <div class="form-group">
                                    <label>Website URL</label>
                                    <input type="text" class="form-control" placeholder="Website URL">
                                </div>
                                
                                <div class="form-group">
                                    <label>Your Mail</label>
                                    <input type="text"  class="form-control" placeholder="Your email here">
                                </div>

                                <button type="submit" class="default-btn">Check Now<span></span></button>
                            </form>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="sm-websites-image">
                            <img src="../../assets/img/seo-marketing/websites/websites.png" alt="image">
                        </div>
                    </div>
                </div>

                <div class="websites-dot-shape">
                    <img src="../../assets/img/seo-marketing/websites/shape.png" alt="image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CheckWebsites'
}
</script>