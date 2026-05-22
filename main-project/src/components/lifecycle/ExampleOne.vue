<script setup>
import { ref } from 'vue'
// TODO: import the lifecycle hooks you need from vue

const count = ref(0)

// TODO: add onBeforeMount: log '1. onBeforeMount: preparing, not visible yet'

// TODO: add onMounted: log '2. onMounted: now on screen'

// TODO: add onBeforeUpdate: log '3. onBeforeUpdate: about to re-render'

// TODO: add onUpdated: log '4. onUpdated: re-render done'

// TODO: add onBeforeUnmount: log '5. onBeforeUnmount: about to leave'

// TODO: add onUnmounted: log '6. onUnmounted: fully gone'
</script>

<template>
  <div style="display: flex; align-items: center; gap: 16px; margin-top: 8px;">
    <div style="background: #35495e; padding: 12px 16px; border-radius: 6px; font-size: 14px;">
      Count: <strong style="color: #42b883;">{{ count }}</strong>
    </div>
    <button @click="count++">Increase count</button>
  </div>
</template>