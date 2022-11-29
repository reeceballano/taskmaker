<template>
    <div class="todos bg-slate-500">
        {{todos}}
        <Todo 
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
        />
    </div>
</template>

<script setup>
    import { ref, inject } from 'vue';
    import Todo from './Todo.vue';

    const todos = inject('todos');
</script>
