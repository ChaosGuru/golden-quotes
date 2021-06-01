<template>
  <div id="quote-form">
    <form v-on:submit.prevent="submitQuote">
      <label for="author">Автор</label>
      <input 
        type="text" 
        name="author" 
        id="author"
        maxlength="70"
        :class="{'has-error': error && invalidAuthor}"
        v-model="quote.author"
        v-on:focus="clearState">
      <label for="text">Цитата</label>
      <textarea 
        name="text" 
        id="text"
        maxlength="500"
        :class="{'has-error': error && invalidText}"
        v-model="quote.text"
        v-on:focus="clearState">
      </textarea>
      <p v-if="succes" class="succes-msg">Цитата додана!</p>
      <p v-if="error" class="error-msg">Помилка! Перевірте введені дані!</p>
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
      this.clearState();

      if (this.invalidAuthor || this.invalidText) {
        this.error = true;
        return;
      } 

      const today = new Date();
      const date = today.getDate()+'.'+(today.getMonth()+1)+'.'+today.getFullYear();
      this.quote.date = date;

      this.$emit('add:quote', this.quote);
      this.quote.author = '';
      this.quote.text = '';
      this.succes = true;
    },
    clearState() {
      this.succes = false;
      this.error = false;
    },
  },
  computed: {
    invalidAuthor() {
      return this.quote.author === '';
    },
    invalidText() {
      return this.quote.text === '';
    }
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
  height: 15rem;
}
button {
  font-size: 3rem;
}
p {
  margin-bottom: 20px;
}
.succes-msg {
  color: #635900;
}
.error-msg {
  color: #a419009d;
}
.has-error {
  border: 2px solid #a419009d;
  background-color: #fff2f2;
}
</style>