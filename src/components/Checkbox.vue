<template>
    <input 
        type="checkbox" 
        :checked="status" 
        @change="update"
        name="radio" 
        class="w-5 h-5 bg-pink-300 checked:bg-rose-500 cursor-pointer" 
    />
</template>

<script setup>
import { ref } from 'vue';

const { status } = defineProps({
    status: {
        type: Boolean
    }
})

const emits = defineEmits(['update']);

const update = () => {
    emits('update', status);
}

</script>