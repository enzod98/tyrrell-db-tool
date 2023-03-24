<template>
  <q-layout view="hHh LpR ffr">
    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="las la-bars" @click="toggleLeftDrawer" />

        <q-toolbar-title><i>Tyrrell Database Tool</i></q-toolbar-title>
        <img
          :class="$q.screen.xs ? 'hidden' : ''"
          style="max-height: 8vh"
          src="~assets/images/main-banner.jpg"
        />

        <q-btn
          dense
          flat
          round
          icon="lar la-user-circle"
          @click="toggleRightDrawer"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered>
      <q-item
        clickable
        v-ripple
        v-for="(item, index) in leftDrawerData"
        :key="index"
        :to="{ name: item.routeName }"
        class="text-primary"
        active-class="text-white bg-primary"
      >
        <q-item-section avatar>
          <q-icon :name="item.icon" />
        </q-item-section>
        <q-item-section>{{ item.label }}</q-item-section>
      </q-item>
    </q-drawer>

    <q-drawer
      v-model="rightDrawerOpen"
      side="right"
      overlay
      behavior="mobile"
      elevated
    >
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer bordered class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { computed, ref } from "vue";
import { useQuasar } from "quasar";

export default {
  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    const leftDrawerData = ref([
      {
        routeName: "mainData",
        icon: "las la-info-circle",
        label: "Data",
      },
      {
        routeName: "mainRaceSetup",
        icon: "las la-tools",
        label: "Race Setup",
      },
      {
        routeName: "mainRaceHistory",
        icon: "las la-history",
        label: "Race history",
      },
    ]);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
      leftDrawerData,
    };
  },
};
</script>
