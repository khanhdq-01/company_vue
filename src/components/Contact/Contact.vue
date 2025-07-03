<template>
  <section class="contact-area ptb-100">
    <div class="container">
      <div class="contact-inner">
        <div class="row">
                      <div class="col-lg-6 col-md-12">
            <div class="contact-features-list">
              <h3>Những lý do tuyệt vời khác để chọn chúng tôi</h3>
              <p>Bắt đầu bước đầu tiên để tăng năng suất và giảm căng thẳng cùng Striki.</p>
              <p>Chúng tôi là một đội ngũ chuyên nghiệp và tận tâm, luôn sẵn sàng hỗ trợ các doanh nhân, chuyên gia và các công ty nhỏ. Hãy gặp gỡ các chuyên gia của chúng tôi, những người luôn sẵn sàng giúp bạn tối ưu hóa thành công — không chỉ trong công việc mà còn trong cuộc sống.</p>

              <ul>
                <li><i class='bx bx-badge-check'></i> Nhân viên làm việc từ các văn phòng tại USA</li>
                <li><i class='bx bx-badge-check'></i> Linh hoạt tăng/giảm quy mô theo yêu cầu</li>
                <li><i class='bx bx-badge-check'></i> Dự án một lần hoặc kéo dài theo nhu cầu</li>
                <li><i class='bx bx-badge-check'></i> Tuyển dụng theo kỹ năng chuyên môn</li>
              </ul>
            </div>
          </div>
          <!-- Form input -->
          <div class="col-lg-6 col-md-12">
            <div class="contact-form">
              <h3>Bắt đầu trải nghiệm miễn phí của bạn</h3>

              <form @submit.prevent="handleSubmit" enctype="multipart/form-data">
                <div class="row">
                  <!-- Tên -->
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="form.name" class="form-control" placeholder="Tên của bạn" required>
                    </div>
                  </div>

                  <!-- Email -->
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="email" v-model="form.email" class="form-control" placeholder="Email của bạn" required>
                    </div>
                  </div>

                  <!-- SĐT -->
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="form.phone" class="form-control" placeholder="Số điện thoại của bạn" required>
                    </div>
                  </div>

                  <!-- Chủ đề -->
                  <div class="col-lg-6 col-md-6">
                    <div class="form-group">
                      <input type="text" v-model="form.subject" class="form-control" placeholder="Chủ đề (tùy chọn)">
                    </div>
                  </div>

                  <!-- Tin nhắn -->
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group">
                      <textarea v-model="form.message" class="form-control" rows="5" placeholder="Tin nhắn (tùy chọn)"></textarea>
                    </div>
                  </div>

                  <!-- Upload CV -->
                  <div class="col-lg-12 col-md-12">
                    <div class="form-group custom-file-upload">
                      <label class="form-label">Tải lên tệp của bạn</label>
                      <div class="custom-upload-wrapper">
                        <label class="upload-btn">
                          📎 Chọn tệp
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            @change="handleFileUpload"
                          />
                        </label>
                        <span class="file-name" v-if="cvFile">{{ cvFile.name }}</span>
                        <span class="file-name" v-else>Không có tệp nào được chọn</span>
                      </div>
                    </div>
                  </div>

                  <!-- Submit -->
                  <div class="col-lg-12 col-md-12">
                    <button type="submit" class="default-btn">
                      <i class='bx bxs-paper-plane'></i> Gửi Tin Nhắn<span></span>
                    </button>
                  </div>
                </div>

                <!-- Alerts -->
                <div v-if="success" class="alert alert-success mt-3">Gửi thành công!</div>
                <div v-if="error" class="alert alert-danger mt-3">Đã có lỗi xảy ra!</div>
              </form>
            </div>
          </div>

          <!-- Phần mô tả bên phải (bạn có thể giữ nguyên) -->
          <div class="col-lg-6 col-md-12">
            <!-- Nội dung giới thiệu -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { BASE_API_URL } from '@/main'

// State
const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})
const cvFile = ref(null)
const success = ref(false)
const error = ref(false)

// File handler
const handleFileUpload = (e) => {
  const file = e.target.files[0]
  if (file) {
    cvFile.value = file
  }
}

// Submit handler
const handleSubmit = async () => {
  const formData = new FormData()
  formData.append('name', form.value.name)
  formData.append('email', form.value.email)
  formData.append('phone', form.value.phone)
  formData.append('subject', form.value.subject || '')
  formData.append('message', form.value.message || '')
  if (cvFile.value) {
    formData.append('cv', cvFile.value)
  }

  try {
    await axios.post(`${BASE_API_URL}/contact`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
    success.value = true
    error.value = false
    form.value = { name: '', email: '', phone: '', subject: '', message: '' }
    cvFile.value = null
  } catch (e) {
    console.error('API error:', e)
    error.value = true
    success.value = false
  }
}
</script>

<style scoped>
.custom-upload-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.upload-btn {
  position: relative;
  background-color: #007bff;
  color: #fff;
  padding: 8px 18px;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  overflow: hidden;
  transition: background 0.3s;
}

.upload-btn:hover {
  background-color: #0056b3;
}

.upload-btn input[type="file"] {
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
  cursor: pointer;
  height: 100%;
  width: 100%;
}

.file-name {
  font-size: 14px;
  color: #444;
}
</style>
