import { ref, onMounted, onUnmounted } from 'vue'

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

  onMounted(() => {
    startTimer()
    console.log('useTimer: timer started')
  })

  onUnmounted(() => {
    pauseTimer()
    console.log('useTimer: timer cleaned up')
  })

  return { seconds, isRunning, startTimer, pauseTimer, resetTimer }
}