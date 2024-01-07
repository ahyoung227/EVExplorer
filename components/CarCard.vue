<template>
    <div class="card flex items-center gap-8">
        <img :src="car.image" :alt="car.make" class="card-image">
        <div>
            <p class="text-2xl">{{ car.make }}</p>
            <p class="text-xl">{{ car.model }}</p>
            <p class="text-lg">incentive: {{ car.horsepower }}</p>
        </div>
        <NuxtLink :to="`/cars/${car.id}`">
            <button class="btn border-t-neutral-500">
                <span>Get pre-qaulify</span>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { car } = defineProps(['car']);

</script>

<style scoped>

</style>