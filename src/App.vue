<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style lang="scss">
// Perfomance non-important in such small site
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap');

* {
  box-sizing: border-box;
}

body {
  font-family: 'Montserrat', sans-serif;
  background: linear-gradient(180deg, rgba(18, 18, 18, 1) 0%, rgba(40, 40, 40, 1) 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>
