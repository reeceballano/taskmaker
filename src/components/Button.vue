<template>
    <div class="flex justify-center p-5">
        <button 
            :class="isDisabled ? 'is-disabled' : ''"
            class="primary-button" 
            @click="handleOnclick"
            :disabled="isDisabled"
        >
            {{text}}
        </button>
    </div>
</template>

<script setup>
import { toRef, computed } from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Button Text'
    },
    isDisabled: {
        type: Boolean,
        default: true
    }
})

const emits = defineEmits(['handleOnclick']);

const handleOnclick = () => {
    emits('handleOnclick');
}

</script>

<style scoped>
    .primary-button {
        @apply cursor-pointer block bg-blue-700 w-full p-4 rounded shadow-lg text-white hover:bg-blue-800 active:bg-blue-900 transition ease-out
    }
    .is-disabled {
        @apply cursor-not-allowed hover:bg-blue-500 hover:text-gray-300 bg-blue-500 text-gray-300
    }
</style>