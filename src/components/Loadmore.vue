<template>
    <div class="text-center mb-7">
        <button class=" text-xs font-semibold hover:opacity-70 delay-75 transition-opacity " @click="handleClick">Load more</button>
    </div>
</template>

<script setup>
const emits = defineEmits(['handleClick']);

const handleClick = () => {
    emits('handleClick');
}
</script>