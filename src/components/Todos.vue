<template>
    <div class="task-list">
        <slot />
    </div>
</template>

<script setup>
</script>

<style>
    .task-list {
        @apply p-5 w-full
        /* @apply w-full p-10 bg-white align-middle rounded-lg drop-shadow-2xl */
    }
</style>
