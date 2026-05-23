<script setup>
import { ref } from 'vue'
// TODO: import useTaskStore from the stores folder

// TODO: call useTaskStore and store the result in a variable called store

const newTaskText = ref('')

function handleAddTask() {
  if (newTaskText.value.trim()) {
    // TODO: call store.addTask with newTaskText.value.trim()
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
          <!-- TODO: display store.totalTasks here -->
          <div style="font-size: 24px; font-weight: 700; color: #42b883;"></div>
          <div style="font-size: 12px; color: #a8b2c1; margin-top: 4px;">Total</div>
        </div>
        <div style="background: #2a3a4a; padding: 12px 20px; border-radius: 6px; text-align: center;">
          <!-- TODO: display store.pendingTasks.length here -->
          <div style="font-size: 24px; font-weight: 700; color: #42b883;"></div>
          <div style="font-size: 12px; color: #a8b2c1; margin-top: 4px;">Pending</div>
        </div>
        <div style="background: #2a3a4a; padding: 12px 20px; border-radius: 6px; text-align: center;">
          <!-- TODO: display store.completedTasks.length here -->
          <div style="font-size: 24px; font-weight: 700; color: #42b883;"></div>
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
        <!-- TODO: loop through store.tasks with v-for -->
        <div
          style="background: #2a3a4a; padding: 12px 16px; border-radius: 6px; display: flex; align-items: center; gap: 12px;"
        >
          <!-- TODO: add a checkbox that calls store.toggleTask when changed -->
          <input
            type="checkbox"
            style="width: 16px; height: 16px; cursor: pointer;"
          />
          <!-- TODO: add line-through style when task is completed -->
          <span style="flex: 1; font-size: 14px;">
            <!-- TODO: display task.text here -->
          </span>
          <!-- TODO: add a remove button that calls store.removeTask -->
          <button
            style="background: #f38ba8; color: #1a2634; padding: 4px 10px; font-size: 12px; margin-right: 0;"
          >
            Remove
          </button>
        </div>
      </div>
    </div>

  </div>
</template>