<template>
    <div>
        <input v-model="localState" type="text" @keypress.enter="$emit('search')">
        <button @click="$emit('search')">Search</button>
    </div>
</template>

<script setup lang="ts">
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
</script>
    

<style scoped>

</style>