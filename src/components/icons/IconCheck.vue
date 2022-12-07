<template>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="check-icon" :class="widthSize">
        <path class=" stroke-green-800 " stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
</template>

<script setup>
import { computed } from 'vue';

const { size } = defineProps({
    size: {
        type: Number,
        default: 10
    },
    link: {
        type: String
    }
})

const widthSize = computed(() => {
    return `w-${size}`;
})
</script>

<style scoped>
    .check-icon {
        @apply hover:opacity-80 transition-opacity cursor-pointer
    }
</style>