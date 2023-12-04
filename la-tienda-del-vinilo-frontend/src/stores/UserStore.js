// Import necessary libraries
import { defineStore } from 'pinia';
import axios from 'axios';

// Define your Pinia store
export const useUserStore = defineStore('UserStore', {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    async updateUser(user) {
      try {
        await axios.put(`http://localhost:5000/api/users/${user.id}`, user);
        const index = this.users.findIndex((u) => u.id === user.id);
        if (index !== -1) {
          this.users[index] = user;
        }
      } catch (error) {
        console.error('Error updating user:', error);
      }
    },
    async fetchUser(rut) {
      try {
        const response = await axios.get(`http://localhost:5000/api/users/user/${rut}`);
        console.log(response.data);
        this.user = response.data;
        return {
          name: this.user.name,
          lastname: this.user.lastname,
          email: this.user.email,
          username: this.user.username
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    },
  },
});
