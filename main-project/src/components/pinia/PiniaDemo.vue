<script setup>
import { ref } from 'vue'
import { useTaskStore } from '../../stores/useTaskStore'

const store = useTaskStore()
const newTaskText = ref('')

function handleAddTask() {
  if (newTaskText.value.trim()) {
    store.addTask(newTaskText.value.trim())
    newTaskText.value = ''
  }
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 12px;">Store Stats</h3>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <div style="background: #2a3a4a; padding: 12px 20px; border-radius: 6px; text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #42b883;">{{ store.totalTasks }}</div>
          <div style="font-size: 12px; color: #a8b2c1; margin-top: 4px;">Total</div>
        </div>
        <div style="background: #2a3a4a; padding: 12px 20px; border-radius: 6px; text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #42b883;">{{ store.pendingTasks.length }}</div>
          <div style="font-size: 12px; color: #a8b2c1; margin-top: 4px;">Pending</div>
        </div>
        <div style="background: #2a3a4a; padding: 12px 20px; border-radius: 6px; text-align: center;">
          <div style="font-size: 24px; font-weight: 700; color: #42b883;">{{ store.completedTasks.length }}</div>
          <div style="font-size: 12px; color: #a8b2c1; margin-top: 4px;">Completed</div>
        </div>
      </div>
    </div>

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 12px;">Add a Task</h3>
      <div style="display: flex; gap: 8px;">
        <input
          v-model="newTaskText"
          type="text"
          placeholder="Enter a new task"
          style="flex: 1;"
          @keyup.enter="handleAddTask"
        />
        <button @click="handleAddTask">Add</button>
      </div>
    </div>

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 12px;">All Tasks</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div
          v-for="task in store.tasks"
          :key="task.id"
          style="background: #2a3a4a; padding: 12px 16px; border-radius: 6px; display: flex; align-items: center; gap: 12px;"
        >
          <input
            type="checkbox"
            :checked="task.completed"
            @change="store.toggleTask(task.id)"
            style="width: 16px; height: 16px; cursor: pointer; background: #35495e; border: 1px solid #42b883;"
          />
          <span
            :style="{
              flex: 1,
              fontSize: '14px',
              textDecoration: task.completed ? 'line-through' : 'none',
              color: task.completed ? '#a8b2c1' : '#ffffff'
            }"
          >
            {{ task.text }}
          </span>
          <button
            @click="store.removeTask(task.id)"
            style="background: #f38ba8; color: #1a2634; padding: 4px 10px; font-size: 12px; margin-right: 0;"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

  </div>
</template>