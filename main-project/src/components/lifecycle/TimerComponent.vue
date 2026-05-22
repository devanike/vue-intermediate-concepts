<script setup>
import { onMounted, onBeforeUnmount, onUnmounted, ref } from 'vue'

const seconds = ref(0)
let timer = null

function startTimer() {
  timer = setInterval(() => seconds.value++, 1000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

onMounted(() => {
  startTimer()
  console.log('2. onMounted: component on screen, timer started')
})

onBeforeUnmount(() => {
  console.log('5. onBeforeUnmount: component about to leave')
})

onUnmounted(() => {
  stopTimer()
  console.log('6. onUnmounted: component gone, timer cleaned up')
})
</script>

<template>
  <div style="background: #35495e; padding: 16px; border-radius: 6px; display: inline-flex; flex-direction: column; gap: 12px;">
    <div style="font-size: 14px;">
      Seconds on screen: <strong style="color: #42b883;">{{ seconds }}</strong>
    </div>
    <div style="font-size: 12px; color: #a8b2c1;">
      Remove this component using the button above to see onBeforeUnmount and onUnmounted fire
    </div>
  </div>
</template>