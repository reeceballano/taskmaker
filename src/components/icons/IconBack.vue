<template>
    <RouterLink :to="link">
        <div :class="cssStyle" class="back-icon">
            <svg :width="size" :height="size" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            {{text}}
        </div>
    </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router';
const { size } = defineProps({
    size: {
        type: Number,
        default: 25
    },
    link: {
        type: String
    },
    text: {
        type: String,
        default: 'BACK'
    },
    cssStyle: {
        type: String
    }
})
</script>

<style scoped>
    .back-icon {
        @apply z-10 text-xs hover:opacity-80 transition-opacity cursor-pointer flex items-center justify-center
    }

    .back-icon svg {
        @apply mr-2
    }
</style>