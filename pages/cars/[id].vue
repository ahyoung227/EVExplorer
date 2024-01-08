<template>
    <div>
        <div>
            <h2>Check Your Rate</h2>
            <img :src="car.image" :alt="car.make">
            <p>{{ car.price }}</p>
            <p>{{ car.make }}</p>
        </div> 
        <NuxtLink to="/">
            <button class="btn bg-secondary border-t-neutral-500">
                <span class="text-lg">Back to the list</span>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useCarStore } from "../../store/car";
    const route = useRoute();
    const carStore = useCarStore();
    const car = reactive(carStore.getById(parseInt(route.params.id)));

</script>

<style scoped>

</style>