<template>
    <div>
        <h2>Explore</h2>
        <SearchBar v-model="searchword" @search="searchCar" :error="error" />
        <div>Filtered By </div>
        <div>Sort by </div>
        <div v-for="(car, index) in store.curPageCars" :key="index">
            <CarCard :car = "car" />
        </div>
        <div class="p-6 mx-auto text-center mb-8">
            <button class="outline outline-offset-2 outline-2" @click ="loadMoreCar">
                Fetch More
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CarCard from "~/components/CarCard.vue";
    import { useCarStore } from "../store/car";
    import { ref } from 'vue';
    import SearchBar from "~/components/SearchBar.vue";
    const store = useCarStore();

    const searchword = ref("");
    const error = ref(false);
    const searchCar = () => {
        if(searchword <= 0) {
            error.value = true;
            return;
        } 
        store.searchByMake((searchword.value));
        searchword.value = "";
        offset.value = OFFSET;
        limit.value = LIMIT;
        store.getMoreCar(offset.value, limit.value);
    }
    const LIMIT = 6;
    const OFFSET = 0;

    const offset = ref(OFFSET);
    const limit = ref(LIMIT); 
    const loadMoreCar = () => {
        offset.value += LIMIT;
        store.getMoreCar(offset.value, limit.value);
    }

    const { data } = await useAsyncData(
        'cars',
        () => $fetch("https://freetestapi.com/api/v1/cars")
    );
    store.setAllCarData(data);
    store.getMoreCar(offset.value, limit.value);

</script>

<style scoped>

</style>