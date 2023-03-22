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
  margin: 0;
  padding: 0;
}
</style>
