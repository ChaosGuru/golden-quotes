<template>
  <div class="qoutes">
    <quote-form @add:quote="addQuote"></quote-form>
    <quote-table 
      v-bind:quotes="quotes"
      @remove:quote="removeQuote">
    </quote-table>
    <div id="login-anchor">
      <router-link to="/login" class="button">Ввійти</router-link>
      <button v-on:click="logOut">Вийти</button>
    </div>
  </div>
</template>

<script>
import { database, firebase } from '../main.js'
import QuoteTable from '../components/QuoteTable.vue'
import QuoteForm from '../components/QuoteForm.vue'

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
    },
    async logOut() {
      firebase.auth().signOut().then(() => {
        console.log("You have logged out")
        // change state
      })
    }
  },
}
</script>

<style>
p {
  margin: 0;
}
button, .button {
  background: #FFE600;
  border: 2px solid #A49300;
  border-radius: 4px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: 'Marck Script', 'Roboto';
  font-size: 2rem;
  color: #645801;
}
button:hover, button:focus, .button:hover, .button:focus {
  background-color: #645801;
  border-color: #FFE600;
  outline: #FFE600;
  color: #FFE600;
}
#title {
  margin: 0;
  color: #FFE600;
  text-align: center;
  font-size: 5rem;
  font-weight: 600;
  text-shadow: 
    2px 2px 0 #645801,
    -1px 1px 0 #645801,
    -1px -1px 0 #645801,
    1px -1px 0 #645801;
}
#login-anchor {
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
}
#login-anchor a {
  padding: 0.3rem;
}
@media screen and (min-width: 1000px) {
#app {
  margin: auto;
  width: 600px;
}
}
</style>
