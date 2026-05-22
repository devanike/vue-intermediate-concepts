<script setup>
import {
  onBeforeMount, onMounted,
  onBeforeUpdate, onUpdated,
  onBeforeUnmount, onUnmounted,
  ref
} from 'vue'

const count = ref(0)

onBeforeMount(() => console.log('1. onBeforeMount: preparing, not visible yet'))
onMounted(() => console.log('2. onMounted: now on screen'))
onBeforeUpdate(() => console.log('3. onBeforeUpdate: about to re-render'))
onUpdated(() => console.log('4. onUpdated: re-render done'))
onBeforeUnmount(() => console.log('5. onBeforeUnmount: about to leave'))
onUnmounted(() => console.log('6. onUnmounted: fully gone'))
</script>

<template>
  <div style="display: flex; align-items: center; gap: 16px; margin-top: 8px;">
    <div style="background: #35495e; padding: 12px 16px; border-radius: 6px; font-size: 14px;">
      Count: <strong style="color: #42b883;">{{ count }}</strong>
    </div>
    <button @click="count++">Increase count</button>
  </div>
</template>