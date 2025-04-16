<template>
  <div
    :class="[
      'navbar-area navbar-area-with-position-relative',
      { 'is-sticky': isSticky },
    ]"
  >
    <div class="striki-nav">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg navbar-light">
          <router-link class="navbar-brand" to="/home-seven">
            <img src="../../assets/img/logo.png" alt="logo" />
          </router-link>

          <div
            class="navbar-toggler"
            @click="active = !active"
            :aria-pressed="active ? 'true' : 'false'"
            v-bind:class="{ active: button_active_state }"
            v-on:click="button_active_state = !button_active_state"
          >
            <span class="icon-bar top-bar"></span>
            <span class="icon-bar middle-bar"></span>
            <span class="icon-bar bottom-bar"></span>
          </div>

          <div
            class="collapse navbar-collapse"
            :class="{ show: active }"
            is-nav
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home <i class="bx bx-chevron-down"></i>
                </a>

                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link" exact>
                      Home One (IT Startup)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-two" class="nav-link">
                      Home Two (IT Startup)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-three" class="nav-link">
                      Home Three (IT Startup)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-four" class="nav-link">
                      Home Four (SaaS Startup)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-five" class="nav-link">
                      Home Five (Chatbot)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-six" class="nav-link">
                      Home Six (Chatbot)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-seven" class="nav-link">
                      Home Seven (Chatbot)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-eight" class="nav-link">
                      Home Eight (Digital Marketing)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-nine" class="nav-link">
                      Home Nine (SEO Marketing)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-ten" class="nav-link">
                      Home Ten (IT Solution)
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-eleven" class="nav-link">
                      Home Eleven (Marketing Experts)
                    </router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>

              <li class="nav-item">
                <router-link to="/pricing" class="nav-link"
                  >Pricing</router-link
                >
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pages <i class="bx bx-chevron-down"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Services
                      <i class="bx bx-chevron-down"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/services-one" class="nav-link"
                          >Services Style One</router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link to="/services-two" class="nav-link"
                          >Services Style Two</router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link to="/services-three" class="nav-link"
                          >Services Style Three</router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link to="/single-service" class="nav-link"
                          >Service Details</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link"
                      >Features <i class="bx bx-chevron-down"></i
                    ></a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/features-one" class="nav-link"
                          >Features Style One</router-link
                        >
                      </li>

                      <li class="nav-item">
                        <router-link to="/features-two" class="nav-link"
                          >Features Style Two</router-link
                        >
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">Team</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/log-in" class="nav-link"
                      >Log In</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link to="/sign-up" class="nav-link"
                      >Sign Up</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link">FAQ</router-link>
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <a href="#" class="nav-link"
                  >Blog <i class="bx bx-chevron-down"></i
                ></a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/blog-one" class="nav-link"
                      >Blog Grid</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link to="/blog-two" class="nav-link"
                      >Blog Right Sidebar</router-link
                    >
                  </li>

                  <li class="nav-item">
                    <router-link to="/single-blog" class="nav-link"
                      >Blog Details</router-link
                    >
                  </li>
                </ul>
              </li>

              <li class="nav-item">
                <router-link to="/contact" class="nav-link"
                  >Contact</router-link
                >
              </li>
            </ul>

            <div class="others-options">
              <router-link to="/contact" class="default-btn">
                <i class="bx bxs-hot"></i>Get Started<span></span>
              </router-link>
              <router-link to="/log-in" class="default-btn black-btn">
                <i class="bx bx-log-in"></i>Log In<span></span>
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarStyleThree",
  data() {
    return {
      isSticky: false,
      active: false,
      button_active_state: false,
    };
  },

  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>