<template>
  <div
    class="pricing-area pt-100 pb-70 bg-f4f5fe"
    v-if="shouldShowPricing"
  >
    <div class="container">
      <div class="section-title">
        <h2>Gói Dịch Vụ</h2>
      </div>

      <!-- Tabs và nội dung -->
      <div class="pricing-list-tab">
        <!-- Tabs Header -->
        <div class="tabs">
          <ul class="tabs__header">
            <li
              class="tabs__header-item"
              v-for="tab in tabs"
              :key="tab.id"
              @click="selectTab(tab.id)"
              :class="{ active: activeTab === tab.id }"
            >
              <i class="bx bxs-calendar-check"></i>
              {{ tab.name }}
            </li>
          </ul>
        </div>

        <!-- Tabs Content -->
        <div class="tabs__container">
          <div class="tabs__list" ref="tabsList">
            <div
              class="tabs__list-tab"
              v-for="tab in tabs"
              :key="tab.id"
              :class="{ active: activeTab === tab.id }"
            >
              <div class="row justify-content-center">
                <div
                  class="col-lg-4 col-md-6"
                  v-for="item in tab.items"
                  :key="item.id"
                >
                  <div class="single-pricing-table left-align">
                    <div class="pricing-header">
                      <h3>{{ item.title }}</h3>
                    </div>

                    <div class="price">
                      <sup></sup>{{ item.price }}<sub>/ {{ item.period }}</sub>
                    </div>

                    <ul class="pricing-features">
                      <li
                        v-for="feature in item.features"
                        :key="feature.id"
                      >
                        <i class="bx bxs-badge-check"></i>
                        {{ feature.feature }}
                      </li>
                    </ul>

                    <div class="btn-box">
                      <router-link to="/contact" class="default-btn">
                        <i class="bx bxs-hot"></i>
                        Dùng thử miễn phí ngay
                        <span></span>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Nút quản lý cho Admin -->
      <div
        class="col-12 mt-4 text-center"
        v-if="isLoggedIn && userRole === 1"
      >
        <router-link to="/pricing-list" class="btn btn-primary">
          Manage pricings
        </router-link>
      </div>
    </div>
  </div>
</template>

  
  <script>
  import axios from "axios";
  import { BASE_API_URL} from "@/main";
  
  export default {
    name: "PricingPlan",
    data() {
      return {
        pricingData: {},
        isLoggedIn: !!localStorage.getItem("token"),
        userRole: parseInt(localStorage.getItem("role_id")) || null,
        activeTab: null,
      };
    },
    computed: {
      tabs() {
        return this.pricingData?.tabs || [];
      },
    },
    mounted() {
      this.fetchPricingData();
    },
    methods: {
      async fetchPricingData() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/pricing-plans`,
            {
              headers: {
                Authorization: token ? `Bearer ${token}` : undefined,
              },
            }
          );

          // Extract data
          const data = response.data;
  
          // Check for various response structures
          let pricingData = data;
          if (data.data && data.data.tabs) {
            pricingData = data.data;
          } else if (Array.isArray(data) && data.length > 0 && data[0].tabs) {
            pricingData = data[0];
          }
  
          // Validate data
          if (pricingData && pricingData.tabs?.length > 0) {
            this.pricingData = pricingData;
            this.activeTab = pricingData.tabs[0].id;
          }
        } catch (error) {
          console.error(
            "Lỗi khi lấy dữ liệu định giá:",
            error.response?.data,
            error.response?.status,
            error.message
          );
        }
      },
      selectTab(id) {
        this.activeTab = id;
      },
    },
    computed: {
      tabs() {
        return this.pricingData?.tabs || [];
      },
      shouldShowPricing() {
        return this.tabs.length > 0 || this.userRole === 1;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Ensure only the active tab is visible */
  .tabs__list-tab {
    display: none;
  }
  .tabs__list-tab.active {
    display: block;
  }

.pricing-features {
  flex-grow: 1;
  padding: 0;
  margin: 0 0 20px 0;
  list-style: none;
}
</style>