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

                            <form @submit.prevent="handleSubmit">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.name" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email" class="form-control" placeholder="Your Email">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.phone" class="form-control" placeholder="Your Phone">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" v-model="form.subject" class="form-control" placeholder="Your Subject">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea v-model="form.message" class="form-control" cols="30" rows="6" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn">
                                            <i class='bx bxs-paper-plane'></i>Send Message<span></span>
                                        </button>
                                    </div>
                                </div>

                                <div v-if="success" class="alert alert-success mt-3">Sent successfully!</div>
                                <div v-if="error" class="alert alert-danger mt-3">An error has occurred!</div>
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
