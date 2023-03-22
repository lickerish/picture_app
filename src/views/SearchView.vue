<template>
  <div :class="[{ flexStart: step === 1 }, 'searchWrapper']">
    <transition name="fade">
      <BackgroundComponent v-if="step === 0" />
    </transition>
    <ClaimComponent v-if="step === 0" />
    <SearchInputComponent :value="searchValue" v-model="searchValue" @input="handleInput" :dark="step === 1" />
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
      loading: false,
      step: 0,
      searchValue: '',
      results: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    handleInput: debounce(function (event) {
      console.log(event.target.value);
      console.log(this.searchValue);
      this.loading = true;
      if (!this.searchValue) {
        return;
      }
      axios.get(`${API}?media_type=image&q=${this.searchValue}`).then((response) => {
        this.results = response.data.collection.items;
        this.loading = false;
        this.step = 1;
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

.flexStart {
  justify-content: flex-start;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
