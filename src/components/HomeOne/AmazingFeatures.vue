<template>
    <div class="features-area pt-100 pb-70 bg-f4f6fc" id="amazing-features">
        <div class="container">
            <div class="section-title">
                <h2>Đối tác đáng tin cậy của bạn</h2>
            </div>

            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bx-conversation bg-13c4a1'></i>
                        <h3>Tư vấn CNTT</h3>
                        <p>Chúng tôi cung cấp các giải pháp tư vấn chuyên sâu về công nghệ thông tin, giúp bạn phát triển và tối ưu hóa hệ thống công nghệ cho doanh nghiệp.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bxs-badge-check bg-6610f2'></i>
                        <h3>Giải pháp CNTT</h3>
                        <p>Chúng tôi cung cấp các giải pháp công nghệ thông tin hiệu quả và sáng tạo, giúp nâng cao hiệu suất và bảo mật cho hệ thống của bạn.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bxs-dashboard bg-ffb700'></i>
                        <h3>Bảng điều khiển đơn giản</h3>
                        <p>Chúng tôi phát triển các bảng điều khiển dễ sử dụng và hiệu quả, giúp bạn quản lý mọi hoạt động của doanh nghiệp một cách nhanh chóng và dễ dàng.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bxs-bell-ring bg-fc3549'></i>
                        <h3>Nhắc nhở hạn chót</h3>
                        <p>Hệ thống của chúng tôi tự động nhắc nhở các công việc và nhiệm vụ quan trọng, giúp bạn không bỏ sót bất kỳ thời hạn nào.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bxs-info-circle bg-00d280'></i>
                        <h3>Thu thập thông tin</h3>
                        <p>Chúng tôi giúp bạn thu thập và xử lý thông tin từ nhiều nguồn khác nhau để đưa ra các quyết định chính xác và kịp thời.</p>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6">
                    <div class="features-box-one">
                        <i class='bx bx-cog bg-ff612f'></i>
                        <h3>Chức năng linh hoạt</h3>
                        <p>Giải pháp của chúng tôi có khả năng tùy chỉnh cao, giúp bạn linh hoạt điều chỉnh các tính năng sao cho phù hợp nhất với nhu cầu thực tế của doanh nghiệp.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AmazingFeatures',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = document.querySelector('.features-area');
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        section.classList.add('visible');
        this.showFeaturesCards();
      } else {
        section.classList.remove('visible');
        this.hideFeaturesCards();
      }
    },
    showFeaturesCards() {
      const cards = document.querySelectorAll('.features-box-one');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 1000);
      });
    },
    hideFeaturesCards() {
      const cards = document.querySelectorAll('.features-box-one');
      cards.forEach(card => {
        card.classList.remove('visible');
      });
    }
  }
}
</script>
