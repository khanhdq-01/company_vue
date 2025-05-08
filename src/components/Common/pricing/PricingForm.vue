<template>
  <div class="container mt-5">
    <h2 v-if="isEdit">Edit Price Plan</h2>
    <h2 v-else>Add New Pricing</h2>

    <form @submit.prevent="submitForm">
      <!-- Pricing Plan Name -->
      <div class="mb-3">
        <label for="name" class="form-label">Price Package Name</label>
        <input
          type="text"
          class="form-control"
          v-model="formData.name"
          id="name"
          required
        />
      </div>

      <!-- Tabs Management -->
      <div class="mb-3">
        <label class="form-label">Tabs</label>
        <div v-for="(tab, tabIndex) in formData.tabs" :key="tabIndex" class="border p-3 mb-3">
          <div class="mb-2">
            <label :for="'tab-name-' + tabIndex" class="form-label">Name Tab</label>
            <input
              type="text"
              class="form-control"
              v-model="tab.name"
              :id="'tab-name-' + tabIndex"
              required
            />
          </div>

          <!-- Items Management -->
          <div class="ms-3">
            <label class="form-label">Items</label>
            <div v-for="(item, itemIndex) in tab.items" :key="itemIndex" class="border p-2 mb-2">
              <div class="row">
                <div class="col-md-4 mb-2">
                  <label :for="'item-title-' + tabIndex + '-' + itemIndex" class="form-label">Ttitle</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.title"
                    :id="'item-title-' + tabIndex + '-' + itemIndex"
                    required
                  />
                </div>
                <div class="col-md-4 mb-2">
                  <label :for="'item-price-' + tabIndex + '-' + itemIndex" class="form-label">Pricing</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.price"
                    :id="'item-price-' + tabIndex + '-' + itemIndex"
                    required
                  />
                </div>
                <div class="col-md-4 mb-2">
                  <label :for="'item-period-' + tabIndex + '-' + itemIndex" class="form-label">Kỳ Hạn</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="item.period"
                    :id="'item-period-' + tabIndex + '-' + itemIndex"
                    required
                  />
                </div>
              </div>

              <!-- Features Management -->
              <div class="ms-3">
                <label class="form-label">Features</label>
                <div v-for="(feature, featureIndex) in item.features" :key="featureIndex" class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    v-model="feature.feature"
                    :id="'feature-' + tabIndex + '-' + itemIndex + '-' + featureIndex"
                    placeholder="Tính năng"
                    required
                  />
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="removeFeature(tabIndex, itemIndex, featureIndex)"
                  >
                    Delete
                  </button>
                </div>
                <button
                  type="button"
                  class="btn btn-sm btn-success mb-2"
                  @click="addFeature(tabIndex, itemIndex)"
                >
                  Add Features
                </button>
              </div>

              <button
                type="button"
                class="btn btn-sm btn-danger mt-2"
                @click="removeItem(tabIndex, itemIndex)"
              >
                Delete Item
              </button>
            </div>
            <button
              type="button"
              class="btn btn-sm btn-success mb-2"
              @click="addItem(tabIndex)"
            >
              Add Item
            </button>
          </div>

          <button
            type="button"
            class="btn btn-sm btn-danger mt-2"
            @click="removeTab(tabIndex)"
          >
           Delete Tab
          </button>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-success mb-3"
        @click="addTab"
      >
        Add Tab 
      </button>

      <!-- Form Actions -->
      <div class="mb-3">
        <button type="submit" class="btn btn-primary">
          {{ isEdit ? "Cập Nhật" : "Lưu" }}
        </button>
        <router-link to="/pricing-list" class="btn btn-secondary ms-2">Cancle</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PricingForm",
  props: {
    isEdit: {
      type: Boolean,
      default: false,
    },
    pricingId: {
      type: [String, Number],
      default: null,
    },
  },
  data() {
    return {
      formData: {
        name: "",
        tabs: [],
      },
    };
  },
  mounted() {
    if (this.isEdit) {
      this.fetchPricing();
    }
  },
  methods: {
    async fetchPricing() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/pricing-plans/${this.pricingId}`,
          {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          }
        );

        console.log("Raw API Response:", response);
        console.log("Dữ liệu gói giá:", response.data);

        // Handle both direct and nested responses
        const data = response.data.data || response.data;
        if (data && data.name) {
          this.formData.name = data.name;
          this.formData.tabs = data.tabs
            ? data.tabs.map((tab) => ({
                id: tab.id,
                name: tab.name,
                items: tab.items.map((item) => ({
                  id: item.id,
                  title: item.title,
                  price: item.price,
                  period: item.period,
                  features: item.features.map((feature) => ({
                    id: feature.id,
                    feature: feature.feature,
                  })),
                })),
              }))
            : [];
        } else {
          console.error("Không có dữ liệu gói giá phù hợp:", data);
          alert("Không thể tải dữ liệu gói giá. Vui lòng thử lại.");
        }
      } catch (error) {
        console.error(
          "Lỗi khi lấy dữ liệu gói giá:",
          error.response?.data,
          error.response?.status,
          error.message
        );
        alert("Lỗi khi tải dữ liệu gói giá. Vui lòng kiểm tra console để biết chi tiết.");
      }
    },
    addTab() {
      this.formData.tabs.push({
        name: "",
        items: [],
      });
    },
    removeTab(tabIndex) {
      this.formData.tabs.splice(tabIndex, 1);
    },
    addItem(tabIndex) {
      this.formData.tabs[tabIndex].items.push({
        title: "",
        price: "",
        period: "",
        features: [],
      });
    },
    removeItem(tabIndex, itemIndex) {
      this.formData.tabs[tabIndex].items.splice(itemIndex, 1);
    },
    addFeature(tabIndex, itemIndex) {
      this.formData.tabs[tabIndex].items[itemIndex].features.push({
        feature: "",
      });
    },
    removeFeature(tabIndex, itemIndex, featureIndex) {
      this.formData.tabs[tabIndex].items[itemIndex].features.splice(featureIndex, 1);
    },
    async submitForm() {
      const token = localStorage.getItem("token");
      try {
        // Log payload for debugging
        console.log("Submitting payload:", JSON.stringify(this.formData, null, 2));

        // Basic frontend validation
        if (!this.formData.name) {
          alert("Vui lòng nhập Tên Gói Giá.");
          return;
        }
        for (let tab of this.formData.tabs) {
          if (!tab.name) {
            alert("Vui lòng nhập Tên Tab.");
            return;
          }
          for (let item of tab.items) {
            if (!item.title || !item.price || !item.period) {
              alert("Vui lòng nhập đầy đủ Tiêu Đề, Giá, và Kỳ Hạn cho Mục.");
              return;
            }
            for (let feature of item.features) {
              if (!feature.feature) {
                alert("Vui lòng nhập Tính Năng.");
                return;
              }
            }
          }
        }

        if (this.isEdit) {
          await axios.put(
            `http://127.0.0.1:8000/api/pricing-plans/${this.pricingId}`,
            this.formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        } else {
          await axios.post(
            "http://127.0.0.1:8000/api/pricing-plans",
            this.formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            }
          );
        }
        this.$router.push("/pricing-list");
      } catch (error) {
        console.error(
          "Lỗi khi lưu gói giá:",
          error.response?.data,
          error.response?.status,
          error.message
        );
        alert(
          "Đã xảy ra lỗi khi lưu gói giá: " +
            (error.response?.data?.message || error.message) +
            ". Vui lòng kiểm tra console để biết chi tiết."
        );
      }
    },
  },
};
</script>

<style scoped>
.form-control,
.btn {
  border-radius: 5px;
}
.btn-primary,
.btn-secondary,
.btn-success,
.btn-danger {
  transition: all 0.3s ease;
}
.btn-primary:hover,
.btn-secondary:hover,
.btn-success:hover,
.btn-danger:hover {
  opacity: 0.9;
}
.border {
  border: 1px solid #dee2e6;
  border-radius: 5px;
}
</style>