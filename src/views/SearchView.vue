<template>
  <div class="searchWrapper">
    <BackgroundComponent />
    <ClaimComponent />
    <SearchInputComponent :value="searchValue" v-model="searchValue" @input="handleInput" />
  </div>
</template>

<script>
import ClaimComponent from '@/components/ClaimComponent.vue';
import SearchInputComponent from '@/components/SearchInputComponent.vue';
import BackgroundComponent from '@/components/BackgroundComponent.vue';
import debounce from 'lodash.debounce';
import axios from 'axios';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'SearchView',
  components: {
    ClaimComponent,
    SearchInputComponent,
    BackgroundComponent,
  },
  data() {
    return {
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function (event) {
      console.log(event.target.value);
      console.log(this.searchValue);
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
</script>

<style lang="scss" scoped>
.searchWrapper {
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
