<script setup>
import { ref } from 'vue'
// TODO: import provide from vue

import ChildComponent from './ChildComponent.vue'

const username = ref('Oreoluwa')
const theme = ref('dark')

// TODO: provide username with the key 'username'

// TODO: provide theme with the key 'theme'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 8px;">
    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <div style="font-size: 14px; margin-bottom: 12px;">
        ProvideInjectDemo — providing:
        <strong style="color: #42b883;">username</strong> and
        <strong style="color: #42b883;">theme</strong>
      </div>
      <div style="display: flex; gap: 8px;">
        <button @click="theme = theme === 'dark' ? 'light' : 'dark'">
          Toggle theme: currently: {{ theme }}
        </button>
      </div>
    </div>
    <ChildComponent />
  </div>
</template>