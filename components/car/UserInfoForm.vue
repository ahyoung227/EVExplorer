<template>
    <div class="my-10">
        <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label for="first_name" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">First name</label>
                    <input type="text" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required>
                </div>
                <div>
                    <label for="last_name" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">Last name</label>
                    <input type="text" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required>
                </div>
                <div>
                    <label for="email" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">Email</label>
                    <input type="text" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required>
                </div>  
                <div>
                    <label for="Credit Score" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">Credit Score</label>
                    <input type="number" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
                </div>
                <div>
                    <label for="Household Income" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">Household Income</label>
                    <input type="number" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div>
                <div>
                    <label for="Household Size" class="block mb-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">Household Size</label>
                    <input type="number" class=" border border-gray-300 text-zinc-900 bold text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-zinc-900 bold dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
                </div>
            </div>
            <div class="flex items-start mb-6">
                <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded  focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required>
                </div>
                <label for="remember" class="ms-2 text-lg font-medium text-zinc-900 bold dark:text-zinc-900 bold">
                    I'd like a free quote to bundle EV charger installation</label>
            </div>
            <button type="submit" class="text-white bold bg-primary hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-blue-950 dark:focus:ring-blue-800">Check My Rate</button>
        </form>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>