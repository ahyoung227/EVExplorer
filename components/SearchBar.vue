<template>
    <div>
        <input v-model="localState" type="text" class="outline outline-offset-2 outline-21 my-5 mx-2" @input="onInput">
        <button @click="$emit('search')" >Search</button>
    </div>
</template>

<script setup lang="ts">
    import { defineProps, defineEmits, ref } from 'vue';
    import _ from 'lodash';

    const props = defineProps<({
        modelValue: string;
        error: Boolean
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

    let debouncedSearch = _.debounce(() => {
        emit('search');
    }, 2000);

    const onInput = () => {
        debouncedSearch();
    }


</script>
    

<style scoped>

</style>
