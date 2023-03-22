<template>
    <input id="search-input" placeholder="Search" v-model="searchValue" @input="handleInput" />
</template>

<script>
import debounce from 'lodash.debounce';

const API = 'https://images-api.nasa.gov/search';
const axios = require('axios');

export default {
    name: 'SearchInputComponent',
    data() {
        return {
            searchValue: '',
            results: [],
        };
    },
    methods: {
        // eslint-disable-next-line
        handleInput: debounce(function () {
            if (!this.searchValue) {
                return;
            }
            axios.get(`${API}?media_type=image&q=${this.searchValue}`).then((response) => {
                this.results = response.data.collection.items;
            }).catch((error) => {
                console.log(error);
            });
        }, 500),
    },
};
</script >

<style lang="scss" scoped>
input {
    height: 30px;
    background: none;
    border: 0;
    font-size: 16px;
    border-bottom: 1px solid #FFF;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-style: italic;
    transition: box-shadow .5s ease-out;
    text-align: center;
}

input:focus {
    outline: none;
    box-shadow: 0 9px 12px -10px rgba(255, 255, 255, 0.5);
    font-style: normal;
}

input:focus::placeholder {
    color: transparent;
}
</style>
