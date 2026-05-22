<script setup>
import { ref } from 'vue'

const settings = ref({
  notifications: true,
  darkMode: true,
  autoSave: false
})
</script>

<template>
  <div>
    <h3 style="color: #42b883; margin-bottom: 12px;">App Settings</h3>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div
        v-for="(value, key) in settings"
        :key="key"
        style="display: flex; justify-content: space-between; align-items: center; background: #2a3a4a; padding: 12px; border-radius: 6px;"
      >
        <span style="font-size: 14px; text-transform: capitalize;">{{ key }}</span>
        <button
          @click="settings[key] = !settings[key]"
          :style="{
            background: value ? '#42b883' : '#35495e',
            color: value ? '#1a2634' : '#ffffff',
            padding: '4px 12px',
            fontSize: '12px',
            marginRight: '0'
          }"
        >
          {{ value ? 'On' : 'Off' }}
        </button>
      </div>
    </div>
  </div>
</template>