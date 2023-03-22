<template>
  <div class="wrapper">
    <BackgroundComponent />
    <ClaimComponent />
    <div class="search">
      <img src="@/assets/search_view/Moon_Gray.png" alt="Moon icon" />
      <SearchInputComponent />
    </div>
    <!-- <div class="picture-presenter">
      <ul>
        <li v-for="picture in results" :key="picture.data[0].nasa_id">
          <p>{{ picture.data[0].description }}</p>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import ClaimComponent from '@/components/ClaimComponent.vue';
import SearchInputComponent from '@/components/SearchInputComponent.vue';
import BackgroundComponent from '@/components/BackgroundComponent.vue';

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
};
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.search {
  width: 250px;
  display: flex;
  flex-direction: row;

  img {
    height: 30px;
    padding-right: 3px;
    opacity: 70%;
    background: none;
    // align-self: self-end;
  }
}
</style>
