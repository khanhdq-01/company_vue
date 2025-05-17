<template>
    <div class="container mt-5">
      <h2>Member Management</h2>
      <router-link to="/member-other/add" class="btn btn-primary mb-3">Add New Member Other</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in memberOthers" :key="member.id">
          <td>{{ member.id }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.position }}</td>
          <td>
            <img :src="url + member.image_path" class="img-thumbnail" style="max-width: 100px;" v-if="member.image_path">
          </td>
          <td>
            <router-link :to="'/member-other/edit/' + member.id" class="btn btn-sm btn-warning me-2">Edit</router-link>
            <button @click="deleteMember(member.id)" class="btn btn-sm btn-danger">Delete</button>
          </td>
        </tr>
        </tbody>
      </table>
      <div class="mb-3">
          <router-link to="/" class="btn btn-secondary ms-2">Back Home</router-link>
        </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { BASE_API_URL, BASE_IMAGE_URL } from "@/main";
  
  export default {
    name: "memberOtherList",
    data() {
      return {
        memberOthers: [],
        url: BASE_IMAGE_URL + 'member_others/',
      };
    },
    mounted() {
      this.fetchmemberOther();
    },
    methods: {
      async fetchmemberOther() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get(`${BASE_API_URL}/member_other`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.memberOthers = response.data.data;
        } catch (error) {
          console.error("Error fetching member-other:", error);
        }
      },
      async deleteMember(id) {
        if (confirm("Are you sure you want to delete this member?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`${BASE_API_URL}/member_other/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchmemberOther(); // Refresh the list
          } catch (error) {
            console.error("Error deleting member:", error);
          }
        }
      }
    }
  };
  </script>