<script setup>
import { ref } from 'vue'
// TODO: import defineAsyncComponent from vue

import TabHome from './TabHome.vue'
import TabProfile from './TabProfile.vue'

// TODO: create TabSettings using defineAsyncComponent that lazily imports './TabSettings.vue'

const currentTab = ref('TabHome')

const tabs = {
  TabHome,
  TabProfile,
  // TODO: add TabSettings here
}

const tabLabels = {
  TabHome: 'Home',
  TabProfile: 'Profile',
  TabSettings: 'Settings'
}
</script>

<template>
  <div>
    <div style="display: flex; gap: 8px; margin-bottom: 16px;">
      <button
        v-for="(label, key) in tabLabels"
        :key="key"
        @click="currentTab = key"
        :style="{
          background: currentTab === key ? '#42b883' : '#35495e',
          color: currentTab === key ? '#1a2634' : '#ffffff',
          fontWeight: currentTab === key ? '600' : '400'
        }"
      >
        {{ label }}
      </button>
    </div>
    <div style="background: #35495e; padding: 16px; border-radius: 6px; min-height: 120px;">
      <!-- TODO: add the dynamic component tag here that renders tabs[currentTab] -->
    </div>
  </div>
</template>