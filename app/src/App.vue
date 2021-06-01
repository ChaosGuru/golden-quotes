<template>
  <div id="app">
    <h1 id="title">Золоті цитати</h1>
    <quote-form @add:quote="addQuote"></quote-form>
    <quote-table 
      v-bind:quotes="quotes"
      @remove:quote="removeQuote">
    </quote-table>
  </div>
</template>

<script>
import { database } from './main.js'
import QuoteTable from './components/QuoteTable.vue'
import QuoteForm from './components/QuoteForm.vue'

export default {
  name: 'App',
  components: {
    QuoteTable,
    QuoteForm,
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
      quotesRef.on('child_added', (snapshot) => {
        let quote = snapshot.val();
        quote['key'] = snapshot.key;
        this.quotes.push(quote);
      });
      quotesRef.on('child_removed', (snapshot) => {
        let quoteKey = snapshot.key;
        console.log(quoteKey);
        this.quotes = this.quotes.filter(quote => quote.key != quoteKey);
      });
    },
    async addQuote(quote) {
      let quotesRef = database.ref('quotes');
      let newQuoteRef = quotesRef.push();
      newQuoteRef.set(quote);
    },
    async removeQuote(quoteKey) {
      database.ref('quotes/' + quoteKey).remove();
    }
  },
}
</script>

<style>
html {
  font-size: 62.5%;
}
body {
  margin: 0;
  padding: 7vw;

  font-family: 'Marck Script', 'Roboto';
  font-size: 2rem;
  /* color: #A49300; */
  color: #645801;
}
p {
  margin: 0;
}
button {
  background: #FFE600;
  border: 2px solid #A49300;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: 'Marck Script', 'Roboto';
  font-size: 2rem;
  color: #645801;
}
button:hover {
  background-color: #645801;
  border-color: #FFE600;
  color: #FFE600;
}
#title {
  margin: 0;
  text-align: center;
  font-size: 4rem;
  font-weight: normal;
}
</style>
