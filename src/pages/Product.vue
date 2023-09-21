<script setup>
import { onBeforeMount, ref } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios'

const route = useRoute()
const productId = route.params.product_id;
const product = ref({});

onBeforeMount(() => {
    axios.get(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
        product.value= res.data
    })
})
</script>

<template>
    <div class="bg-gray-100 min-h-screen p-8">
        <div class="bg-white p-4 rounded-lg shadow-lg flex">
            <div class="w-1/2 pr-8">
                <img :src="product.image" alt="" class="w-full h-120 object-cover rounded-lg">
            </div>
            <div class="w-1/2">
                <h1 class="text-3xl font-semibold mb-24 mt-20">{{ product.title }}</h1>
                <p class="mt-4 w-2/3 text-xl">{{ product.description }}</p>
                <p class="font-semibold mt-12 text-lg">{{ product.category.toUpperCase() }}</p>
                <p class="font-semibold mt-12 text-lg">Price:</p>
                <div class="text-gray-600 text-lg">${{ product.price }}</div>

                <router-link to="/" class="block mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out text-center">Back to Product List</router-link>
            </div>
        </div>
    </div>
</template>
