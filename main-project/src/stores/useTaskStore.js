import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref([
    { id: 1, text: 'Learn Vue 3', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Share with the world', completed: true }
  ])

  // TODO: create a computed called completedTasks that filters tasks where completed is true

  // TODO: create a computed called pendingTasks that filters tasks where completed is false

  // TODO: create a computed called totalTasks that returns the total number of tasks

  // TODO: create an action called addTask that takes text and pushes a new task to tasks
  // each task should have id: Date.now(), text and completed: false

  // TODO: create an action called toggleTask that takes id
  // find the task with that id and flip its completed value

  // TODO: create an action called removeTask that takes id
  // filter out the task with that id from tasks

  // TODO: return tasks, completedTasks, pendingTasks, totalTasks, addTask, toggleTask and removeTask
})