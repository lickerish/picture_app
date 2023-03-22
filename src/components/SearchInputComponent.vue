<template>
    <div class="searchInputWrapper">
        <input id="search" placeholder="Search" v-model="searchValue" @input="handleInput" />
    </div>
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
.searchInputWrapper {
    width: 250px;
    display: flex;
    flex-direction: row;

    input {
        height: 30px;
        background: none;
        border: 0;
        border-bottom: 1px solid #FFF;
        font-family: 'Montserrat', sans-serif;
        color: white;
        font-weight: bold;
        font-style: italic;
    }

    textarea:focus,
    input:focus {
        outline: none;
        border-bottom: 2px solid whitesmoke;
    }
}
</style>
