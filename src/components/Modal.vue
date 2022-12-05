<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-elements">
                <div class="modal-icon">
                    <IconModalWarning />
                </div>
                <div class="modal-info">
                    <h3>{{title}}</h3>
                    <p>{{description}}</p>
                </div>
            </div>
            <div class="modal-buttons">
                <button @click="handleOk" class="modal-ok-btn">Ok</button>
                <button @click="handleCancel" class="modal-cancel-btn">Cancel</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import IconModalWarning from './icons/IconModalWarning.vue';

const { title, description } = defineProps({
    title: {
        type: String,
        default: 'Modal Title'
    },
    description: {
        type: String,
        default: 'Modal description'
    }
})

const emits = defineEmits(['handleOk, handleCancel']);

const handleOk = () => {
    emits('handleOk');
}

const handleCancel = () => {
    emits('handleCancel');
}
</script>

<style scoped>
    .modal-container {
        @apply w-full h-screen fixed z-50 bg-slate-200/50 left-0 right-0 top-0
    }

    .modal {
        @apply md:w-1/3 w-11/12 mx-auto bg-white shadow-lg rounded-lg  top-1/4 fixed left-0 right-0
    }

    .modal h3 {
        @apply text-base font-semibold mb-3
    }

    .modal-elements {
        @apply flex gap-3 p-7
    }

    .modal-buttons {
        @apply w-full p-5 gap-1 flex justify-around bg-slate-50
    }

    .modal-buttons button {
        @apply text-white px-3 py-3 w-2/5 shadow-md rounded-md delay-100 transition ease-in-out
    }

    .modal-ok-btn {
        @apply bg-green-500 hover:bg-green-600 
    }

    .modal-cancel-btn {
        @apply bg-red-500 hover:bg-red-600 
    }
</style>