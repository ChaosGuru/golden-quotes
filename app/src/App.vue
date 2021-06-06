<template>
  <div id="app">    
    <router-link to="/"><h1 id="title">Золоті цитати</h1></router-link>
    <router-view></router-view>
    <div id="login-anchor">
      <router-link to="/login" class="button">Ввійти</router-link>
    </div>
  </div>
</template>

<style>
html {
  font-size: 62.5%;
  /* min-height: 90vh; */
}
body {
  border: 30px solid;
  border-image: url('./assets/frame2.png') 140 / 30px round;
  /* background-size: 40rem; */
  margin: 0;
  padding: 0 7vw;
  font-family: 'Marck Script', 'Roboto';
  font-size: 2rem;
  color: #645801;
  min-height: 100vh;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
#login-anchor {
  position: fixed;
  right: 2.5rem;
  bottom: 2rem;
}
#login-anchor a {
  padding: 0.3rem;
}
</style>