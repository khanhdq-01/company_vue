<template>
  <div class="featured-area pt-100 pb-70">
    <div class="container">
      <div class="section-title text-center mb-5">
        <h2>Đến với KodingSoft, bạn sẽ học hỏi được những gì?</h2>
      </div>

      <div class="row">
        <div
          class="col-lg-4 col-md-6 col-sm-6 mb-4"
          v-for="(item, index) in features"
          :key="index"
        >
          <div class="single-featured-box">
            <div class="featured-img">
              <img :src="item.image" :alt="item.title" />
            </div>
            <div class="featured-content">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GrowthSection",
  data() {
    return {
      features: [
        {
          description:
            "Tham gia dự án Laravel, Vue, Flutter... giúp bạn nâng cao năng lực coding và quy trình Dev chuyên nghiệp.",
          image: require("../../assets/img/marketing-agency/featured-img1.jpg"),
        },
        {
          description:
            "Trao đổi, phản biện, phối hợp nhóm giúp phát triển kỹ năng teamwork và giao tiếp hiệu quả.",
          image: require("../../assets/img/marketing-agency/featured-img2.jpg"),
        },
        {
          description:
            "Phân tích yêu cầu, xử lý bug, tối ưu hệ thống để trở thành lập trình viên linh hoạt và tự chủ.",
          image: require("../../assets/img/marketing-agency/featured-img3.jpg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.single-featured-box {
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.single-featured-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
}

.featured-img {
  width: 100%;
  height: 220px;
  overflow: hidden;
}

.featured-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.single-featured-box:hover .featured-img img {
  transform: scale(1.05);
}

.featured-content {
  padding: 20px;
  background-color: #ffffff;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.featured-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1c1c1c;
}

.featured-content p {
  font-size: 15px;
  color: #555;
  line-height: 1.6;
}
</style>
