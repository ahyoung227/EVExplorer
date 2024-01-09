<template>
    <div class="p-6 mx-auto text-center mb-8">
        <button type="submit" @click ="loadMoreCar" class="text-white bold hover:shadow-md transition duration-300 font-medium text-sm w-full sm:w-auto px-5 py-1.5 text-center dark: bg-slate-300 dark:hover:bg-gray-500 dark:focus:ring-blue-800 rounded-full">
            Load More
        </button>
    </div>
</template>

<script setup lang="ts">
    import { useCarStore, LIMIT } from "../../store/car";

    const store : ReturnType<typeof useCarStore> = useCarStore();
    const loadMoreCar : void = () => {
        store.setCurOffset(store.getCurOffset() + LIMIT);
    }
</script>

<style scoped>

</style>