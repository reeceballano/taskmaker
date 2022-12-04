<template>
    <div class="todo-info">
        <div>
            <h3 class="info-title"><strong>Title:</strong> Todo 1</h3>
            <h3 class="info-title"><strong>Assignee:</strong> Ben</h3>
            <h3 class="info-title"><strong>Status:</strong> Not done</h3>
            <h3 class="info-title"><strong>Created at:</strong> Dec 5, 2022 9:00am</h3>
            <h3 class="info-title"><strong>Due Date:</strong> Dec 15, 2022 9:00am</h3>
        </div>
    </div>
</template>

<script setup>
</script>

<style scoped>
    .todo-info {
        @apply p-5
    }

    .info-title {
        @apply text-xs font-medium text-gray-500 leading-7
    }
</style>