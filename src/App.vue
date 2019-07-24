<template>
  <div>
    <inspector-component />
  </div>
</template>

<script>
import Inspector from "./components/Inspector.vue";
import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  components: {
    "inspector-component": Inspector
  }
};
</script>

<style>
</style>