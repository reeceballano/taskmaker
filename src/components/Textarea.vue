<template>
    <div class="pt-5 pl-5 pr-5 pb-0">
        <textarea 
            class="text-input" 
            type="text" 
            :placeholder="placeholder"
            :value="modelValue"
            :id="id"
            @keyup="$emit('update:modelValue', $event.target.value)"
        ></textarea>
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
