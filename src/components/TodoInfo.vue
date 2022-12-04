<template>
    <div class="todo-info">
        <div>
            <h3 class="info-title"><strong>Title:</strong> {{todo.name}}</h3>
            <h3 class="info-title"><strong>Assignee:</strong> {{todo.assignee}}</h3>
            <h3 class="info-title"><strong>Status:</strong> {{todo.status}}</h3>
            <h3 class="info-title"><strong>Created at:</strong> {{todo.created_at}}</h3>
            <h3 class="info-title"><strong>Due Date:</strong> Dec 15, 2022 9:00am</h3>
        </div>
    </div>
</template>

<script setup>
    const { todo } = defineProps({
        todo: {
            type: Object
        }
    })
</script>

<style scoped>
    .todo-info {
        @apply p-5
    }

    .info-title {
        @apply text-xs font-medium text-gray-500 leading-7
    }
</style>