<template>
    <div v-if="car" class="sm:flex sm:justify-center mx-6">
        <div class="max-w-screen-x flex flex-col items-center mb-16">
            <h2 class="my-8 text-3xl md:text-5xl text-center">Check your rate on a new EV</h2>
            <div class="flex flex-col items-center">
                <img :src="img.default" :alt="car.make" class="img-class w-80 h-auto">
                <p>EV Climate Loan: {{ car.price }}</p>
                <p>Make: {{ car.make }}</p>
                <p>Model : {{ car.make }}</p>
            </div>
            <UserInfoForm />
            <NuxtLink to="/">
                <button type="submit" class="text-white bold bg-secondary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-1.5 text-center dark:bg-secondary dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Back to the list
                </button>
            </NuxtLink>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { storeToRefs } from 'pinia';
    import { useCarStore } from "../../store/car";
    const route = useRoute();
    const carStore = useCarStore();
    const car = reactive<Car[]>(carStore.getById(parseInt(route.params.id)));
    const img = await import(`../../assets/mockCarImages/${car.make}.png`);
</script>

<style scoped>

</style>