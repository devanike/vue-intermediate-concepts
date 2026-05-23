<script setup>
const props = defineProps({
  modelValue: String,
  modelModifiers: {
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
  let value = event.target.value
  // TODO: check if the capitalize modifier is active
  // if it is, capitalize the first letter of value

  // TODO: emit 'update:modelValue' with the transformed value
}
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="handleInput"
    placeholder="Type something..."
    style="width: 300px;"
  />
</template>