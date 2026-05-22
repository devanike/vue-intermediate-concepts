<script setup>
import { ref } from 'vue'
// TODO: import useTemplateRef and onMounted from vue

// TODO: create a template ref called inputRef using useTemplateRef with the name 'myInput'

// TODO: create a template ref called boxRef using useTemplateRef with the name 'myBox'

const boxWidth = ref(null)
const isFocused = ref(false)

// TODO: add onMounted:
// 1. call focus() on inputRef.value
// 2. set boxWidth.value to boxRef.value.offsetWidth
// 3. log 'input element:' and inputRef.value
// 4. log 'box element:' and boxRef.value
// 5. log 'box width:' and boxWidth.value + 'px'

// TODO: create a function called highlightBox that:
// 1. sets boxRef.value.style.border to '2px solid #42b883'
// 2. after 1000ms resets it back to '2px solid #35495e'
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <p style="margin-bottom: 8px;">Example 1: auto focus an input on mount</p>
      <input
        ref="myInput"
        type="text"
        placeholder="I was focused automatically"
        style="width: 300px;"
        @focus="isFocused = true"
        @blur="isFocused = false"
      />
      <p style="margin-top: 8px; font-size: 12px;">
        Input is currently: <strong style="color: #42b883;">{{ isFocused ? 'focused' : 'not focused' }}</strong>
      </p>
    </div>

    <div style="background: #35495e; padding: 16px; border-radius: 6px;">
      <p style="margin-bottom: 8px;">Example 2: read an element's width and control it directly</p>
      <div
        ref="myBox"
        style="background: #2a3a4a; padding: 16px; border-radius: 6px; border: 2px solid #35495e; margin-bottom: 12px;"
      >
        This box's width is being measured directly from the DOM
      </div>
      <p style="font-size: 14px; margin-bottom: 12px;">
        Measured width: <strong style="color: #42b883;">{{ boxWidth }}px</strong>
      </p>
      <button @click="highlightBox">Highlight box</button>
    </div>

  </div>
</template>