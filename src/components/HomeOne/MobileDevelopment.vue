<template>
    <div class="services-area bg-right-shape ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="services-content it-service-content">
                    <div class="content left-content">
                        <div class="icon">
                            <img src="../../assets/img/icon1.png" alt="image">
                        </div>
                        <h2>Phát triển Web & Ứng dụng Di động</h2>
                        <p>Chúng tôi chuyên thiết kế và xây dựng các giải pháp web và mobile hiện đại, tối ưu trải nghiệm người dùng và hiệu suất vận hành. Mỗi sản phẩm được phát triển với công nghệ tiên tiến, phù hợp với nhu cầu cụ thể của từng doanh nghiệp.</p>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i>  
                                    Thiết kế phản hồi linh hoạt
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Thiết kế giao diện và trải nghiệm người dùng
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Lập trình Web với Vue.js, React.js
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Website responsive – hiển thị đẹp trên mọi thiết bị
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Tích hợp hệ thống quản lý nội dung (CMS)
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Tối ưu hóa hiệu suất và tốc độ tải trang
                                </div>
                            </div>
                        </div>

                        <router-link to="/contact" class="default-btn">
                            <i class="bx bxs-spreadsheet"></i> 
                            Tìm hiểu thêm...
                            <span></span>
                        </router-link>
                    </div>
                </div>

                <div class="services-image">
                    <div class="image">
                        <img src="../../assets/img/services-image/service1.png" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MobileDevelopment'
}
</script>