<template>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 max-w-7xl">
        <div v-for="(car, index) in store.getMoreCar(offset, limit)" :key="index">
            <CarCard :car = "car" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import CarCard from "./CarCard.vue";
    import { useCarStore } from "../store/car";
    const store = useCarStore();

    const LIMIT = 6;
    const OFFSET = 0;

    const offset = ref(OFFSET);
    const limit = ref(LIMIT);

    store.getMoreCar(offset.value, limit.value);    

</script>

<style scoped>

</style>