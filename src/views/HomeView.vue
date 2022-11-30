
<template>
    <div class="home-view">
        <div class="members">
            <div class="sticky-sidebar">
                <h2 class="section-title">
                    Members
                </h2>
                <Profiles>
                    <ProfileCard 
                        v-for="(user) in users"
                        :key="user.id"
                        :user="user" 
                        background="bg-gray-100"
                        @changeTab="changeTab"
                    />
                </Profiles>
            </div>
        </div>

        <div class="tasks">
            <h2 class="section-title">
                Tasks
            </h2>
            <Todos>
                <Todo 
                    v-for="todo in todos"
                    :key="todo.id"
                    :todo="todo"
                />
            </Todos>

        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
    
    import { ref, provide, inject, computed } from 'vue';
    import Todos from '../components/Todos.vue';
    import Todo from '../components/Todo.vue';
    import Profiles from '../components/Profiles.vue';
    import ProfileCard from '../components/ProfileCard.vue';

    const todos = computed(() => {
        return data.value;
    })

    const data = inject('todos');

    const activeTab = ref(0);

    provide('tab', activeTab);

    const users = [
        {id: 1, name: 'Pepito Manaloto', position: 'Frontend Developer' },
        {id: 2, name: 'Maria Smith', position: 'Designer' },
        {id: 3, name: 'Ben Ten', position: 'Backend Developer' },
    ]

    const changeTab = (id) => {
        console.log('current id', id);
        activeTab.value = id;
        console.log('activeTab', activeTab.value)
    }
</script>

<style>
    .sticky-sidebar {
        @apply sticky top-0 z-30
    }

    .section-title {
        @apply text-lg font-semibold text-gray-600 p-5 border-b
    }

    .home-view {
        @apply flex container space-x-20 align-middle my-10
        /* @apply flex container py-20 space-x-20 bg-white align-middle rounded-lg drop-shadow-2xl */
    }

    .tasks {
        @apply w-full bg-white align-middle rounded-lg drop-shadow-2xl
    }
</style>