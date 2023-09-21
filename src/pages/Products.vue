<script setup>
import { onBeforeMount, ref } from 'vue';
import axios from 'axios'

let productList = ref([])

onBeforeMount(() => {
	axios.get('https://fakestoreapi.com/products')
	.then((res) => {
		productList.value = res.data
	})
})
</script>
<template>
	<div class="bg-gray-100 min-h-screen p-8">
		<h1 class="text-3xl font-semibold text-center mb-8">Our Products</h1>
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			<div v-for="product in productList" :key="product.id">
				<div class="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
					<img :src="`${product.image}`" alt="" class="w-full h-60 object-cover rounded-t-lg">
					<div class="p-4">
						<h2 class="text-lg font-semibold mb-2">{{ product.title.slice(0,40) }}</h2>
						<p class="text-gray-600">${{ product.price }}</p>
						<p class="mt-2">{{ product.description.slice(0,40) }}...</p>
						<router-link :to="{ name : 'product_details' , params : { product_id : product.id }}" class="block mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out text-center">View Details</router-link>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

