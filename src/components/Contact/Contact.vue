<template>
    <section class="contact-area ptb-100">
        <div class="container">
            <div class="contact-inner">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-features-list">
                            <h3>Những lý do tuyệt vời khác để chọn chúng tôi</h3>
                            <p>Bắt đầu bước đầu tiên để tăng năng suất và giảm căng thẳng cùng Striki.</p>
                            <p>Chúng tôi là một đội ngũ chuyên nghiệp và tận tâm, luôn sẵn sàng hỗ trợ các doanh nhân, chuyên gia và các công ty nhỏ. Hãy gặp gỡ các chuyên gia của chúng tôi, những người luôn sẵn sàng giúp bạn tối ưu hóa thành công — không chỉ trong công việc mà còn trong cuộc sống. Chúng tôi giúp bạn tiết kiệm thời gian để tập trung vào bức tranh lớn hơn, còn những chi tiết nhỏ sẽ do chúng tôi lo liệu.</p>

                            <ul>
                                <li><i class='bx bx-badge-check'></i> Nhân viên làm việc từ các văn phòng tại USA</li>
                                <li><i class='bx bx-badge-check'></i> Linh hoạt tăng/giảm quy mô theo yêu cầu</li>
                                <li><i class='bx bx-badge-check'></i> Dự án một lần hoặc kéo dài theo nhu cầu</li>
                                <li><i class='bx bx-badge-check'></i> Tuyển dụng theo kỹ năng chuyên môn</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-form">
                            <h3>Bắt đầu trải nghiệm miễn phí của bạn</h3>

                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.name" class="form-control" placeholder="Tên của bạn">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email" class="form-control" placeholder="Email của bạn">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.phone" class="form-control" placeholder="Số điện thoại của bạn">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.subject" class="form-control" placeholder="Chủ đề của bạn">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea v-model="form.message" class="form-control" cols="30" rows="6" placeholder="Tin nhắn của bạn"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn">
                                            <i class='bx bxs-paper-plane'></i> Gửi Tin Nhắn<span></span>
                                        </button>
                                    </div>
                                </div>

                                <div v-if="success" class="alert alert-success mt-3">Gửi thành công!</div>
                                <div v-if="error" class="alert alert-danger mt-3">Đã có lỗi xảy ra!</div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="contact-info">
                    <div class="contact-info-content">
                        <h3>Liên hệ với chúng tôi qua Số điện thoại hoặc Email</h3>
                        <h2>
                            <a href="tel:+0881306298615">+84 333036 046</a>
                            <span>HOẶC</span>
                            <a href="mailto:quockhanh@gmail.com">quockhanh@gmail.com</a>
                        </h2>

                        <ul class="social">
                                <li><a href="https://www.facebook.com/quockhanh080301" target="_blank"><i class="bx bxl-facebook"></i></a></li>
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

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { BASE_API_URL } from "@/main";

// Biến dữ liệu form
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

// Trạng thái thông báo
const success = ref(false)
const error = ref(false)

// Gửi form
const handleSubmit = async () => {
  try {
    const response = await axios.post(`${BASE_API_URL}/contact`, {
      name: form.value.name,
      email: form.value.email,
      phone: form.value.phone,
      subject: form.value.subject,
      message: form.value.message,
    })

    success.value = true
    error.value = false

    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    }
  } catch (e) {
    console.error('API Error:', e.response ? e.response.data : e.message)
    error.value = true
    success.value = false
  }
}
</script>
