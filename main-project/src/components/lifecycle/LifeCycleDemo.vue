<script setup>
import ExampleOne from './ExampleOne.vue'
import TimerComponent from './TimerComponent.vue'
import { ref } from 'vue'

const show = ref(true)
</script>

<template>
  <div>
    <h3>Example 1: watching hooks fire</h3>
    <p>Open developer tools console and watch the messages appear</p>
    <ExampleOne />

    <h3>Example 2: timer with cleanup</h3>
    <p>Remove the component and watch onBeforeUnmount and onUnmounted fire in the console</p>
    <button @click="show = !show">
      {{ show ? 'Remove' : 'Add' }} component
    </button>
    <div style="margin-top: 12px;">
      <TimerComponent v-if="show" />
    </div>
  </div>
</template>