<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>

<template>
  <div style="background: #35495e; padding: 16px; border-radius: 6px;">
    <p style="margin-bottom: 12px;">
      This button is deeply nested inside the page layout.
      The modal it opens teleports directly to the body tag.
    </p>

    <button @click="showModal = true">Open Modal</button>

    <Teleport to="body">
      <div
        v-if="showModal"
        style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 1000;"
        @click.self="showModal = false"
      >
        <div style="background: #1a2634; padding: 32px; border-radius: 12px; max-width: 400px; width: 90%; border: 1px solid #42b883;">
          <h3 style="color: #42b883; margin-bottom: 12px;">Modal Title</h3>
          <p style="margin-bottom: 20px;">
            This modal's HTML lives directly inside the body tag, not inside
            the nested component structure. Open developer tools and inspect
            the DOM to see it.
          </p>
          <button @click="showModal = false">Close Modal</button>
        </div>
      </div>
    </Teleport>
  </div>
</template>