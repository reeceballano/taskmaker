<template>
    <button class="delete-btn" @click="handleDelete">
        <span class="mr-1">
            <slot />
        </span>
        <IconClose :size="4" :class="btnStyle" />
        <!-- <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 stroke-red-600 delay-75 transition ease-in-out hover:scale-150">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg> -->
    </button>    
</template>

<script setup>
import { computed } from 'vue';
import IconClose from './icons/IconClose.vue';

const emits = defineEmits(['handleDelete']);

const handleDelete = () => {
    emits('handleDelete');
}

const btnStyle = computed(() => {
    return 'delay-75 transition ease-in-out duration-300 hover:scale-125';
})
</script>

<style scoped>
    .delete-btn {
        @apply flex items-center justify-center text-xs
    }
</style>