<template>
  <div>
    <inspector-component />
  </div>
</template>

<script lang="js">
import Inspector from './components/Inspector.vue';

export default {
  components: {
    'inspector-component': Inspector,
  },
  data() {
    return {
      message: 'Hello Universe',
    };
  }
};
</script>

<style>

</style>