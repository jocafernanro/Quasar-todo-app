<template>
  <q-item class="text-grey-4" clickable exact :to="link">
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true
    },

    link: {
      type: String,
      default: "#"
    },

    icon: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.q-router-link--exact-active {
  color: white !important;
}
</style>
