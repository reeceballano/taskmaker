
<template>
    <div class="home-view">
        <div class="members">
            <h2 class="section-title">
                Members
            </h2>
            <Profiles>
                <ProfileCard 
                    v-for="(user) in users"
                    :key="user.id"
                    :user="user" 
                    background="bg-blue-300"
                    @changeTab="changeTab"
                />
            </Profiles>
        </div>

        <div class="tasks">
            <h2 class="section-title">
                Tasks
            </h2>
            <div class="task-list">
                task
            </div>
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
    
    import { ref, provide } from 'vue';
    import Todos from '../components/Todos.vue';
    import Profiles from '../components/Profiles.vue';
    import ProfileCard from '../components/ProfileCard.vue';

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
    .section-title {
        @apply text-xl font-medium mb-8 text-indigo-900
    }

    .home-view {
        @apply flex container py-20 space-x-20 bg-white align-middle rounded-lg drop-shadow-2xl
    }

   
    .task-list {
        @apply w-full
    }



</style>