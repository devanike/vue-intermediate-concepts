<script setup>
import { ref } from 'vue'

const user = ref({
  name: 'Oreoluwa',
  role: 'Student',
  location: 'Lagos, Nigeria',
  joined: 'January 2026'
})
</script>

<template>
  <div>
    <h3 style="color: #42b883; margin-bottom: 12px;">User Profile</h3>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div
        v-for="(value, key) in user"
        :key="key"
        style="display: flex; gap: 16px; background: #2a3a4a; padding: 12px; border-radius: 6px; font-size: 14px;"
      >
        <span style="color: #a8b2c1; text-transform: capitalize; width: 80px;">{{ key }}</span>
        <span>{{ value }}</span>
      </div>
    </div>
  </div>
</template>