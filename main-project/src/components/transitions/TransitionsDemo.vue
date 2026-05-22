<script setup>
import { ref } from 'vue'

const showBox = ref(true)

const items = ref([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Build a project' },
  { id: 3, text: 'Share with the world' }
])

let nextId = 4

function addItem() {
  items.value.push({
    id: nextId++,
    text: `New item ${nextId - 1}`
  })
}

function removeItem(id) {
  items.value = items.value.filter(item => item.id !== id)
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 12px;">Example 1: Transition - single element</h3>
      <p style="margin-bottom: 12px;">Toggle the box to see it fade in and out</p>

      <button @click="showBox = !showBox" style="margin-bottom: 16px;">
        {{ showBox ? 'Hide' : 'Show' }} box
      </button>

      <Transition name="fade">
        <div
          v-if="showBox"
          style="background: #42b883; color: #1a2634; padding: 16px; border-radius: 6px; font-weight: 600;"
        >
          I fade in and out smoothly
        </div>
      </Transition>
    </div>

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 12px;">Example 2: TransitionGroup - list of items</h3>
      <p style="margin-bottom: 12px;">Add and remove items to see them animate individually</p>

      <button @click="addItem" style="margin-bottom: 16px;">Add item</button>

      <TransitionGroup name="list" tag="div" style="display: flex; flex-direction: column; gap: 8px;">
        <div
          v-for="item in items"
          :key="item.id"
          style="background: #2a3a4a; padding: 12px 16px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 14px;"
        >
          {{ item.text }}
          <button
            @click="removeItem(item.id)"
            style="background: #f38ba8; color: #1a2634; padding: 4px 10px; font-size: 12px; margin-right: 0;"
          >
            Remove
          </button>
        </div>
      </TransitionGroup>
    </div>

  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}

.list-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>