<script setup>
import { ref } from 'vue'
import CapitalizeInput from './CapitalizeInput.vue'

const form = ref({
  name: '',
  email: '',
  age: null,
  message: ''
})

const errors = ref({})
const submitted = ref(false)
const capitalizedText = ref('')

function validate() {
  errors.value = {}

  if (!form.value.name.trim()) {
    errors.value.name = 'Name is required'
  }

  if (!form.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!form.value.email.includes('@')) {
    errors.value.email = 'Email must be valid'
  }

  if (!form.value.age) {
    errors.value.age = 'Age is required'
  } else if (form.value.age < 18) {
    errors.value.age = 'You must be at least 18'
  }

  if (!form.value.message.trim()) {
    errors.value.message = 'Message is required'
  }

  return Object.keys(errors.value).length === 0
}

function handleSubmit() {
  if (validate()) {
    submitted.value = true
    console.log('form submitted:', form.value)
  }
}

function resetForm() {
  form.value = { name: '', email: '', age: null, message: '' }
  errors.value = {}
  submitted.value = false
  capitalizedText.value = ''
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 24px;">

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 16px;">Example 1: Form with v-model and validation</h3>

      <div
        v-if="submitted"
        style="background: #42b883; color: #1a2634; padding: 12px; border-radius: 6px; margin-bottom: 16px; font-size: 14px;"
      >
        Form submitted successfully! Check the console for the data.
      </div>

      <div style="display: flex; flex-direction: column; gap: 12px;">

        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 12px; color: #a8b2c1;">Name</label>
          <input v-model.trim="form.name" type="text" placeholder="Enter your name" style="width: 300px;" />
          <span v-if="errors.name" style="font-size: 12px; color: #f38ba8;">{{ errors.name }}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 12px; color: #a8b2c1;">Email</label>
          <input v-model.trim="form.email" type="email" placeholder="Enter your email" style="width: 300px;" />
          <span v-if="errors.email" style="font-size: 12px; color: #f38ba8;">{{ errors.email }}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 12px; color: #a8b2c1;">Age</label>
          <input v-model.number="form.age" type="number" placeholder="Enter your age" style="width: 300px;" />
          <span v-if="errors.age" style="font-size: 12px; color: #f38ba8;">{{ errors.age }}</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px;">
          <label style="font-size: 12px; color: #a8b2c1;">Message</label>
          <textarea
            v-model.lazy="form.message"
            placeholder="Enter your message"
            style="width: 300px; height: 80px; background: #35495e; border: 1px solid #42b883; color: #ffffff; padding: 8px 12px; border-radius: 6px; font-size: 14px; outline: none; resize: none;"
          />
          <span v-if="errors.message" style="font-size: 12px; color: #f38ba8;">{{ errors.message }}</span>
        </div>

        <div style="display: flex; gap: 8px;">
          <button @click="handleSubmit">Submit</button>
          <button @click="resetForm">Reset</button>
        </div>

      </div>
    </div>

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <h3 style="margin-bottom: 16px;">Example 2: Custom v-model modifier</h3>
      <p style="margin-bottom: 12px;">
        The .capitalize modifier capitalizes the first letter automatically.
        This only works on custom components, not native inputs.
      </p>
      <CapitalizeInput v-model.capitalize="capitalizedText" />
      <p style="margin-top: 12px; font-size: 14px;">
        Value: <strong style="color: #42b883;">{{ capitalizedText }}</strong>
      </p>
    </div>

  </div>
</template>