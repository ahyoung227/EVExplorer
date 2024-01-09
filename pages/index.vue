<template>
    <div class="sm:flex sm:justify-center">
        <main class="main max-w-screen-xl">
            <SearchBar v-model="searchword" @search="searchCar" />
            <CarFilter />
            <CarCardList />
            <LoadMoreBtn />
        </main>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import CarCardList from '../components/car/CarCardList.vue';
    import CarFilter from '~/components/car/CarFilter.vue';
    import { useCarStore, LIMIT } from "../store/car";
    import SearchBar from "~/components/car/SearchBar.vue";
    import LoadMoreBtn from "~/components/car/LoadMoreBtn.vue";

    const store : ReturnType<typeof useCarStore> = useCarStore();
    const searchword = ref("");

    //TODO: it needs to be seperated
    const searchCar : void = () => {
        store.searchByWord(searchword.value);
        store.setCurOffset(LIMIT);
    }
    store.setToDefaultPage();
    store.getMoreCar();

</script>

<style scoped>

</style>
