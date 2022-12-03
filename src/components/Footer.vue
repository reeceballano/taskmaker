<template>
    <div id="main-footer">
        <div class="container">
            <div class="copyright-text">
                <span>
                    Choco TaskMaker. Copyright 2022. All Rights Reserved 
                </span>
                <div class="social-icons">
                    <IconGithub link="https://github.com/reeceballano" />
                    <IconFacebook link="https://fb.com/rdbwebdev" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconGithub from './icons/IconGithub.vue';
import IconFacebook from './icons/IconFacebook.vue';
</script>

<style>
    #main-footer {
        @apply py-5
    }
    .copyright-text {
        @apply text-center text-xs text-gray-500 md:flex items-center justify-around
    }

    .social-icons {
        @apply flex md:justify-around justify-center my-5
    }
</style>