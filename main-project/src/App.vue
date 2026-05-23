<script setup>
import LifecycleDemo from './components/lifecycle/LifecycleDemo.vue'
import ComposablesDemo from './components/composables/ComposablesDemo.vue'
import ProvideInjectDemo from './components/provide-inject/ProvideInjectDemo.vue'
import TemplateRefsDemo from './components/template-refs/TemplateRefsDemo.vue'
import DynamicAsyncDemo from './components/dynamic-async/DynamicAsyncDemo.vue'
import FormHandlingDemo from './components/form-handling/FormHandlingDemo.vue'
import TeleportDemo from './components/teleport/TeleportDemo.vue'
import TransitionsDemo from './components/transitions/TransitionsDemo.vue'
import PiniaDemo from './components/pinia/PiniaDemo.vue'
</script>

<template>
  <div style="max-width: 800px; margin: 0 auto;">
    <h1 style="color: #42b883; margin-bottom: 8px;">Vue Intermediate Concepts Demo</h1>
    <p>A walkthrough of key Vue 3 concepts</p>

    <h2>Lifecycle Hooks</h2>
    <LifecycleDemo />

    <h2>Composables</h2>
    <ComposablesDemo />

    <h2>Provide / Inject</h2>
    <ProvideInjectDemo />

    <h2>Template Refs</h2>
    <TemplateRefsDemo />

    <h2>Dynamic and Async Components</h2>
    <DynamicAsyncDemo />

    <h2>Form Handling and Custom v-model Modifiers</h2>
    <FormHandlingDemo />

    <h2>Teleport</h2>
    <TeleportDemo />

    <h2>Transitions and TransitionGroup</h2>
    <TransitionsDemo />

    <h2>Pinia</h2>
    <PiniaDemo />
  </div>
</template>