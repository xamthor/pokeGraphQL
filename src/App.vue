<template>
	<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 25px">
		
		<div>
			<select name="" id="" v-model="gen">
				<option value="" selected="">Select Pokemon Generation</option>
				<option value="generation-i">generation-i</option>
				<option value="generation-ii">generation-ii</option>
				<option value="generation-iii">generation-iii</option>
				<option value="generation-iv">generation-iv</option>
				<option value="generation-v">generation-v</option>
				<option value="generation-vi">generation-vi</option>
			</select>
			<button @click="gen = ''">Clear</button>
			<div v-if="gen">
				<GenSelect :gen="gen"/>
			</div>
		</div>
		<div><Generation/></div>

	</div>
	
</template>
<script>
import GenSelect from './components/GenSelect.vue'
import Generation from './components/Generation.vue'

export default {
	name: 'App',
	components: {
		GenSelect,Generation
  	},
  	data(){
  		return{
  			gen: ''
  		}
  	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
