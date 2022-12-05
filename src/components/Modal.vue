<template>
    <div class="modal-container">
        <div class="modal">
            <div class="modal-elements">
                <div class="modal-icon">
                    <IconModalWarning />
                </div>
                <div class="modal-info">
                    <h3>Modal Title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque deleniti, nihil sit</p>
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
        @apply w-1/3 mx-auto bg-white shadow-lg rounded-lg  top-1/4 fixed left-0 right-0
    }

    .modal h3 {
        @apply text-base font-semibold
    }

    .modal-elements {
        @apply flex gap-3 p-7
    }

    .modal-buttons {
        @apply w-full p-5 gap-4 flex justify-around bg-slate-50
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