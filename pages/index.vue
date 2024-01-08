<template>
    <div class="sm:flex sm:justify-center">
        <main class="main max-w-screen-xl">
                <SearchBar v-model="searchword" @search="searchCar" :error="error" />
                <CarFilter />
                <CarCardList :car="car" />

                <div class="p-6 mx-auto text-center mb-8">
                    <button class="outline outline-offset-2 outline-2" @click ="loadMoreCar">
                        Load More
                    </button>
                </div>

        </main>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import CarCardList from '../components/car/card/CarCardList.vue';
    import CarFilter from '~/components/CarFilter.vue';
    import SearchBar from "~/components/SearchBar.vue";
    import { useCarStore } from "../store/car";
    const store = useCarStore();

    const LIMIT = 6;
    const OFFSET = 0;

    const offset = ref(OFFSET);
    const limit = ref(LIMIT);

    const searchword = ref("");
    const error = ref(false);
    const searchCar = () => {
        if(searchword <= 0) {
            error.value = true;
            return;
        } 
        store.searchByWord((searchword.value));
        offset.value = OFFSET;
        limit.value = LIMIT;
        store.getMoreCar(offset.value, limit.value);
    }

    const loadMoreCar = () => {
        offset.value += LIMIT;
        store.getMoreCar(offset.value, limit.value);
    }

    const sortBy = () => {
        store.sortBy();
    }


</script>

<style scoped>

</style>
