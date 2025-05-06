<template>
    <footer class="footer-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <router-link to="/"><img src="../../assets/img/logo_kingsoft_footer.png" alt="image"></router-link>
                        </div>
                        <p>KodingSoft là công ty chuyên cung cấp các giải pháp công nghệ tiên tiến, từ phát triển phần mềm đến các dịch vụ hỗ trợ kỹ thuật, nhằm giúp doanh nghiệp tối ưu hóa quy trình và nâng cao hiệu quả công việc.</p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Công ty</h3>

                        <ul class="services-list">
                            <li><router-link to="/about">Giới thiệu</router-link></li>
                            <li><router-link to="/services-one">Dịch vụ</router-link></li>
                            <li><router-link to="/features-one">Tính năng</router-link></li>
                            <li><router-link to="/pricing">Bảng giá</router-link></li>
                            <li><router-link to="/blog-one">Tin tức mới nhất</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Hỗ trợ</h3>

                        <ul class="support-list">
                            <li><router-link to="/faq">Câu hỏi thường gặp</router-link></li>
                            <li><router-link to="/blog-one">Blog</router-link></li>
                            <li><router-link to="/single-blog">Chi tiết blog</router-link></li>
                            <li><router-link to="/about">Cộng đồng</router-link></li>
                            <li><router-link to="/contact">Liên hệ</router-link></li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>Thông tin liên hệ</h3>

                        <ul class="footer-contact-info">
                            <li>Địa chỉ: <a href="https://goo.gl/maps" target="_blank">Hà Nội</a></li>
                            <li>Email: <a href="mailto:quockhanh080301@gmail.com">quockhanh080301@gmail.com</a></li>
                            <li>Điện thoại: <a href="tel:+84333036046">+84 333 036 046</a></li>
                        </ul>
                        <ul class="social">
                                <li><a href="https://www.facebook.com/quockhanh080301" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>© Bảo lưu tất cả quyền lợi bởi KodingSoft</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
