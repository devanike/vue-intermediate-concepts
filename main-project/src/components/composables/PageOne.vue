<script setup>
import { useTimer } from '../../composables/useTimer'

const { seconds, isRunning, startTimer, pauseTimer, resetTimer } = useTimer()
</script>

<template>
  <div style="background: #35495e; padding: 16px; border-radius: 6px; display: flex; flex-direction: column; gap: 12px;">
    <div style="font-size: 14px;">
      Page One: seconds on screen: <strong style="color: #42b883;">{{ seconds }}</strong>
    </div>
    <div style="display: flex; gap: 8px;">
      <button @click="isRunning ? pauseTimer() : startTimer()">
        {{ isRunning ? 'Pause' : 'Resume' }}
      </button>
      <button @click="resetTimer()">Reset</button>
    </div>
  </div>
</template>