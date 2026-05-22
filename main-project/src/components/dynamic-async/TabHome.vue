<script setup>
import { ref } from 'vue'

const announcements = ref([
  'Vue 3.4 released with major performance improvements',
  'Pinia is now the official Vue state management solution',
  'Vite is the recommended build tool for Vue projects'
])
</script>

<template>
  <div>
    <h3 style="color: #42b883; margin-bottom: 12px;">Latest Announcements</h3>
    <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
      <li
        v-for="announcement in announcements"
        :key="announcement"
        style="background: #2a3a4a; padding: 12px; border-radius: 6px; font-size: 14px;"
      >
        {{ announcement }}
      </li>
    </ul>
  </div>
</template>