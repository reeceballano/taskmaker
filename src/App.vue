
<template>
    <div class="container">
        <RouterView />
    </div>
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

    h1,h2,h3,h4,h5,h6 {
        @apply font-roboto
    }

    #app {
        @apply grid place-items-center h-screen
    }
</style>
