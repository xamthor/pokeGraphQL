<template>
	<input type="text" v-model="gen">
	<button @click="refresh()">clickly</button>

	<div v-if="fetching">
		Loading...
	</div>
	<div v-else-if="error">
		Oh no... {{error}}
	</div>
	<div v-else>
		<ul v-if="data">
			<div v-for="item of data">
				<div v-for="nice of item">{{nice}}</div>
			</div>
		</ul>
	</div>
</template>

<script>
import { useQuery } from '@urql/vue';
import { ref } from 'vue';

export default {
	setup() {
		const gen = ref("generation-ii");

		const result = useQuery({ 
			query: ` query samplePokeAPIquery { 
				pokemon_v2_pokemonspecies(where: {	
					pokemon_v2_generation: {
						name: {_eq: $gen}
					}
				},  order_by: {id: asc}) { id,name } }`,
			variables: { gen } 
		});

		return {
			fetching: result.fetching,
			data: result.data,
			error: result.error,
			gen,
	      	refresh() {
	        	result.executeQuery({
				requestPolicy: 'network-only'
	        });
	      }
		};
	}
};
</script>