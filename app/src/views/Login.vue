<template>
  <div class="login">
    <form v-on:submit.prevent="submitCode">
      <label>Секретний код</label>
      <input type="password" v-model="code">
      <button type="submit">Ввести</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      code: "",
    }
  },
  methods: {
    submitCode() {

    }
  }
}
</script>

<style>

</style>