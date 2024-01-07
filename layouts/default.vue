<template>
    <div>
        <header class="wrapper flex justify-center">
            <NuxtLink to="/">
                <h1 class="text-secondary text-5xl">EVlife</h1>
                <span class="material-symbols-outlined">location_on</span>
            </NuxtLink>
        </header>
    </div>

    <div>
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>