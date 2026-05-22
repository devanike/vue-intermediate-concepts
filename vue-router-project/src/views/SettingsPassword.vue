<script setup>
import { ref } from 'vue'

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')
</script>

<template>
  <div>
    <h3>Password Settings</h3>
    <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 8px;">
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <label style="font-size: 12px; color: #a8b2c1;">Current Password</label>
        <input v-model="currentPassword" type="password" placeholder="Enter current password" style="width: 250px;" />
      </div>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <label style="font-size: 12px; color: #a8b2c1;">New Password</label>
        <input v-model="newPassword" type="password" placeholder="Enter new password" style="width: 250px;" />
      </div>
      <div style="display: flex; flex-direction: column; gap: 4px;">
        <label style="font-size: 12px; color: #a8b2c1;">Confirm Password</label>
        <input v-model="confirmPassword" type="password" placeholder="Confirm new password" style="width: 250px;" />
      </div>
      <button style="width: fit-content;">Update Password</button>
    </div>
  </div>
</template>