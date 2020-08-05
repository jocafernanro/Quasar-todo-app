<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task
        v-for="(task, key) in tasks"
        :key="key"
        :task="task"
        :id="key"
      ></task>
    </q-list>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Todo",
  components: {
    task: require("components/Tasks/Task.vue").default
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  }
};
</script>

<style lang="scss">
.task-strikethough {
  text-decoration: line-through;
}
</style>
