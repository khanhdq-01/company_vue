<template>
  <div class="container mt-5">
    <h2>Manager Pricing</h2>
    <router-link to="/pricings/add" class="btn btn-primary mb-3">Add pricing</router-link>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Tab</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pricing in pricings" :key="pricing.id">
          <td>{{ pricing.id }}</td>
          <td>{{ pricing.name }}</td>
          <td>{{ pricing.tabs ? pricing.tabs.map(tab => tab.name).join(', ') : 'Không có tab' }}</td>
          <td>
            <router-link :to="'/pricings/edit/' + pricing.id" class="btn btn-sm btn-warning me-2">Edit</router-link>
            <button @click="deletePricing(pricing.id)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mb-3">
      <router-link to="/pricing" class="btn btn-secondary ms-2">Back Home</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PricingList",
  data() {
    return {
      pricings: [],
    };
  },
  mounted() {
    this.fetchPricings();
  },
  methods: {
    async fetchPricings() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/pricing-plans", {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        });

        // Log raw response for debugging
        console.log("Raw API Response:", response);

        // Handle single object or array response
        const data = response.data;
        if (data) {
          // If response is a single object, wrap it in an array
          this.pricings = Array.isArray(data) ? data : [data];
        } else {
          console.error("Không có dữ liệu gói giá:", data);
          this.pricings = [];
        }

        console.log("Pricings:", this.pricings);
      } catch (error) {
        console.error(
          "Lỗi khi lấy dữ liệu gói giá:",
          error.response?.data,
          error.response?.status,
          error.message
        );
      }
    },
    async deletePricing(id) {
      if (confirm("Bạn có chắc chắn muốn xóa gói giá này không?")) {
        const token = localStorage.getItem("token");
        try {
          await axios.delete(`http://127.0.0.1:8000/api/pricing-plans/${id}`, {
            headers: {
              Authorization: token ? `Bearer ${token}` : undefined,
            },
          });
          this.fetchPricings(); // Refresh the list
        } catch (error) {
          console.error(
            "Lỗi khi xóa gói giá:",
            error.response?.data,
            error.response?.status,
            error.message
          );
        }
      }
    },
  },
};
</script>

<style scoped>
/* Optional: Style improvements for the table */
.table {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.btn-primary,
.btn-warning,
.btn-danger,
.btn-secondary {
  transition: all 0.3s ease;
}
.btn-primary:hover,
.btn-warning:hover,
.btn-danger:hover,
.btn-secondary:hover {
  opacity: 0.9;
}
</style>