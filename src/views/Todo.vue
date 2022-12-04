<template>
    <div class="default-layout">
        <Sidebar>
            <IconBack link="/" :size="5" cssStyle="absolute -top-10 left-2"/>
            <Widget title="Todo Details">
                <TodoInfo />
            </Widget>

        </Sidebar>


        <div class="tasks">
            <h2 class="section-title">
                Todo Description
            </h2>

            <p class="p-5">
                Kombucha food truck ut, everyday carry hashtag shoreditch qui ex chambray lyft trust fund pariatur poutine small batch pickled. Yr pok pok fingerstache nulla chambray gentrify selvage dolor lumbersexual. Vibecession af snackwave tumeric. Poutine umami celiac pop-up, succulents do slow-carb banjo microdosing venmo locavore kale chips affogato.
            </p>
        </div>
        <!-- <Todos /> -->
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import TodoInfo from '../components/TodoInfo.vue';
import Sidebar from '../components/Sidebar.vue';
import Widget from '../components/Widget.vue';
import IconBack from '../components/icons/IconBack.vue';

const router = useRoute();

const id = router.params.id;


</script>

<style>

</style>