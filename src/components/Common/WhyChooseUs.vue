<template>
    <div>
      <div class="video-presentation-area ptb-100">
        <div class="container">
          <div class="section-title">
            <h2>Why choose us to watch this video know more</h2>
          </div>
  
          <div class="video-box">
            <img 
              v-if="thumbnailUrl"
              :src="thumbnailUrl" 
              class="main-image" 
              alt="Video Thumbnail"
            />
            
            <!-- Conditionally render the video button if videoUrl is available -->
            <div 
              v-if="videoUrl"
              class="video-btn popup-youtube"
              @click="togglePopup"
              style="cursor: pointer"
            >
              <i class="bx bx-play"></i>
            </div>
  
            <!-- Shapes -->
            <div class="shape1"><img src="../../assets/img/shape/1.png" alt="Shape"></div>
            <div class="shape2"><img src="../../assets/img/shape/2.png" alt="Shape"></div>
            <div class="shape3"><img src="../../assets/img/shape/3.png" alt="Shape"></div>
            <div class="shape4"><img src="../../assets/img/shape/4.png" alt="Shape"></div>
            <div class="shape5"><img src="../../assets/img/shape/5.png" alt="Shape"></div>
            <div class="shape6"><img src="../../assets/img/shape/6.png" alt="Shape"></div>
            <div class="col-12 mt-4 text-center">
              <router-link to="video-list" class="btn btn-primary">
                Manage video
              </router-link>
            </div>
          </div>
          <Funfacts />
  
          <div class="contact-cta-box mwidth-1000">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us.</p>
            <router-link to="/contact" class="default-btn">
              <i class="bx bxs-edit-alt"></i>
              Contact Us
              <span></span>
            </router-link>
          </div>
        </div>
  
        <!-- Other shapes -->
        <div class="shape-map1"><img src="../../assets/img/map1.png" alt="Map"></div>
        <div class="shape7"><img src="../../assets/img/shape/7.png" alt="Shape"></div>
        <div class="shape8"><img src="../../assets/img/shape/8.png" alt="Shape"></div>
        <div class="shape9"><img src="../../assets/img/shape/9.png" alt="Shape"></div>
      </div>
  
      <!-- Popup video -->
      <div v-if="isPopup" class="popup-video">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="popup-overlay-close" @click="togglePopup">
              <div class="popup-overlay-close-line"></div>
              <div class="popup-overlay-close-line"></div>
            </div>
            <div class="play-video">
              <iframe 
                :src="embedVideoUrl"
                frameborder="0"
                allowfullscreen
                sandbox="allow-scripts allow-same-origin allow-presentation"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>
  <script>
  import axios from 'axios';
  import Funfacts from './Funfacts';
  import { BASE_API_URL } from '@/main';
  
  export default {
    name: 'WhyChooseUs',
    components: { Funfacts },
    data() {
      return {
        isPopup: false,
        videoUrl: '',
        embedVideoUrl: '',
        thumbnailUrl: '',
      };
    },
    mounted() {
      this.fetchVideoData();
    },
    methods: {
      async fetchVideoData() {
        const token = localStorage.getItem('token');
        try {
          const response = await axios.get(`${BASE_API_URL}/video`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
  
          if (response.data && response.data.length > 0) {
            const videoData = response.data[0];
            console.log('Video API response:', videoData);
  
            if (videoData && videoData.video_url) {
              this.videoUrl = videoData.video_url;
              const videoId = this.extractVideoId(this.videoUrl);
              console.log('Extracted Video ID:', videoId);
  
              if (videoId) {
                // Use privacy-enhanced YouTube embed URL
                this.embedVideoUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`;
                this.thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  
                // Verify thumbnail availability with fallback
                const img = new Image();
                img.src = this.thumbnailUrl;
                img.onload = () => {
                  this.thumbnailUrl = img.src;
                };
                img.onerror = () => {
                  this.thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`; // Fallback to standard quality
                };
              }
            }
          }
        } catch (error) {
          console.error('Error fetching video data:', error);
        }
      },
      togglePopup() {
        this.isPopup = !this.isPopup;
      },
      extractVideoId(url) {
        if (!url) return '';
        const regex = /(?:youtube\.com.*(?:\?|&)v=|youtu\.be\/)([^&\n?#]+)/;
        const match = url.match(regex);
        return match ? match[1] : '';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional: Add basic styling to ensure popup and iframe look good */
  .popup-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 9999;
  }
  
  .play-video iframe {
    width: 80vw;
    height: 45vw;
    max-width: 1200px;
    max-height: 675px;
  }
  
  .popup-overlay-close {
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  
  .popup-overlay-close-line {
    width: 30px;
    height: 3px;
    background: #fff;
    margin: 5px 0;
  }
  
  .popup-overlay-close-line:first-child {
    transform: rotate(45deg) translate(5px, 5px);
  }
  
  .popup-overlay-close-line:last-child {
    transform: rotate(-45deg) translate(5px, -5px);
  }
  </style>