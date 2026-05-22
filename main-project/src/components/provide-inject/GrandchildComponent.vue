<script setup>
// TODO: import inject from vue

// TODO: inject 'username' and store it in a variable called username

// TODO: inject 'theme' and store it in a variable called theme
</script>

<template>
  <div style="padding-left: 48px;">
    <div
      :style="{
        background: theme === 'dark' ? '#35495e' : '#a8b2c1',
        color: theme === 'dark' ? '#ffffff' : '#1a2634',
        padding: '16px',
        borderRadius: '6px',
        borderLeft: '3px solid #42b883',
        fontSize: '14px'
      }"
    >
      GrandchildComponent — Hello, <strong style="color: #42b883;">{{ username }}</strong>!
      Current theme: <strong>{{ theme }}</strong>
    </div>
  </div>
</template>