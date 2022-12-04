<template>
    <div class="default-layout">
        <Sidebar>
            <Widget title="Todo Details">
                <TodoInfo />
            </Widget>

        </Sidebar>


        <div class="tasks">
            <h2 class="section-title">
                Todo Description
            </h2>
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TodoInfo from '../components/TodoInfo.vue';
import Sidebar from '../components/Sidebar.vue';
import Widget from '../components/Widget.vue';

const router = useRoute();

const id = router.params.id;


</script>

<style>

</style>