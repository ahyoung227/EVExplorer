<template>
    <div class="container">
        <div class="content grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3 max-w-7xl mx-2">
            <div v-for="(car, index) in store.getMoreCar()" :key="index">
                <CarCard v-if="car" :car = "car" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CarCard from "./CarCard.vue";
    import { useCarStore } from "../store/car";
    const store : ReturnType<typeof useCarStore> = useCarStore();
</script>

<style scoped>

</style>