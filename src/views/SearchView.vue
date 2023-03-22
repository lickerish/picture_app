<template>
  <div :class="[{ flexStart: step === 1 }, 'searchWrapper']">
    <transition name="slide">
      <LogoComponent v-if="step === 1" class="logo" />
    </transition>
    <transition name="fade">
      <BackgroundComponent v-if="step === 0" />
    </transition>
    <ClaimComponent v-if="step === 0" />
    <SearchInputComponent :value="searchValue" v-model="searchValue" @input="handleInput" :dark="step === 1" />
    <div class="results" v-if="results && !loading && step === 1">
      <ItemComponent v-for="item in results" :item="item" :key="item.data[0].nasa_id" />
    </div>
  </div>
</template>

<script>
import ClaimComponent from '@/components/ClaimComponent.vue';
import SearchInputComponent from '@/components/SearchInputComponent.vue';
import BackgroundComponent from '@/components/BackgroundComponent.vue';
import debounce from 'lodash.debounce';
import axios from 'axios';
import LogoComponent from '@/components/LogoComponent.vue';
import ItemComponent from '@/components/ItemComponent.vue';

const API = 'https://images-api.nasa.gov/search';

export default {
  name: 'SearchView',
  components: {
    ClaimComponent,
    SearchInputComponent,
    BackgroundComponent,
    LogoComponent,
    ItemComponent,
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
        this.step = 0;
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
  transition: opacity .5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: margin-top .5s ease;
}

.slide-enter {
  margin-top: -50px;
}

.results {
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
