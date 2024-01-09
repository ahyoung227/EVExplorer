<template>
    <div class="flex">
        <div class="ml-auto mr-4 my-2">
            <select v-model="selected" @change="handleSortChange" class="text-right text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block 
            dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-600
            dark:focus:ring-blue-500">
            <option disabled value="">Sort By</option>
            <option>High Incentive</option>
            <option>Recommended</option>  
            </select>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useCarStore, LIMIT } from "../store/car";

    const store : ReturnType<typeof useCarStore> = useCarStore();
    const selected = ref("")
    
    const handleSortChange : void = () => {
        if(selected.value === "High Incentive") {
            store.setCurOffset(LIMIT);
            store.sortBy(selected.value);
        } else {
            store.setToDefaultPage()
        }

    }
</script>

<style scoped>

</style>