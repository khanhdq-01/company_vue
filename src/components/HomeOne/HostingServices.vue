<template>
    <div class="services-area bg-left-color bg-left-shape bg-f4f6fc ptb-100">
        <div class="container-fluid">
            <div class="row align-items-center">
                <div class="services-image">
                    <div class="image">
                        <img src="../../assets/img/services-image/service2.png" alt="image">
                    </div>
                </div>

                <div class="services-content it-service-content">
                    <div class="content">
                        <div class="icon">
                            <img src="../../assets/img/icon1.png" alt="image">
                        </div>
                        <h2>Dịch vụ Lưu trữ Đám mây (Cloud Hosting)</h2>
                        <p>Giải pháp lưu trữ hiện đại, an toàn và linh hoạt cho doanh nghiệp. Chúng tôi cung cấp nền tảng hạ tầng mạnh mẽ, giúp tối ưu hóa hiệu suất hoạt động, bảo mật dữ liệu và dễ dàng mở rộng khi cần thiết.</p>

                        <div class="row">
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i>  
                                    Cơ sở dữ liệu đám mây
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Cloud lai (Hybrid Cloud)
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Máy chủ Email
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Hosting Website
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Lưu trữ tệp tin
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="feature-box">
                                    <i class='bx bxs-badge-check'></i> 
                                    Hệ thống sao lưu
                                </div>
                            </div>
                        </div>

                        <router-link to="/services-three" class="default-btn">
                            <i class="bx bxs-spreadsheet"></i> 
                            Xem chi tiết 
                            <span></span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HostingServices'
}
</script>
