<template>
  <div class="wrapper">
    <div class="search">
      <input id="search" placeholder="Search" v-model="searchValue" @input="handleInput"/>
    </div>
    <div class="picture-presenter">
      <ul>
       <li v-for="picture in results" :key="picture.data[0].nasa_id">
        <p>{{ picture.data[0].description }}</p>
      </li>
      </ul>

    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';
const axios = require('axios');

export default {
  name: 'SearchView',
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function () {
      axios.get(`${API}?media_type=image&q=${this.searchValue}`).then((response) => {
        this.results = response.data.collection.items;
      }).catch((error) => {
        console.log(error);
      });
    }, 500),
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
