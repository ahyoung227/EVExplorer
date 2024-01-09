<template>
    <div class="sm:w-80 mx-3">   
        <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
            </div>
            <input v-model="localState" type="search" class="search-bar" placeholder="Search by Make, Models..." required @input="onInput">
        </div>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';
    import _ from 'lodash';

    const props = defineProps<({
        modelValue: string;
    })>();

    const emit = defineEmits<{
        (e: 'update:modelValue', value: string): void;
        (e: 'search') : void
    }>();

    const localState = computed({
        get() {
            return props.modelValue;
        },
        set(value) {
            emit('update:modelValue', value);
        }
    })

    let debouncedSearch : void = _.debounce(() => {
        emit('search');
    }, 2000);

    const onInput : void = () => {
        debouncedSearch();
    }

    const handleEnter : void = () => {
        //@keyup.enter="handleEnter()" is disabled as we do debouncing logic
        emit('search');
        emit('update:modelValue', "");
    }
    

</script>
    

<style scoped>

</style>
