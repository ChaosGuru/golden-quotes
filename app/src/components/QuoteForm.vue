<template>
  <div id="quote-form">
    <form v-on:submit.prevent="submitQuote">
      <label for="author">Автор</label>
      <input 
        type="text" 
        name="author" 
        id="author"
        v-model="quote.author">
      <label for="text">Цитата</label>
      <textarea 
        name="text" 
        id="text"
        v-model="quote.text">
      </textarea>
      <button type="submit">Додати цитату</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "quote-form",
  data() {
    return {
      quote: {
        author: '',
        text: '',
        date: null,
      },
      succes: false,
      error: false,
    }
  },
  methods: {
    submitQuote() {
      const today = new Date();
      const date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
      this.quote.date = date;

      this.$emit('add:quote', this.quote);
    }
  },
  computed: {

  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 3rem;
}

input, textarea {
  margin-bottom: 20px;
  color: #A49300;
  font-size: 2rem;
  height: 4rem;
  background-color: #FFFEF2;
  border: 2px solid #A49300;
  outline: transparent;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 10rem;
}

button {
  font-size: 3rem;
}
</style>