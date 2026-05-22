<script setup>
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <h1 style="color: #42b883; margin-bottom: 8px;">Vue Router Demo</h1>
    <p style="margin-bottom: 24px;">Click the links below to navigate between routes</p>

    <nav style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
      <router-link to="/">Home</router-link>
      <router-link to="/user/123">User 123</router-link>
      <router-link to="/user/456">User 456</router-link>
      <router-link to="/dashboard">Dashboard (protected)</router-link>
      <router-link to="/settings/profile">Settings - Profile</router-link>
      <router-link to="/settings/password">Settings - Password</router-link>
    </nav>

    <div style="background: #35495e; padding: 24px; border-radius: 8px; min-height: 150px;">
      <router-view />
    </div>
  </div>
</template>