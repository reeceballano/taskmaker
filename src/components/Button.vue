<template>
    <div class="flex justify-center px-5 pb-5">
        <button 
            class="block bg-blue-700 w-full p-4 rounded shadow-lg text-white hover:bg-blue-800 transition ease-out" 
            @click="handleOnclick"
        >
            {{text}}
        </button>
    </div>
</template>

<script setup>
const { text } = defineProps({
    text: {
        type: String,
        default: 'Button Text'
    }
})
const emits = defineEmits(['handleOnclick']);

const handleOnclick = () => {
    emits('handleOnclick');
}
</script>