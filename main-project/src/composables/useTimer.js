import { ref } from 'vue'
// TODO: import the lifecycle hooks you need from vue

export function useTimer() {
  const seconds = ref(0)
  const isRunning = ref(true)
  let timer = null

  function startTimer() {
    if (!timer) {
      timer = setInterval(() => seconds.value++, 1000)
      isRunning.value = true
    }
  }

  function pauseTimer() {
    clearInterval(timer)
    timer = null
    isRunning.value = false
  }

  function resetTimer() {
    pauseTimer()
    seconds.value = 0
  }

  // TODO: add onMounted: call startTimer() and log 'useTimer: timer started'

  // TODO: add onUnmounted: call pauseTimer() and log 'useTimer: timer cleaned up'

  // TODO: return seconds, isRunning, startTimer, pauseTimer and resetTimer
}