<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-tabs>
        <q-route-tab
          v-for="link in essentialLinks"
          :key="link.title"
          :icon="link.icon"
          :label="link.title"
          :to="link.link"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      show-if-above
      bordered
      :breakpoint="767"
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-white">
          Navigation
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";

const linksData = [
  {
    title: "Todo",
    icon: "list",
    link: "/"
  },
  {
    title: "Settings",
    icon: "settings",
    link: "/settings"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  .q-footer {
    display: none;
  }
}
</style>
