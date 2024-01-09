<template>
    <div class="card">
        <div class ="my-3">
            <!-- dynamic image does not work -->
            <img :src="carImage.default" :alt="car.make" class="card-image">
            <!-- <img src="`assets/mockCarImages/BMW.png`" :alt="car.make" class="card-image"> -->
            <div class="text flex justify-between">
                <p class="text-base text-gray-500 font-semibold">{{ car.model }}</p>
                <p class="text-base text-gray-700 font-semibold">{{ car.make }}</p>
            </div>
            <p class="card-base-text">Available Incentives $ {{ car.horsepower }}</p>
            <p class="card-base-text">With an EVLife Loan $ {{ car.horsepower }}</p>
            <p class="card-base-text">Fuel Savings $ {{ car.horsepower }}</p>
        </div>
        <NuxtLink :to="`/cars/${car.id}`">
            <button class="btn bg-primary py-5 w-full">
                Get Pre-Qualified
            </button>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
    const { car } = defineProps<{
        car: Car
    }>();

    const carImage = await import(`../../assets/mockCarImages/${car.make}.png`);
    
</script>

<style scoped>

</style>