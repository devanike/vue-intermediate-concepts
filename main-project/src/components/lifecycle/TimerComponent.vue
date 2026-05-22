<script setup>
import { ref } from 'vue'
// TODO: import the lifecycle hooks you need from vue

const seconds = ref(0)
let timer = null

function startTimer() {
  timer = setInterval(() => seconds.value++, 1000)
}

function stopTimer() {
  clearInterval(timer)
  timer = null
}

// TODO: add onMounted: call startTimer() and log 'onMounted: component on screen, timer started'

// TODO: add onBeforeUnmount: log 'onBeforeUnmount: component about to leave'

// TODO: add onUnmounted: call stopTimer() and log 'onUnmounted: component gone, timer cleaned up'
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