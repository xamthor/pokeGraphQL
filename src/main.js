import { createApp } from 'vue'
import App from './App.vue'
import urql from '@urql/vue';

const app = createApp(App);

app.use(urql, {
  url: 'https://beta.pokeapi.co/graphql/v1beta',
});

app.mount('#app')
