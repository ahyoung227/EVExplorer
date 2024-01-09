<template>
    <div>
        <header class="wrapper sm:flex sm:justify-between sm:items-center sm:px-4">
            <div class="flex item-center justify-between">
                 <div>
                    <NuxtLink to="/">
                        <div class="text-primary text-5xl" @click="handleDefault">
                            <img src="assets/evlife-logo.svg" class="ml-8" alt="logo">
                        </div>
                    </NuxtLink>              
                </div>

                <div class="sm:hidden" @click="toggleMenu">
                    <span class="material-symbols-outlined mr-10">menu</span>
                </div>    
            </div>

            <nav :class="menuVisible ? 'block' : 'hidden'" class="px-2 pt-2 pb-4 sm:flex sm:p-0">
                <div class="text-gray-400 font-light mx-5 p-1">About Us</div>
                <div class="text-gray-400 font-light mx-5 mr-8 p-1">Login</div>
            </nav>   
        </header>
    </div>

    <div>
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { useCarStore, LIMIT } from "../store/car";
    import { ref } from 'vue';

    const store : ReturnType<typeof useCarStore> = useCarStore();

    const { data } : Car[] = await useAsyncData(
        'cars',
        () => $fetch("https://freetestapi.com/api/v1/cars")
    );

    store.setAllCarData(data);

    const handleDefault :void = () => {
        store.setToDefaultPage()
        store.getMoreCar();
    }

</script>

<style scoped>

</style>
