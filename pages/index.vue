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
    import CarCardList from '../components/car/card/CarCardList.vue';
    import CarFilter from '~/components/CarFilter.vue';
    import { useCarStore, LIMIT } from "../store/car";
    import SearchBar from "~/components/SearchBar.vue";
    import LoadMoreBtn from "~/components/LoadMoreBtn.vue";

    const store : ReturnType<typeof useCarStore> = useCarStore();
    const searchword = ref("");

    const searchCar : void = () => {
        store.searchByWord(searchword.value);
        store.setCurOffset(LIMIT);
    }

    const loadMoreCar : void = () => {
        store.setCurOffset(store.getCurOffset() + LIMIT);
    }
    store.setToDefaultPage();
    store.getMoreCar();

</script>

<style scoped>

</style>
