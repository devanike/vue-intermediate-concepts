<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div>
    <h2>User Profile</h2>
    <div style="background: #2a3a4a; padding: 16px; border-radius: 6px; margin-top: 12px;">
      <p style="color: #ffffff;">
        Viewing profile for User ID:
        <strong style="color: #42b883; font-size: 20px;">{{ route.params.id }}</strong>
      </p>
      <p style="margin-top: 8px;">
        This same route handles any user ID: /user/123, /user/456, /user/anything.
        The :id in the route path is what makes it dynamic.
      </p>
    </div>
  </div>
</template>