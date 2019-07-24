<template>
  <div>
    <h1>{{ connections }}</h1>
    <button v-on:click="addConnections()">add connection</button>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["addConnections"]),
    ...mapGetters(["getConnections"])
  },
  computed: {
    /**
     * @function
     * @returns {Array}
     */
    connections() {
      return this.getConnections().map(conn => conn.targetId);
    }
  }
};
</script>