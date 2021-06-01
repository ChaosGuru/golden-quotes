<template>
  <div id="quote-table">
    <div class="quote" v-for="quote in quotes" v-bind:key="quote.key">
      <div v-if="editIndex !== quote.key">
        <p class="quote-text">{{ quote.text }}</p>
        <p class="quote-info">{{ quote.author }} / {{ quote.date }}</p>
        <button type="button">Edit</button>
        <button 
          type="button" 
          class="delete-button"
          v-on:click="$emit('remove:quote', quote.key)">
        Delete</button>
      </div>
      <div v-else>
        <input type="text">
        <input type="text">
        <button type="button">Save</button>
        <button type="button" class="cancel-button">Cancel</button>
      </div>
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

  }
}
</script>

<style scoped>
#quote-table {
  display: flex;
  flex-direction: column-reverse;
}
.quote {
  margin-top: 20px;
  padding: 10px;
  font-size: 2.5rem;
  background: #FFFEF2;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid;
  border-image: linear-gradient(10deg, #FFE600 10%, rgba(255, 230, 0, 0) 50%);
  border-image-slice: 1;
}
.quote button {
  width: 7rem;
  margin-right: 1rem;
}
.quote-text::after, .quote-text::before {
  content: '"';
}
.quote-info {
  text-align: right;
}
</style>