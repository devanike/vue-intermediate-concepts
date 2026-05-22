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
  if (props.modelModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:modelValue', value)
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