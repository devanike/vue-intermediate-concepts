import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, text: 'Learn Vue 3', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Share with the world', completed: true }
  ])

  const completedTasks = computed(() =>
    tasks.value.filter(task => task.completed)
  )

  const pendingTasks = computed(() =>
    tasks.value.filter(task => !task.completed)
  )

  const totalTasks = computed(() => tasks.value.length)

  function addTask(text) {
    tasks.value.push({
      id: Date.now(),
      text,
      completed: false
    })
  }

  function toggleTask(id) {
    const task = tasks.value.find(task => task.id === id)
    if (task) task.completed = !task.completed
  }

  function removeTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
  }

  return {
    tasks,
    completedTasks,
    pendingTasks,
    totalTasks,
    addTask,
    toggleTask,
    removeTask
  }
})