<template>
    <div class="features-card-section pt-100 pb-70 bg-f8fbfa" style="overflow: hidden;">
        <div class="container">
            <div class="section-title">
                <h2>Năng lực cốt lõi</h2>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bx-conversation'></i>
                        <h3>
                            <router-link to="/single-service"> Công nghệ Thông tin</router-link>
                        </h3>
                        <p>Chúng tôi cung cấp giải pháp tư vấn chiến lược về công nghệ, giúp doanh nghiệp ứng dụng hiệu quả hệ thống web hiện đại để tối ưu vận hành, tăng trưởng bền vững và đột phá trong kỷ nguyên số.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bx-laptop'></i>
                        <h3>
                            <router-link to="/single-service">Phát triển Website</router-link>
                        </h3>
                        <p>Chúng tôi thiết kế và xây dựng các trang web hiện đại, linh hoạt và chuẩn SEO, giúp doanh nghiệp nâng cao hình ảnh thương hiệu, tối ưu trải nghiệm người dùng và thúc đẩy hiệu quả kinh doanh trên nền tảng số.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bxs-badge-check'></i>
                        <h3>
                            <router-link to="/single-service">Giải pháp CNTT </router-link>
                        </h3>
                        <p>Chúng tôi cung cấp giải pháp công nghệ thông tin toàn diện, từ tư vấn đến triển khai hệ thống, giúp doanh nghiệp chuyển đổi số hiệu quả, nâng cao hiệu suất làm việc và đảm bảo tính bảo mật cao.</p>
                    </div>
                </div>

                <div class="col-lg-3 col-sm-6">
                    <div class="single-features-card">
                        <i class='bx bxs-megaphone'></i>
                        <h3>
                            <router-link to="/single-service">Tiếp thị số</router-link>
                        </h3>
                        <p>Chúng tôi cung cấp giải pháp tiếp thị số toàn diện: từ SEO, quảng cáo, đến truyền thông mạng xã hội — giúp thương hiệu của bạn tiếp cận đúng khách hàng và phát triển bền vững trên nền tảng số.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Features',
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const section = document.querySelector('.features-card-section');
      if (!section) return;

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
      const cards = document.querySelectorAll('.single-features-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('visible');
        }, index * 300);
      });
    },
    hideFeaturesCards() {
      const cards = document.querySelectorAll('.single-features-card');
      cards.forEach(card => {
        card.classList.remove('visible');
      });
    }
  }
}
</script>
