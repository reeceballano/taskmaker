<template>
    <li @mouseover="(isShow = true)" @mouseout="isShow = false" class="task-item">
        <div class="flex gap-4">
            <div>
                <Checkbox @update="useTodo.updateTodo(todo.id)" :status="todo.status" />
            </div>
            <div class="flex-1">
                <div class="info-container">
                    <RouterLink :to="{ name: 'todo', params: { id: todo.id} }">
                        <h4 :class="todo.status ? 'is-completed' : ''">{{textTrimmer(todo.name, 20)}}</h4>
                    </RouterLink>
                    <p :class="todo.status ? 'is-completed' : ''">{{textTrimmer(description, 50)}}</p>
                    <span :class="todo.status ? 'is-completed' : ''">Assigned to: {{ todo.assignee }}</span>
                </div>
            </div>
            <Teleport to="#app">
                <Modal 
                    v-if="openModal" 
                    messageType="warning"
                    :title="`Are you sure you want to delete?`"
                    :description="`Deleting '${todo.name}' task will permanently be deleted in database`"
                    @handleOk="useTodo.deleteTodo(todo.id)"
                    @handleCancelModal="(openModal = false)" />
            </Teleport>

            <div v-show="isShow">
                <!-- <DeleteIcon @handleDelete="useTodo.deleteTodo(todo.id)" /> -->
                <DeleteIcon @handleDelete="(openModal = true)" />
            </div>
        </div>
    </li>
</template>

<script setup>
    import { ref, computed, inject } from 'vue';
    import { RouterLink } from 'vue-router';
    import Checkbox from './Checkbox.vue';
    import DeleteIcon from './DeleteIcon.vue';
    import { textTrimmer } from '../utils/useText';
    import Modal from './Modal.vue';

    const { todo } = defineProps({
        todo: {
            type: Object,
            default: () => {}
        }
    })

    // Don't destructure like this, this will loose reactivity
    // const { id, name, status } = todo;

    const useTodo = inject('useTodo');

    const isShow = ref(false);

    const openModal = ref(false)

    const description = computed(() => {
        if(todo.description) { return todo.description }
        return 'no description'
    })
</script>

<style>
    .is-completed {
        @apply line-through opacity-50 transition ease-in-out delay-75 duration-300
    }

    .task-item {
        @apply 
            p-3 
            w-full
            border-b-2
            mb-3 
            delay-75 
            transition ease-in-out 
            hover:drop-shadow-xl 
            duration-300
            /* hover:scale-105 */
            hover:bg-blue-50
    }

    .task-item h4 {
        @apply block w-full text-sm text-slate-900 font-semibold -mb-1 transition ease-in-out delay-150 uppercase cursor-pointer 
    }

    .task-item p {
        @apply text-sm my-2 text-slate-500 w-full
    }

    .task-item span {
        @apply text-xs font-semibold cursor-pointer
    }
</style>
