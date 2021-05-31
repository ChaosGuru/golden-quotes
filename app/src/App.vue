<template>
  <div id="app">
    <h1>Golden quotes</h1>
  </div>
</template>

<script>
import { database } from './main.js'

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      quotes: [],
    }
  },
  mounted() {
    this.getQuotes();
  },
  methods: {
    async getQuotes() {
      let quotesRef = database.ref('quotes');
      quotesRef.once('value', (snapshot) => {
        snapshot.forEach((childSnap) => {
          this.quotes.push(childSnap.val());
        });
      });
    },
    async postQuote() {
      
    },
    // async testPostQuote() {
    //   let quotesRef = database.ref('quotes');
    //   quotesRef.push().set({
    //     "name": "Spider",
    //     "text": "I love spiders",
    //     "date": "30.05.2021"
    //   });
    // }
  },
}
</script>

<style>

</style>