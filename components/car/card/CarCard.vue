<template>
    <div class="card">
        <div class ="my-3">
            <img src="assets/tesla.png" :alt="car.make" class="card-image">
            <div class="text flex justify-between">
                <p class="text-base text-gray-500 font-semibold">{{ car.model }}</p>
                <p class="text-base text-gray-700 font-semibold">{{ car.make }}</p>
            </div>
            <p class="card-base-text">Available Incentives $ {{ car.horsepower }}</p>
            <p class="card-base-text">With an EVLife Loan $ {{ car.horsepower }}</p>
            <p class="card-base-text">Fuel Savings $ {{ car.horsepower }}</p>
        </div>
        <NuxtLink :to="`/cars/${car.id}`">
            <button class="btn bg-primary w-full">
                <span>Get Pre-Qualified</span>
            </button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { car } = defineProps(['car']);

</script>

<style scoped>

</style>