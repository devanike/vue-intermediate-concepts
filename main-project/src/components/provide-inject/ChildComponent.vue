<script setup>
import GrandchildComponent from './GrandchildComponent.vue'
</script>

<template>
  <div style="padding-left: 24px; display: flex; flex-direction: column; gap: 8px;">
    <div style="background: #35495e; padding: 16px; border-radius: 6px; border-left: 3px solid #2a3a4a;">
      <span style="font-size: 14px; color: #a8b2c1;">
        ChildComponent: no username or theme here, not needed
      </span>
    </div>
    <GrandchildComponent />
  </div>
</template>