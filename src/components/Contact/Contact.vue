<template>
    <section class="contact-area ptb-100">
        <div class="container">
            <div class="contact-inner">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-features-list">
                            <h3>Some other great reasons to choose us</h3>
                            <p>Take the first steps towards increased productivity and reduced stress with Striki.</p>
                            <p>We are a highly trained, dedicated team, helping entrepreneurs, professionals, and small Meet Our experts always ready to help yous streamline success - not just in work, but in life too. We help spare your time to focus on the bigger picture by taking care of the little details.</p>

                            <ul>
                                <li><i class='bx bx-badge-check'></i> Staff works from our offices in USA</li>
                                <li><i class='bx bx-badge-check'></i> Scale up/ down on demand</li>
                                <li><i class='bx bx-badge-check'></i> One time or on going projects</li>
                                <li><i class='bx bx-badge-check'></i> Hire based on skill set</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-form">
                            <h3>Let's Start Your Free Trial</h3>

                            <form @submit.prevent>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Your Email">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" class="form-control" placeholder="Your Phone">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" placeholder="Your Subject">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn"><i class='bx bxs-paper-plane'></i>Send Message<span></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="contact-info">
                    <div class="contact-info-content">
                        <h3>Contact us by Phone Number or Email Address</h3>
                        <h2>
                            <a href="tel:+0881306298615">+088 130 629 8615</a>
                            <span>OR</span>
                            <a href="mailto:hello@striki.com">hello@striki.com</a>
                        </h2>

                        <ul class="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Contact'
}
</script>