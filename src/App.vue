
<template>
    <RouterView />
</template>

<script setup>
    import { provide, onMounted } from 'vue';
    import { RouterLink, RouterView } from 'vue-router';
    import { useTodos } from './composables/useTodos';
    
    const { todos, fetchTodos, deleteTodo, updateTodo } = useTodos();

    provide('todos', todos);
    provide('deleteTodo', deleteTodo);
    provide('updateTodo', updateTodo);

    onMounted(() => {
        fetchTodos();
    })
</script>

<style>
    body {
        @apply bg-purple-100
    }

    #app {
        @apply grid place-items-center h-screen
    }
</style>
