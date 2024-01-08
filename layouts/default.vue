<template>
    <div>
        <header class="wrapper flex justify-between">
            <div class="flex">
                <NuxtLink to="/">
                    <h1 class="text-primary text-5xl" @click="handleDefault">
                        <img src="assets/evlife-logo.svg" class="ml-8" alt="logo">
                    </h1>
                </NuxtLink>
                <span class="material-symbols-outlined">location_on</span>                
            </div>
            <div class="text-gray-400 font-light">About Us</div>
            <div class="text-gray-400 font-light">Resources</div>
            <div>
                <span class="material-symbols-outlined mr-10">menu</span>
            </div>
            
        </header>
    </div>

    <div>
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { useCarStore } from "../store/car";
    const store = useCarStore();

    const { data } = await useAsyncData(
        'cars',
        () => $fetch("https://freetestapi.com/api/v1/cars")
    );

    store.setAllCarData(data);

    const handleDefault = () => {
        store.setDefaultCarData();
        //need to be fixed to insert offset and limit
        store.getMoreCar(0, 6);
    }

</script>

<style scoped>

</style>
