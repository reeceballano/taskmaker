<template>
    <div 
        class="member"
        @click="changeTab" 
        :class="[Number(currentTab) === Number(user.id) ? 'member-active' : '', background]" 
    >
        <div class="profile-img-container">
            <Suspense>
                <template #default>
                    <ProfileImage :id="user.id" />
                </template>
                <template #fallback>
                    <IconProfileImage class="delay-75 animate-pulse stroke-slate-300" />
                </template>
            </Suspense>
        </div>
        <div class="profile-info-container">
            <h4>{{user.name}}</h4>
            <span>{{user.position}}</span>
        </div>
    </div>
</template>

<script setup>
import { ref, inject, computed, Suspense } from 'vue';
import ProfileImage from './ProfileImage.vue';
import IconProfileImage from '../components/icons/IconProfileImage.vue';

const { user } = defineProps({
    user: {
        type: Object
    },

    background: {
        type: String,
        default: 'bg-indigo-300'
    }
})

const activeTab = inject('tab');

const currentTab = computed(() => {
    if(Number(activeTab.value) == 0) { 
        //FORCE TO SET THE FIRST TAB TO BE ACTIVE CHANGE TO 1
        return 0
    } else {
        return activeTab.value;
    }
})

const emits = defineEmits(['changeTab']);

const changeTab = () => {
    emits('changeTab', user);
}

</script>

<style>
    .member:hover,
    .member-active {
        @apply !bg-sky-400 scale-105 
    }

    .member-active h4,
    .member-active span {
        @apply !text-black
    }

    .member-active:hover span,
    .member-active:hover h4 {
        @apply !text-gray-100
    }
    
    .member {
        @apply 
            w-full
            flex p-3 rounded-lg 
            mb-3 
            cursor-pointer 
            drop-shadow-md 
            delay-75 
            transition ease-in-out 
            hover:drop-shadow-xl 
            duration-150
    }

    .member:hover span,
    .member:hover h4 {
        @apply text-white
    }

    .member h4 {
        @apply text-sm text-gray-900 font-medium -mb-1 transition ease-in-out delay-75
    }

    .member span {
        @apply text-xs text-gray-600 transition ease-in-out delay-75
    }

    .profile-img-container {
        @apply pr-5
    }
</style>