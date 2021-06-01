<template>
  <div id="quote-table">
    <div class="quote" v-for="quote in quotes" v-bind:key="quote.key">
      <div v-if="editIndex !== quote.key">
        <p class="quote-text">{{ quote.text }}</p>
        <p class="quote-info">{{ quote.author }} / {{ quote.date }}</p>
        <!-- <button type="button">Редагувати</button> -->
        <button 
          type="button" 
          class="delete-button"
          v-on:click="removeQuote(quote.key)">
        Видалити</button>
      </div>
      <!-- <div v-else>
        <input type="text">
        <input type="text">
        <button type="button">Зберегти</button>
        <button type="button" class="cancel-button">Скасувати</button>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'quote-table',
  data() {
    return {
      editIndex: null,
      editData: null,
    }
  },
  props: {
    quotes: Array,
  },
  methods: {
    removeQuote(quoteKey) {
      let remove = confirm('Ви впевнені, що хочете видалити цю неперевершену цитату?');
      if (remove) {
        this.$emit('remove:quote', quoteKey);
      }
    }
  }
}
</script>

<style scoped>
#quote-table {
  display: flex;
  flex-direction: column-reverse;
}
.quote {
  position: relative;
  margin-top: 20px;
  padding: 10px;
  font-size: 2.5rem;
  background: #fffde7;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #FFE600;
  word-wrap: break-word;
  /* border-image: linear-gradient(10deg, #FFE600 50%, rgba(255, 230, 0, 0) 80%); */
  /* border-image-slice: 1; */
}
.quote button {
  width: 12rem;
}
.delete-button {
  margin-left: 1rem;
  border-color: #a419009d;
  color: #a419009d;
  background-color: #ffe0e0;
}
.delete-button:hover, .delete-button:focus {
  background-color: #a419009d;
  border-color: #ffe0e0;
  outline: #ffe0e0;
  color: #ffe0e0;
}
.quote-text::after, .quote-text::before {
  content: '"';
}
.quote-info {
  text-align: right;
}
</style>