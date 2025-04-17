<template>
    <div class="container mt-5">
      <h2>Management Member</h2>
      <router-link to="/members/add" class="btn btn-primary mb-3">Add New Member</router-link>
      
      <table class="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Name</th>
            <th>Position</th>
            <th>Desctiption</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.id">
            <td>{{ member.id }}</td>
            <td><img :src="url + member.image_path" class="img-thumbnail" style="max-width: 100px;"></td>
            <td>{{ member.name }}</td>
            <td>{{ member.position }}</td>
            <td>{{ member.description }}</td>
            <td>
              <router-link :to="'/members/edit/' + member.id" class="btn btn-sm btn-warning me-2">Edit</router-link>
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
  
  export default {
    name: "memberList",
    data() {
      return {
        members: [],
        url: 'http://localhost/company_2025/company_api/storage/app/public/members/',
      };
    },
    mounted() {
      this.fetchMembers();
    },
    methods: {
      async fetchMembers() {
        const token = localStorage.getItem("token");
        try {
          const response = await axios.get("http://127.0.0.1:8000/api/member", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          this.members = response.data.data;
        } catch (error) {
          console.error("Error fetching members:", error);
        }
      },
      async deleteMember(id) {
        if (confirm("Are you sure you want to delete this member?")) {
          const token = localStorage.getItem("token");
          try {
            await axios.delete(`http://127.0.0.1:8000/api/member/${id}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            this.fetchMembers(); // Refresh the list
          } catch (error) {
            console.error("Error deleting member:", error);
          }
        }
      }
    }
  };
  </script>