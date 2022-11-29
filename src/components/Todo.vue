<template>
    <div class="todo-item">
        {{todo.id}}: {{todo.name}} / {{todo.status}}
        <button @click="updateTodo(todo.id)">Update</button>
        <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
</template>

<script setup>
    import { inject } from 'vue';

    const { todo } = defineProps({
        todo: {
            type: Object,
            default: () => {}
        }
    })

    // Don't destructure like this, this will loose reactivity
    // const { id, name, status } = todo;

    const deleteTodo = inject('deleteTodo');

    const updateTodo = inject('updateTodo');
    
</script>
