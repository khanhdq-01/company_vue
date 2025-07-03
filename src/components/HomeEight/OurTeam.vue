<template>
  <div class="team-area-two pt-100 pb-70">
    <div class="container">
      <div class="section-title text-left">
        <span class="sub-title">Đội ngũ KodingSoft</span>
        <h2>Những người bạn sẽ đồng hành khi gia nhập chúng tôi</h2>
      </div>

      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-6" v-for="member in teamMembers" :key="member.name">
          <div class="single-team-member">
            <div class="image">
              <img :src="member.image" :alt="member.name" />
              <ul class="social-link">
                <li v-for="social in member.socials" :key="social.icon">
                  <a :href="social.link" target="_blank">
                    <i :class="social.icon"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="content">
              <h3>{{ member.name }}</h3>
              <span>{{ member.position }}</span>
              <i class="bx bx-share-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OurTeam",
  data() {
    return {
      teamMembers: [
        {
          name: "Nguyễn Văn Tùng",
          position: "Co-Founder & CEO",
          image: require("../../assets/img/team-image/9.jpg"),
          socials: [
            { icon: "bx bxl-facebook", link: "https://www.facebook.com/profile.php?id=61576332803590" },
            { icon: "bx bxl-twitter", link: "https://twitter.com/" },
            { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/" },
            { icon: "bx bxl-instagram", link: "https://www.instagram.com/" },
          ],
        },
        {
          name: "Phạm Thị Mai",
          position: "Head of Marketing",
          image: require("../../assets/img/team-image/10.jpg"),
          socials: [
            { icon: "bx bxl-facebook", link: "https://www.facebook.com/profile.php?id=61576332803590" },
            { icon: "bx bxl-twitter", link: "https://twitter.com/" },
            { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/" },
            { icon: "bx bxl-instagram", link: "https://www.instagram.com/" },
          ],
        },
        {
          name: "Trần Minh Quân",
          position: "Senior UI/UX Designer",
          image: require("../../assets/img/team-image/11.jpg"),
          socials: [
            { icon: "bx bxl-facebook", link: "https://www.facebook.com/profile.php?id=61576332803590" },
            { icon: "bx bxl-twitter", link: "https://twitter.com/" },
            { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/" },
            { icon: "bx bxl-instagram", link: "https://www.instagram.com/" },
          ],
        },
        {
          name: "Lê Anh Duy",
          position: "Full-stack Developer",
          image: require("../../assets/img/team-image/12.jpg"),
          socials: [
            { icon: "bx bxl-facebook", link: "https://www.facebook.com/profile.php?id=61576332803590" },
            { icon: "bx bxl-twitter", link: "https://twitter.com/" },
            { icon: "bx bxl-linkedin", link: "https://www.linkedin.com/" },
            { icon: "bx bxl-instagram", link: "https://www.instagram.com/" },
          ],
        },
      ],
    };
  },
};
</script>
