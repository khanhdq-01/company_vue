<template>
    <footer class="footer-area-with-black-color pt-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <router-link to="/"><img src="../../assets/img/logo_kingsoft_footer.png" alt="image"></router-link>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                        <ul class="social">
                            <li><a href="https://www.facebook.com/profile.php?id=61576332803590" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="single-footer-widget ps-5">
                        <h3>Company</h3>

                        <ul class="services-list">
                            <li><router-link to="/about">About Us</router-link></li>
                            <li><router-link to="/services-one">Services</router-link></li>
                            <li><router-link to="/features-one">Features</router-link></li>
                            <li><router-link to="/pricing">Our Pricing</router-link></li>
                            <li><router-link to="/blog-one">Latest News</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Support</h3>

                        <ul class="support-list">
                            <li><router-link to="/faq">FAQ's</router-link></li>
                            <li><router-link to="/blog-one">Blog</router-link></li>
                            <li><router-link to="/single-blog">Blog Details</router-link></li>
                            <li><router-link to="/about">Community</router-link></li>
                            <li><router-link to="/contact">Contact Us</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Contact Info</h3>

                        <ul class="footer-contact-info">
                            <li>Location: <a href="https://goo.gl/maps/MQ78iGP5g9VgZcJ38" target="_blank">6th Floor, Elegant Tower, York, USA</a></li>
                            <li>Email: <a href="mailto:hello@striki.com">hello@striki.com</a></li>
                            <li>Phone: <a href="tel:+321754754">+0 (321) 984 754</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>© <a href="http://hibotheme.com/" target="_blank">HiboTheme.com</a> All rights reserved by Striki</p>
            </div>
        </div>

        <div class="footer-shape-1">
            <img src="../../assets/img/seo-marketing/footer-shape1.png" alt="image">
        </div>
        <div class="footer-shape-2">
            <img src="../../assets/img/seo-marketing/footer-shape2.png" alt="image">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterStyleTwo',
}
</script>