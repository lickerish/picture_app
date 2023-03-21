<template>
  <div class="wrapper">
    <div class="search">
      <input id="search" placeholder="Search" v-model="searchValue" @input="handleInput"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchView',
  data() {
    return {
      searchValue: '',
    };
  },
  methods: {
    handleInput() {
      console.log(this.searchValue)
    },
  },
};
</script>

<style lang="scss" scoped>
  .wrapper {
    display:flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 30px;
    width: 100%;
  }
  .search {
    width: 250px;
    display: flex;
    flex-direction: column;

    input {
      height: 30px;
      border: 0;
      border-bottom: 1px solid black;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      color: gray;
      font-style: italic;
    }

    textarea:focus, input:focus {
      outline: none;
      border-bottom: 2px solid black;
    }
  }
</style>
