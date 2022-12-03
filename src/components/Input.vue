<template>
    <div class="pt-5 pl-5 pr-5 pb-0">
        <input 
            class="text-input" 
            type="text" 
            :placeholder="placeholder"
            :value="modelValue"
            :id="id"
            @keyup="$emit('update:modelValue', $event.target.value)"
        >
    </div>
</template>

<script setup>
    const { id, value, modelValue } = defineProps({
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            default: 'Text input'
        },
        placeholder: {
            type: String,
            default: 'Black is white'
        },
        modelValue: {
            type: String
        }
    })
</script>

<style>
    .text-input {
        @apply ring-2 rounded w-full leading-6 px-3 py-3 shadow-md transition ease-in-out outline-none focus:ring-blue-500 hover:ring-blue-400 ring-blue-100
    }
</style>