<template>
  <div class="login">
    <form v-on:submit.prevent="logIn">
      <label>Секретний код</label>
      <input type="password" v-model="code">
      <p v-if="error" class="error-msg">Неправильний код</p>
      <button type="submit">Ввести</button>
    </form>
  </div>
</template>

<script>
import { firebase } from '../main.js'
import router from '../router'

export default {
  name: 'login',
  data() {
    return {
      code: "",
      email: "gold@gold.com",
      error: false,
    }
  },
  methods: {
    async logIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.code)
        .then(()=> {
          router.push('/');
        })
        .catch(() => {
          this.error = true;
        })

      this.code = "";
    }
  }
}
</script>

<style>

</style>